---
Title: "Tracking the Adoption of ERC-3643"
Status: Draft v1
Date: "2024-01-29"
Authors: Anaïs Ofranc, Juwon Bak
---

<!--  **Sponsored by xxx**🟢✨ -->

**Table of content:**

 - [1. Introduction](#item-one)
 - [2. Data Exploration & Analysis](#item-two)
 - [2.1 Our Approach](#item-21)
 - [2.2 Ethereum Ecosystem](#item-22)
 - [2.2.1 Ethereum Mainnet](#item-221)
 - [2.2.2 Polygon](#item-222)
 - [2.3 Avalanche Ecosystem](#item-23)
 - [3. Building the ERC-3643 Adoption Tracker](#item-three)

<a id="item-one"></a>
# 1. Introduction

Tracking on-chain activities associated with the ERC-3643 standard can be a challenging task. The adoption of ERC standards, especially those related to regulated securities like ERC-3643, might be less widespread and more specialized, making them a bit harder to find. Tracking the adoption requires a deep understanding of the underlying specifications and its requirements, the ability to process, unify and analyze large amounts of data across different EVM chains.

This dashboard aims at providing visibility and transparency into the adoption of ERC-3643. 

ERC-3643 is a standard a standard for EVM-based smart contracts, specifically designed for compliant, regulated and permissioned tokenized assets. It provides a standardized interface for tokenized assets, enabling more efficient and secure transactions.

To know more about the ERC-3643 standard, read our deep dive: [link to deep dive](https://docs.google.com/document/d/1zgz97fYZo0Rhm5k83AZXcSZ_WRpDbYeKutpX69PX3wM/edit?usp=sharing).

The output of the work described below is the [ERC-3643 Adoption tracker](https://dune.com/qualitax/erc-3643-adoption-tracker/5da8cd48-afac-4388-8585-31c439de5057).

## Why Does Tracking ER-C3643 On-Chain activities Matter?

Tracking ERC-3643 on-chain activities is essential for maintaining transparency, ensuring regulatory compliance, providing market insights, enhancing security, managing assets effectively, facilitating interoperability, and simplifying auditing and reporting processes.

The purpose of this dashboard is to focus on tracking the adoption of ERC-3643 for the key reasons below:

**Growth of Tokenized Asset Market:** The adoption of ERC-3643 can be a strong indicator of the growth and maturation of the market for tokenized assets. As more assets are tokenized using this standard, it reflects an increasing acceptance and utilization of blockchain technology for asset representation, potentially transforming traditional asset markets.

**Standardization and Interoperability:** The adoption level of ERC-3643 is a measure of how standardized the process of tokenization is becoming. A widely adopted standard promotes interoperability among different platforms and applications, facilitating a more seamless and integrated blockchain ecosystem.

**Innovation and Development Insight:** Monitoring the adoption of ERC-3643 can provide insights into the areas of innovation and development within the blockchain and fintech sectors. It helps in understanding which types of assets are being tokenized and the emerging use cases, guiding future developments and investments in the space.

**Regulatory Landscape Understanding:** The extent to which ERC-3643 is adopted may influence or be influenced by the regulatory landscape. Understanding its adoption can provide insights into how regulations are shaping the market and vice versa. It can also signal the need for new or adapted regulatory frameworks to accommodate the growing market of tokenized assets.

**Investor Interest and Market Dynamics:** Tracking adoption can shed light on investor interest and confidence in tokenized assets. A rising adoption rate might indicate a bullish market sentiment, while stagnation or decline could signal issues or lack of confidence in the market.

<a id="item-two"></a>
# 2. Data Exploration & Analysis

<a id="item-21"></a>
## 2.1 Our Approach

_Step 1: Understand the IERC3643 interface and its events._

The IERC3643 interface is a critical component of the ERC-3643 standard, providing a structured and standardized approach for creating, managing and transferring security tokens. A primary focus of the IERC3643 interface is to ensure compliance with legal and regulatory requirements. If a token implements the IERC3643 interface, then the token is compliant with the ERC3643 standard.

The IERC3643 interface includes the definition of various events such as ComplianceAdded, TokensFrozen, TokensUnfrozen, Paused, Unpaused, RecoverySuccess, and others. These events are used to log significant actions on the blockchain, providing an immutable record that enhances transparency and auditability..

Event signatures are unique to a contract's code and can be a reliable way to identify contracts that implement a certain standard, especially if that standard defines unique events.

List of events:

| Event Name              | Event Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Event Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UpdatedTokenInformation | Emitted when the core information of a token within the smart contract is updated. This event is triggered in the smart contract when an authorized party updates the token's key information. This event logs the new details of the token, such as its name, symbol, decimals, version, and associated on-chain ID.The UpdatedTokenInformation event acts as a record on the blockchain, ensuring that changes to the token's identity are transparent and verifiable. | This event logs the new details of the token, such as its name, symbol, decimals, version, and associated on-chain ID.The UpdatedTokenInformation event acts as a record on the blockchain, ensuring that changes to the token's identity are transparent and verifiable.                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| IdentityRegistryAdded   | Emitted whenever a new identity registry is added to the smart contract.This event is crucial in contexts where identity management and verification are integral to the contract's operations, such as in regulated token environments or identity-based access control systems. The event logs the addition of a new identity registry address, signifying a significant update to the contract's identity management infrastructure.                                  | This event is triggered in the smart contract when an identity registry is added.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ComplianceAdded         | Emitted when a new compliance contract is added.                                                                                                                                                                                                                                                                                                                                                                                                                         | This event is triggered when the smart contract to refer to the Compliance smart contract.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| RecoverySuccess         | Emitted when a successful recovery action for a lost or compromised wallet is completed in the smart contract. This event is crucial to provide mechanism for investors to regain control of their assets in the event of lost access, such as forgotten private keys or wallet security breaches.                                                                                                                                                                       | Event serves to log the successful completion of such recovery processes, providing transparency and a record of the action on the blockchain. This is important for trust and security in the platform, as it allows all participants to verify that asset recovery actions are conducted legitimately and successfully.                                                                                                                                                                                                                                                                                                                                                                                                   |
| AddressFrozen           | Emitted when the status of an investor's address is changed in terms of its operational capabilities, specifically regarding whether the address is frozen or unfrozen. This event is critical in contracts where user accounts may need to be restricted or released, often for regulatory or security reasons.                                                                                                                                                         | This event is triggered in scenarios where an account needs to be frozen or unfrozen, possibly due to suspicious activities, compliance requirements, or administrative controls. This event serves as an immutable log entry on the blockchain, ensuring that all changes to account statuses are transparent and auditable. It allows users and auditors to monitor and verify the actions taken by administrators thus maintaining the integrity and trustworthiness of the system.                                                                                                                                                                                                                                      |
| TokensFrozen            | Emitted when a certain amount of tokens belonging to a user's address is frozen within the smart contract. This event is typically used in contracts where the movement of tokens can be restricted under specific conditions, such as for regulatory compliance, dispute resolution, or security purposes.                                                                                                                                                              | By logging the freezing of tokens, the event helps in auditing and regulatory oversight, ensuring that all significant actions regarding token circulation and control are properly recorded and publicly verifiable. Tokens might be frozen as a precautionary measure against suspected fraudulent activities, or due to a legal hold in the case of ongoing litigation, or as part of compliance with financial regulations.                                                                                                                                                                                                                                                                                             |
| TokensUnfrozen          | Event is emitted when a previously frozen amount of tokens belonging to a user's address is unfrozen or released within the smart contract. This event typically occurs in contracts where there are mechanisms for restricting and later releasing token movements, for compliance, dispute resolution, or security reasons.                                                                                                                                            | This event is triggered within the smart contract when specific conditions or actions lead to the unfreezing of a user's tokens. For instance, tokens might be unfrozen after the resolution of a legal dispute, the lifting of a regulatory hold, or once an investigation into suspicious activities concludes with no adverse findings. The TokensUnfrozen event ensures transparency and traceability, creating a record on the blockchain that tokens have been released from restrictions. By logging the unfreezing of tokens, the event facilitates auditing and regulatory oversight, ensuring that all significant actions regarding token circulation and control are properly recorded and publicly accessible. |
| Paused                  | Emitted when the operations of the smart contract are temporarily halted for a specific user address. This event is typically used in contracts that incorporate pause functionality, allowing for the temporary suspension of certain activities or transactions. This functionality can be crucial for emergency situations, maintenance, or compliance purposes.                                                                                                      | This event is triggered when the smart contract's functionality is temporarily suspended in relation to a specific user address. This could be due to a variety of reasons such as suspicious activity detection, compliance requirements, or administrative controls. By logging the pause action, the event helps maintain trust among users and provides a clear audit trail for future review and accountability. It's especially relevant in contracts where operational integrity and user security are paramount.                                                                                                                                                                                                    |
| Unpaused                | Emitted when previously paused operations of the smart contract are resumed for a specific user address                                                                                                                                                                                                                                                                                                                                                                  | This event is triggered when the smart contract's functionality is unpaused or reactivated in relation to a specific user address. The reasons for unpausing can vary, such as the resolution of a security concern, completion of maintenance, or fulfillment of compliance criteria. Logging the unpausing action is important for trust and accountability in the contract's operations.                                                                                                                                                                                                                                                                                                                                 |
| Transfer              | -                                                                                                                                                                                                                                                                                                                                                                  | -                                                                                                                                                                                                                                                                                                                                |

Can be found in repo: https://github.com/TokenySolutions/EIP3643/blob/main/eip-3643.md

_Step 2: Identify ERC3643-compliant tokens based on specific events and their signatures._

In EVM-based smart contracts, events can emit logs which are recorded on the blockchain. These logs often include "topics" used for indexing purposes. The first topic (topic0) usually represents the hash of the event signature, while subsequent topics (like topic1) store indexed event parameters. These indexed topics help in efficiently querying and filtering log data for specific events or conditions, making it easier to track and analyze on-chain activities.

False Positives: Just because a contract emits a certain event, it doesn't guarantee full compliance with ERC-3643. Further verification is necessary.

The ERC-3643 standard requires that all compliant tokens emit an UpdatedTokenInformation event at initial deployment, capturing critical metadata about the token at inception. If any of this information is later modified, the ERC-3643 token contract should emit an additional UpdatedTokenInformation event with the updated details. However, follow-on update events should not be counted as new, unique ERC-3643 tokens, as they represent changes to an existing contract.

In addition, to promote adoption and ensure conformance, the ERC-3643 Association will soon deploy an on-chain factory contract. This factory contract, available open-source at [here](https://github.com/TokenySolutions/T-REX/blob/main/contracts/factory/TREXFactory.sol), will deploy tokens using the Tokeny T-REX standardized suite of contracts and emit a TREXSuiteDeployed event for each new token creation. Stakeholders can easily spin up compliant ERC-3643 tokens by interacting with this factory contract, while our analytics will monitor for the resulting deployment events to track growth.

| Event Name                                                                                      | Event Signature Hash (Topic0)                                      |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| ComplianceAdded                                                                                 | 0x7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b6 |
| IdentityRegistryAdded                                                                           | 0xd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c |
| UpdatedTokenInformation                                                                         | -                                                                  |
| UpdatedTokenInformation(bytes32,bytes32)                                                        | 0xc465e742f7ad62135e227f5f2eef5d2c1329a0def3989ef6601f8201bcdaf873 |
| UpdatedTokenInformation(string,string)                                                          | 0xd131ab1e6f279deea74e13a18477e13e2107deb6dc8ae955648948be5841fb46 |
| UpdatedTokenInformation(string,string,string)                                                   | 0xe7be9e386976ab29f9c6b6277a4bb92fe29d2ce986625e4bd063d90b5b4e9869 |
| UpdatedTokenInformation(string,string,uint8,string,address)                                     | 0x6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d1 |
| RecoverySuccess(address \_lostWallet, address \_newWallet, address \_investorOnchainID);        | -                                                                  |
| AddressFrozen(address indexed \_userAddress, bool indexed \_isFrozen, address indexed \_owner); | -                                                                  |
| TokensFrozen(address indexed \_userAddress, uint256 \_amount);                                  | -                                                                  |
| TokensUnfrozen(address indexed \_userAddress, uint256 \_amount);                                | -                                                                  |
| Paused(address \_userAddress);                                                                  | -                                                                  |
| Unpaused(address \_userAddress);                                                                | -                                                                  |

_Step 3: Establish what to track_

| Metric                                      | Description                                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| N# of permissionned token contracts deployed from the Tokeny T-Rex Factory.             | Total Count of token contracts on the Ethereum Mainnet, Polygon Mainnet and Avalanche.                                       |
| N# of permissionned token contracts deployed from the Tokeny T-Rex Factory by network.            | Count and percentage of total token contracts on the Ethereum Mainnet, Polygon Mainnet and Avalanche.                              |
| N# of permissionned token contracts deployed from the Tokeny T-Rex Factory per month by network.      | Monthly trend of token contracts deployed on the Ethereum Mainnet, Polygon Mainnet and Avalanche.                         |
| N# of permissionned token contracts deployed from the Tokeny T-Rex Factory per month by industry.          | Monthly trends of token contracts deployed on the Ethereum Mainnet, Polygon Mainnet and Avalanche by industry.                                  |
| List of permissionned token contracts deployed from Tokeny TREX Factory by network.          | List of permissionned  tokens deployed on the Ethereum Mainnet, Polygon Mainnet and Avalanche.                                      |
| N# of permissionned token contracts deployed from the Tokeny T-Rex Factory.             | Count of token contracts on the Ethereum Mainnet, Polygon Mainnet and Avalanche that are verified to implement the ERC3643 standard.                                       |
| Volume of transactions                      | The total number and value of transactions interacting with ERC3643-compliant contracts.                                                    |
| Active Users or Wallets                     | Number of unique wallets that have interacted with ERC3643 contracts over a given period.                                                   |
| Growth Rate of ERC3643 Contract Deployments | Rate at which new ERC3643-compliant contracts are being deployed over time.                                                                 |
| Contract Function Usage Frequency           | Frequency of specific function calls within ERC3643 contracts, such as transfer functions, compliance checks, or identity registry updates. |
| Number of recovered tokens                  | -                                                                                                                                           |

<a id="item-22"></a>
## 2.2 Ethereum Ecosystem

**Tokeny T-REX Factory ENS Name:** erc3643.eth </br>
**Tokeny T-REX Factory Contract address:** 0xfe1bd11cd131c02f31a8b213651a8358fa1ab7a8</br>
**Tokeny T-REX Serving Contract address:** 0x0C21F650d8e1B0Fbd276a2403B74C7F211212C04</br></br>

<a id="item-221"></a>
### 2.2.1 Ethereum Mainnet

</br>

**Data Source:**</br>
Source: Dune Analytics </br>
Table: ethereum.logs</br>

**Alternative Data Source:**</br>
Source: Ethereum Blockchain - BigQuery Public Dataset </br>
Dataset ID: bigquery-public-data.goog_blockchain_ethereum_mainnet_us </br></br>

<a id="item-222"></a>
### 2.2.2 Polygon


**Data Source:**</br>
Source: Dune Analytics </br>
Table: polygon.logs

**Alternative Data Source:**</br>
Source: Polygon Cryptocurrency - BigQuery Public Dataset </br>
Dataset ID: public-data-finance.crypto_polygon

<a id="item-23"></a>
## 2.3 Avalanche Ecosystem

**Data Source:**</br>
Source: Dune Analytics </br>
Table: avalanche_c.logs

<a id="item-three"></a>
# 3. Building the ERC-3643 Adoption Tracker

## 3.1 Dataset

The ERC-3643 adoption dashboard utilizes an internally-developed enriched dataset to allow for more performant and cost-effective analytics. Rather than relying solely on expensive third-party datasets, we have supplemented the base data with additional qualitative attributes such as industry categorization. By enhancing the data in-house to align closely with the ERC-3643 Association analytic needs, we have optimized the dashboard to reduce reliance on external data sources, improve query speeds and responsiveness, and contain costs.

The dataset is available publicly: dune.qualitax.dataset_qx_erc3643_trexfactory_data_050224

## 3.2 Data Enrichment Process


## 3.3 Dune Analytics Dashboard PoC

To enable rapid prototyping and iteration, we initially built a proof-of-concept (PoC) version of the ERC-3643 adoption dashboard using Dune Analytics. Leveraging Dune's no-code environment allowed us to deploy an operational dashboard with at zero additional cost. The ease-of-use and flexibility provided by Dune facilitated quick validation of the dashboard concept, dimensions, and initial analytic use cases. Once proven through the PoC, we deployed the custom dashboard on our own infrastructure.

Dune Analytics Dashboard: [ERC-3643 Adoption tracker](https://dune.com/qualitax/erc-3643-adoption-tracker/5da8cd48-afac-4388-8585-31c439de5057).

## 3.4 Production Dasboard


# Acknowledgements
