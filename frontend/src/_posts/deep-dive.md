---
title: "Deep Dive - ERC3643"
date: "2024-01-29"
status: "Draft v0.1"
---

<!--  **Sponsored by xxx**🟢✨ -->

**Research Lead: Bradley Stone**🟢✨<br>
**Status: DRAFT**

# ERC-3643 Overview

<ul>
<li>Compliance and Identity Verification: Emphasizes compliance through embedded transfer rules in tokens and rigorous identity verification using ERC-734/-735 standards and ONCHAINID.</li>
<li>Asset Tokenization: Supports a wide range of real-world asset (RWA) tokenization, including securities, commodities, e-money, and loyalty programs.</li>
<li>Interoperability and Upgradability: Ensures compatibility with Ethereum Virtual Machine (EVM) and ERC-20 standards and features upgradable smart contracts.</li>
<li>Enhanced Liquidity and Cost Reduction: Aims to increase asset liquidity and reduce transaction fees through automated onchain settlement.</li>
<li>Control and Customization: Allow issuers/agents to retain control over tokens and offers high customization for securities.</li>
</ul>

## Summary

**_Problem:_** The current token standards lack the necessary compliance controls required for the safe and legal tokenization of real-world assets and securities. This creates potential risks for both issuers and investors. Additionally, the absence of compliance enforcement at the token level has limited the integration of regulated assets into decentralized finance.

**_Solution:_** ERC-3643 is an open-source, ERC-20-compliant suite of smart contracts that enables the issuance, management, and transfer of permissioned tokens. It is designed to address the limitations of previous ERC proposals and focuses on compliance and regulatory adherence.

**_On a technical level:_** The Ethereum ecosystem has approved ERC-3643, adding specific functions and protocols that enable on-chain enforcement of compliance.

**_In practice:_** ERC-3643 involves several key components, including a token, identity registry and storage, trusted issuer’s registry, claim topics registry, and modular compliance interfaces.

## Acronyms used:

T-REX = Token for Regulated EXchanges<br>

RWA = Real-World Assets<br>

EVM = Ethereum Virtual Machine<br>

STO = Security Token Offering

# Introduction

To understand ERC-3643, we start by examining the challenges associated with tokenizing regulatory-compliant assets on an EVM-compatible blockchain.

## Traditional Token Standards and Their Limitations

The prevalent token standards on Ethereum, such as ERC-20 for fungible tokens and ERC-721 for non-fungible tokens, serve as the backbone for most digital assets on the network. These standards have catalyzed the widespread adoption of digital tokens by providing a uniform set of rules for token implementation. However, they fall short when it comes to embedding regulatory compliance into the token's functionality. This limitation is particularly problematic for securities and other regulated assets, which require adherence to strict regulatory frameworks. The process of ensuring compliance is typically separated from the token's protocol layer, placing the onus on token issuers and validators to perform due diligence—a model that is both inefficient and prone to error.

The need for compliance integration directly within the token's smart contract architecture is not only a matter of regulatory necessity but also a significant UX hurdle. Participants in the regulated token market must navigate a complex web of legal requirements, which can deter engagement and investment. Just as the inseparability of private keys and user addresses in traditional wallets presents a UX challenge regarding security and recovery, the lack of integrated compliance measures in token standards poses a barrier to the broader adoption of asset tokenization.

We will explore how ERC-3643 addresses these issues soon, but first, let’s define tokenized securities and RWAs.

# Tokenized Securities

Tokenized securities are digital representations of traditional financial assets on a blockchain, offering enhanced accessibility and liquidity. They differ from traditional securities in improved liquidity, fractional ownership, global accessibility, reduced administrative costs, enhanced transparency, and security.

Tokenization's security relies on blockchain's immutability, cryptographic methods, access controls, smart contract integrity, regulatory adherence, transparent audit trails, and data vault security.

Traditional methods already often use encryption to secure data, but tokenization replaces sensitive data with non-sensitive equivalents stored separately, often preferred for regulatory compliance.

Tokenization of securities follows similar steps as for other assets, but with a closer focus on regulatory compliance. That entails selecting assets for digital representation, drafting smart contracts, creating digital tokens, and distributing them via regulated channels like STOs.

# Real-World Assets (RWAs)

Real World Assets (RWAs) are tangible or intangible assets that derive their value from the physical world and are represented digitally on a blockchain. These assets include real estate, commodities, equities, bonds, and personal data. Tokenizing RWAs enables fractional ownership, increased liquidity, and broader accessibility to high-value assets. However, the integration of RWAs into DeFi presents regulatory challenges and requires robust compliance measures. Despite the benefits, tokenizing physical assets comes with risks, such as regulatory obstacles and the need for secure and compliant infrastructure.

