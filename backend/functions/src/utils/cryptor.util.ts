import CryptoJS from 'crypto-js';
import { cipher as blockCipher, pki, random, util } from 'node-forge';

const aes = CryptoJS.AES;

const toArray = (obj: any) => (Array.isArray(obj) ? obj : [obj]);

interface KeyPair {
    publicKey: string;
    privateKey: string;
}

interface Encrypted {
    iv: string;
    keys: { [k: string]: any };
    cipher: string;
    signature?: string;
}

interface Decrypted {
    message: string;
    signature?: string;
}

function generateKeyPair(callback: (keypair: KeyPair) => void, keySize: number = 4096) {
    // Generate key pair using forge
    pki.rsa.generateKeyPair(
        {
            bits: keySize,
            workers: -1,
        },
        (_, keyPair) => {
            const pemKeyPair = {
                publicKey: pki.publicKeyToPem(keyPair.publicKey),
                privateKey: pki.privateKeyToPem(keyPair.privateKey),
            };
            callback(pemKeyPair);
        },
    );
}

function getPublicKeyFingerprint(publicKey: pki.PublicKey) {
    return pki.getPublicKeyFingerprint(publicKey, {
        encoding: 'hex',
        delimiter: ':',
    });
}

function validate(encrypted: string) {
    const p = JSON.parse(encrypted);
    if (
        // Check required properties
        !(p.hasOwnProperty('iv') && p.hasOwnProperty('keys') && p.hasOwnProperty('cipher'))
    )
        throw new Error('Encrypted message is not valid');
}

function encrypt(
    publicKeys: string[] | pki.rsa.PrivateKey[] | string | pki.rsa.PrivateKey,
    message: string | ArrayBuffer | util.ArrayBufferView | util.ByteStringBuffer,
    signature?: string,
): Encrypted {
    // Generate flat array of keys
    const publicKeysArr = toArray(publicKeys); // Map PEM keys to forge public key objects

    const publicPemKeys: pki.rsa.PublicKey[] = publicKeysArr.map(key => (typeof key === 'string' ? pki.publicKeyFromPem(key) : key)); // Generate random keys

    const iv = random.getBytesSync(32);
    const key = random.getBytesSync(256 / 8); // Encrypt random key with all of the public keys

    var encryptedKeys: { [k: string]: any } = {};
    publicPemKeys.forEach(publicKey => {
        const encryptedKey = publicKey.encrypt(key, 'RSA-OAEP');

        const fingerprint = getPublicKeyFingerprint(publicKey);

        encryptedKeys[fingerprint] = util.encode64(encryptedKey);
    }); // Create buffer and cipher

    const buffer = util.createBuffer(message, 'utf8');
    const cipher = blockCipher.createCipher('AES-CBC', key); // Actual encryption

    cipher.start({
        iv,
    });
    cipher.update(buffer);
    cipher.finish(); // Attach encrypted message int payload

    let payload: Encrypted = {
        iv: util.encode64(iv),
        keys: encryptedKeys,
        cipher: util.encode64(cipher.output.data),
        signature: signature,
    };

    return payload;
}

function decrypt(privateKey: string | pki.rsa.PrivateKey, encrypted: string): Decrypted {
    // Validate encrypted message
    validate(encrypted); // Parse encrypted string to JSON

    const payload = JSON.parse(encrypted); // Accept both PEMs and forge private key objects
    // Cast PEM to forge private key object

    if (typeof privateKey === 'string') privateKey = pki.privateKeyFromPem(privateKey); // Get key fingerprint

    const fingerprint = getPublicKeyFingerprint(privateKey as unknown as pki.PublicKey); // Get encrypted keys and encrypted message from the payload

    const encryptedKey = payload.keys[fingerprint]; // Log error if key wasn't found

    if (!encryptedKey) throw new Error("RSA fingerprint doesn't match with any of the encrypted message's fingerprints"); // Get bytes of encrypted AES key, initialization vector and cipher

    const keyBytes = util.decode64(encryptedKey);
    const iv = util.decode64(payload.iv);
    const cipher = util.decode64(payload.cipher);
    const tag = payload.tag && util.decode64(payload.tag); // Use RSA to decrypt AES key

    const key = privateKey.decrypt(keyBytes, 'RSA-OAEP'); // Create buffer and decipher

    const buffer = util.createBuffer(cipher);
    const decipher = blockCipher.createDecipher('AES-CBC', key); // Actual decryption

    decipher.start({
        iv,
        tag,
    });
    decipher.update(buffer);
    decipher.finish(); // Return utf-8 encoded bytes

    const bytes = decipher.output.getBytes();
    const decrypted = util.decodeUtf8(bytes);
    const output: Decrypted = {
        message: decrypted,
        signature: payload.signature,
    };
    return output;
}

export function generateKeys() {
    return new Promise(resolve => {
        generateKeyPair((keyPair): void => {
            resolve({
                public: keyPair.publicKey,
                private: keyPair.privateKey,
            });
        });
    });
}

export async function encryptData(
    data: string | ArrayBuffer | util.ArrayBufferView | util.ByteStringBuffer,
    key: string | pki.rsa.PrivateKey | string[] | pki.rsa.PrivateKey[],
): Promise<Encrypted> {
    return new Promise(resolve => {
        resolve(encrypt(key, data));
    });
}

export async function decryptData(data: string, key: string | pki.rsa.PrivateKey): Promise<Decrypted> {
    return new Promise(resolve => {
        resolve(decrypt(key, data));
    });
}

export async function encryptPrivateKey(pair: { private: any; public: any }, password: string | CryptoJS.lib.WordArray) {
    return new Promise(resolve => {
        const priv = pair.private;
        const encpriv = aes.encrypt(priv, password).toString();
        resolve({ public: pair.public, private: encpriv });
    });
}

export async function decryptPrivateKey(pair: { private: any; public: any }, password: string | CryptoJS.lib.WordArray) {
    return new Promise(resolve => {
        try {
            const encpriv = pair.private;
            const decrypted = aes.decrypt(encpriv, password);
            const encoded = decrypted.toString(CryptoJS.enc.Utf8);
            resolve({ public: pair.public, private: encoded });
        } catch (e) {
            console.error(e);
            resolve(false);
        }
    });
}
