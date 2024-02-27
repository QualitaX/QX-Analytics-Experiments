import { db } from '@config/firebase.config';

class Translate {
    region: string;
    constructor(region: string) {
        this.region = region;
    }

    async translate(loc: string, key: string) {
        const snapshots = await db
            .collection('translations')
            .where('loc', '==', loc)
            .where('key', '==', key)
            .where('translated', '==', true)
            .limit(1)
            .get();
        if (snapshots.docs.length < 1) return false;
        const doc = snapshots.docs[0];
        const data = doc.data();
        return data.translate[this.region];
    }

    async register(loc: string, message: string) {
        const snapshots = await db.collection('translations').where('message', '==', message).get();
        if (snapshots.empty)
            await db.collection('translations').add({
                loc: loc,
                translated: false,
                message: message,
            });
    }
}

export default Translate;