Traditional token standards like ERC-20 and ERC-721 catalyzed the initial wave of digital asset adoption by creating a uniform token framework. However, they inherently lack the mechanisms to integrate regulatory compliance, posing challenges for tokenizing regulated assets such as securities.

We will explore some of the most commonly used standards below to develop a better perspective of why ERC-3643 is needed.

## ERC-20

ERC-20 is a technical standard used for creating fungible tokens on the Ethereum blockchain. It defines a set of rules that developers can follow to create their own tokens on Ethereum, providing a common set of interfaces and functions that different token implementations can use. ERC-20 tokens are exchangeable with other tokens and can represent an asset, right, ownership, access, cryptocurrency, or anything else that is not unique in and of itself but can be transferred. The purpose of ERC-20 is to facilitate interoperability between smart contracts, ensuring newly minted tokens are compatible with third-party services like exchanges and wallets. ERC-20 tokens are widely used in cryptocurrency, including popular examples such as Tether USD, USD Coin, and Binance USD.

Using ERC-20 for tokenized securities and regulated assets can present some challenges and limitations. One of the main challenges is that ERC-20 tokens are fungible, meaning that each token is interchangeable with another token of equal value, which may not be suitable for unique or non-fungible assets. Additionally, ERC-20 tokens may not be inherently compliant with financial regulations, especially concerning securities and anti-money laundering laws, which may require additional compliance measures. ERC-20 tokens also face scalability issues, high gas fees, and interoperability concerns. Finally, ERC-20 tokens may pose security vulnerabilities, such as the risk of significant monetary or data loss, and may require robust access control mechanisms and secure smart contracts.

## ERC-721

ERC-721 is a standard for creating NFTs on the Ethereum blockchain. Each token created using ERC-721 is unique and represents ownership of a distinct item or content. ERC-721 tokens provide a transparent and immutable record of ownership, ensuring that all transactions are publicly visible and auditable. Some benefits of ERC-721 for NFTs include ownership, gaming, digital art, collectibles, and enhanced liquidity. ERC-721 tokens can be used to tokenize ownership of any arbitrary data, drastically increasing the design space of what can be represented as a token on the Ethereum blockchain.

Using ERC-721 for tokenized securities and regulated assets can present several issues and challenges. One of the main challenges is that some tokenized assets, such as virtual items in crypto games and collectibles, could run afoul of securities laws if not structured properly. The SEC has issued guidance on and made determinations that the issuance of certain crypto tokens is securities and must comply with the securities laws.

NFTs can be challenging to classify, and there is a lack of official guidance from regulators on categorizing them. Other legal considerations for NFTs include intellectual property rights, anti-money laundering and sanctions implications, cybersecurity concerns, and state laws governing virtual currency or money transmission. ERC-721 tokens are also unique and indivisible, making them more difficult to work with than fungible tokens like ERC-20. Finally, using ERC-721 for regulated assets may require additional compliance measures, such as verifying the identity of token holders and ensuring compliance with financial regulatory frameworks.

## ERC-1400

ERC-1400 builds upon ERC-20 with additional features like gas refunding, Chainlink VRF integration, multiple signatures support, and smart contract-based transfers.

ERC-1400 can be used to tokenize public equities, private placements, real estate, commodities, e-money, and loyalty programs. ERC-1400, while older and with a larger development community, has limitations compared to ERC-3643.

While sharing the open-source nature and a history of external audits, ERC-1400 lacks some of the advanced features of ERC-3643. It does not validate transfers on-chain or provide a native token recovery process or an immutable cap table. Additionally, ERC-1400 does not facilitate permission management with multiple agents or manage stakeholders' identities directly within the protocol. However, it does support partially fungible tokens, which can be an advantage in certain decentralized exchange environments.

The main differences between ERC-3643 and ERC-1400 are as follows:

Focus: ERC-3643 focuses on security and compliance for financial assets, while ERC-1400 provides more general-purpose functionality.

Scalability and Performance: ERC-3643 prioritizes security and compliance over scalability, while ERC-1400 has been designed with scalability in mind from the ground up, supporting both on-chain and off-chain scalability solutions to improve performance.

Transfer Restrictions: ERC-3643 aims to restrict transfers according to compliance and regulation rules, whereas ERC-1400 incorporates the basic ERC-20 transfer function with no additional restrictions.

Transaction Execution: ERC-1400 requires the use of off-chain generated cryptographic keys for transaction execution, whereas ERC-3643 relies on an automated, blockchain-based system.

In summary, ERC-3643 is more focused on security and compliance for financial assets, while ERC-1400 is designed with more general-purpose functionality and scalability in mind. The two standards also differ in their approach to transfer restrictions and transaction execution.

## ERC-734 and ERC-735

ERC-734 and ERC-735 are Ethereum token standards that define a framework for on-chain identity management. These standards are the backbone of identity verification for ERC-3643, ensuring that the tokens can operate within the required regulatory frameworks.

ERC-734, also known as the Ethereum Identity Standard, proposes a way to represent identities using smart contracts.

These identities can be associated with external accounts, contracts, and even off-chain services, allowing for a versatile and comprehensive representation of an entity's digital identity.

An ERC-734 identity contract can perform actions on behalf of the user if it's authorized, acting as a proxy or a controller, which is essential for automated compliance checks within ERC-3643.

ERC-735 works in tandem with ERC-734 by allowing these identities to make and receive claims.

A claim is a statement made by one party about another party; for example, a claim could verify that an identity has passed KYC (Know Your Customer) procedures.

These claims are issued by third parties, known as Claim Issuers, which could be trusted entities like government bodies, financial institutions, or other certification authorities.

## Other standards for addressing compliance in tokenized assets

# Introducing ERC-3643: Addressing Compliance in Token Standards

ERC-3643 embeds regulatory compliance directly into a token's smart contract framework:

<ul>
<li>

**Integrated Compliance Mechanisms:** Unlike its predecessors, ERC-3643 ensures that compliance with regulatory frameworks is built into the token's architecture. This integration facilitates the efficient management of security tokens, ensuring adherence to legal mandates throughout the token's lifecycle.

</li>
<li>

**Automated On-Chain Validator System:** Leveraging on-chain identities for eligibility checks, ERC-3643 introduces an automated validator system. This system streamlines the process of validating transactions and investor identities, enhancing the security and legal conformity of tokenized assets.

</li>
<li>

**Advanced Token Lifecycle Management:** The standard provides a robust framework for managing the complete lifecycle of security tokens. This includes issuance, transfer between eligible investors, and enforcement of compliance rules, with additional features like token pausing and freezing in response to regulatory needs.

</li>
<li>

**Enhanced Security and Flexibility:** ERC-3643 builds upon the ERC-20 structure while introducing additional functions for compliance and security. It includes conditional transfer mechanisms, recovery systems for lost access, and functionalities for freezing and managing tokens, reflecting a comprehensive approach to regulated token management.

</li>
</ul>

## Implementing ERC-3643: T-REX Protocol

The T-REX protocol is a group of Solidity smart contracts that implement the ERC-3643 standard. It is designed to aid the issuance, administration, and transfer of security tokens to make them compliant with regulations. The protocol provides secure and compliant transactions to all the parties engaged in the token exchange.

The T-REX protocol and the ERC-3643 standard are closely related but not the same. Understanding their relationship requires distinguishing between a protocol and a standard in the context of blockchain and tokenization.

ERC-3643 is a specific Ethereum token standard. It outlines a set of rules and specifications for creating and managing security tokens on the Ethereum blockchain. The standard focuses on ensuring that tokens comply with regulatory requirements, particularly for securities. ERC-3643 defines how tokens should behave, how they enforce compliance, and how they interact with various components like identity registries and compliance contracts.

The T-REX (Token for Regulated EXchanges) protocol is an implementation of the ERC-3643 standard. It's a comprehensive suite of Solidity smart contracts that operationalize the guidelines set out in ERC-3643. T-REX includes specific smart contracts and tools that facilitate the issuance, management, and transfer of security tokens in a compliant way. While it's based on the ERC-3643 standard, T-REX is more of a practical application, a toolkit, that realizes the principles of the standard in a usable form.

Think of ERC-3643 as the blueprint – it provides the theoretical framework and guidelines. T-REX, on the other hand, is like a constructed building based on that blueprint – it's a practical, ready-to-use implementation of the ERC-3643 standard. T-REX ensures that the security tokens created and managed under its system are compliant with the ERC-3643 standard. It's common in blockchain for a standard to have multiple implementations or protocols that put its rules into practice, and T-REX is one such implementation for ERC-3643.

In summary, while ERC-3643 lays down the rules and specifications for compliant token creation and management, T-REX is a specific protocol that implements these rules, providing a concrete toolset for creating and managing ERC-3643 compliant security tokens.

## T-REX Protocol Development

- The T-REX protocol was developed by Tokeny Solutions. It emerged as a comprehensive suite of smart contracts tailored for the issuance, management, and transfer of security tokens in a regulatory-compliant manner.
  - T-REX was designed to address the challenges in tokenizing securities and other regulated assets, focusing on compliance, identity verification, and the management of tokenized assets.

## Development of ERC-3643 Standard

- Building upon the principles and functionalities established by the T-REX protocol, the ERC-3643 standard was later proposed.
- ERC-3643 essentially formalized and standardized the approaches and mechanisms introduced by T-REX, making them part of a recognized Ethereum token standard.
- The standardization under ERC-3643 meant that the methodologies and systems developed by T-REX could be more widely adopted and implemented across different projects and platforms within the Ethereum ecosystem.

In essence, T-REX served as a precursor and foundational framework that informed the development of ERC-3643. The standardization under ERC-3643 provided a broader and more formal recognition of the practices and mechanisms initially innovated by the T-REX protocol.

# ERC-3643 Standard: Technical Breakdown

ERC-3643, known today mainly for its implementation in the T-REX (Token for Regulated EXchanges) protocol developed by Tokeny, is an advanced security token standard created to address the specific needs of regulated assets on the Ethereum blockchain. Developed by Joachim Lebrun, Tony Malghem, Kevin Thizy, Luc Falempin, and Adam Boudjemaa, it was introduced on July 9, 2021, and requires compatibility with Ethereum Improvement Proposals (EIPs) 20 and 173.

## Core Aspects of ERC-3643

1. Institutional Grade Security Token Framework: T-REX provides a comprehensive set of interfaces for managing and transferring security tokens in a compliant manner. It utilizes an automated on-chain validator system (ONCHAINID) that leverages on-chain identities for eligibility checks.

2. Agent Role Interface: ERC-3643 introduces an Agent role, crucial for managing access to smart contract functions. This includes the ability to add and remove agents, a responsibility typically held by the contract's owner. The Agent role is integral in contracts serving as Token contracts or Identity Registries under this standard.

3. Compliance and Transfer Conditions: Transfers within the T-REX framework must satisfy several conditions, including sufficient balance by the sender, whitelisting and verification of the receiver in the Identity Registry, and compliance with rules set in the Compliance smart contract.

4. Identity Verification: The 'isVerified' function checks if a receiver is a valid investor based on their wallet address being in the Identity Registry and the presence of necessary claims in their Identity contract. Similarly, the 'canTransfer' function assesses if transfers comply with broader compliance rules.

5. Enhanced ERC-20 Structure: While building on the standard ERC-20 structure, ERC-3643 introduces additional functions for compliance in security token transactions. This includes conditional implementation of transfer and transferFrom functions, recovery mechanisms for lost access to private keys, and the ability to freeze tokens partially or wholly.

6. Identity Registry Interface: This interface links to a storage containing a dynamic whitelist of identities, correlating wallet addresses with Identity smart contracts and investor country codes. The Identity Registry, managed by agents, plays a pivotal role in verifying investor eligibility.

7. Identity Registry Storage Interface: It stores the identity addresses of authorized investors and separates the Identity Registry functions from its storage, facilitating a single Identity Registry contract per token but with a shared whitelist.

8. Compliance Contract: The Compliance contract sets and ensures adherence to the offering's rules throughout the token's lifecycle, defining parameters like investor limits per country and maximum token amounts per investor.

9. Trusted Issuer’s Registry Interface: This stores contract addresses of trusted claim issuers necessary for an investor to hold the token. It's managed by the owner, who controls the addition, removal, and updating of Trusted Issuers.

10. Claim Topics Registry Interface: Storing trusted claim topics, this interface ensures that the Identity contract of token owners contains necessary claims.

11. Comprehensive Transfer, Identity, and Lifecycle Management: ERC-3643 introduces robust frameworks for managing transfer restrictions, on-chain identities, and the entire lifecycle of security tokens, including additional compliance rules and features like token pausing and freezing.

12. Backward Compatibility and Security: T-REX tokens maintain compatibility with ERC-20 and ERC-173. The standard has been audited by Kapersky and Hacken, confirming its security integrity.

## Unpacking ONCHAINID

ONCHAINID is a smart contract-based system enabling entities to establish self-sovereign digital identities on the blockchain, ensuring lifetime control and non-removability. It integrates with ERC-734 and ERC-735 standards, stores on the Polygon network, and is EVM-compatible. Identities gain value through verifiable claims made by trusted third parties. ONCHAINID is fundamental to ERC-3643, primarily for security tokens, and enhances pseudonymous compliance on blockchain systems, allowing users to control and share their data securely.

# Case Studies

## Case Study 1

## Case Study 2

## Case Study 3

# ERC3643 Tooling

# Resources and Further Reading

# Acknowledgements
