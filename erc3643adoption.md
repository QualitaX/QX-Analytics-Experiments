---
title: "Tracking the Adoption of ERC3643"
date: "2024-01-29"
---

<!--  **Sponsored by xxx**🟢✨ -->

Tracking on-chain activities associated with the ERC3643 standard can be a challenging task. The adoption of ERC standards, especially those related to regulated securities like ERC3643, might be less widespread and more specialized, making them a bit harder to find. Tracking the adoption requires a deep understanding of the underlying specifications and its requirements, the ability to process, unify and analyze large amounts of data across different EVM chains.

This dashboard aims at providing visibility and transparency into the adoption of ERC3643. ERC3643 is a standard a standard for EVM-based smart contracts, specifically designed for compliant, regulated and permissioned tokenized assets. It provides a standardized interface for tokenized assets, enabling more efficient and secure transactions.

Do you want to know more about the ERC3643, read our deep dive: [link to deep dive]().

# Why Does Tracking ERC3643 On-Chain activities Matter?

Tracking ERC3643 on-chain activities is essential for maintaining transparency, ensuring regulatory compliance, providing market insights, enhancing security, managing assets effectively, facilitating interoperability, and simplifying auditing and reporting processes.

The purpose of this dashboard is to focus on tracking the adoption of ERC3643 for the key reasons below:

**Growth of Tokenized Asset Market:** The adoption of ERC-3643 can be a strong indicator of the growth and maturation of the market for tokenized assets. As more assets are tokenized using this standard, it reflects an increasing acceptance and utilization of blockchain technology for asset representation, potentially transforming traditional asset markets.

**Standardization and Interoperability:** The adoption level of ERC-3643 is a measure of how standardized the process of tokenization is becoming. A widely adopted standard promotes interoperability among different platforms and applications, facilitating a more seamless and integrated blockchain ecosystem.

**Innovation and Development Insight:** Monitoring the adoption of ERC-3643 can provide insights into the areas of innovation and development within the blockchain and fintech sectors. It helps in understanding which types of assets are being tokenized and the emerging use cases, guiding future developments and investments in the space.

**Regulatory Landscape Understanding:** The extent to which ERC-3643 is adopted may influence or be influenced by the regulatory landscape. Understanding its adoption can provide insights into how regulations are shaping the market and vice versa. It can also signal the need for new or adapted regulatory frameworks to accommodate the growing market of tokenized assets.

**Investor Interest and Market Dynamics:** Tracking adoption can shed light on investor interest and confidence in tokenized assets. A rising adoption rate might indicate a bullish market sentiment, while stagnation or decline could signal issues or lack of confidence in the market.

# Building the ERC3643 Adoption Tracker

## Our Approach

_Step 1: Understand the IERC3643 interface and its events._

The IERC3643 interface is a critical component of the ERC3643 standard, providing a structured and standardized approach for creating, managing and transferring security tokens. A primary focus of the IERC3643 interface is to ensure compliance with legal and regulatory requirements. If a token implements the IERC3643 interface, then the token is compliant with the ERC3643 standard.

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

Can be found in repo: https://github.com/TokenySolutions/EIP3643/blob/main/eip-3643.md

_Step 2: Identify ERC3643-compliant tokens based on specific events and their signatures._

In EVM-based smart contracts, events can emit logs which are recorded on the blockchain. These logs often include "topics" used for indexing purposes. The first topic (topic0) usually represents the hash of the event signature, while subsequent topics (like topic1) store indexed event parameters. These indexed topics help in efficiently querying and filtering log data for specific events or conditions, making it easier to track and analyze on-chain activities.

False Positives: Just because a contract emits a certain event, it doesn't guarantee full compliance with ERC3643. Further verification is necessary.

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
| Number of Deployed Contracts                | Count of smart contracts on the Ethereum Mainnet that are verified to implement the ERC3643 standard.                                       |
| Volume of transactions                      | The total number and value of transactions interacting with ERC3643-compliant contracts.                                                    |
| Active Users or Wallets                     | Number of unique wallets that have interacted with ERC3643 contracts over a given period.                                                   |
| Growth Rate of ERC3643 Contract Deployments | Rate at which new ERC3643-compliant contracts are being deployed over time.                                                                 |
| Contract Function Usage Frequency           | Frequency of specific function calls within ERC3643 contracts, such as transfer functions, compliance checks, or identity registry updates. |
| Number of recovered tokens                  | -                                                                                                                                           |

## Data Exploration & Analysis

### Ethereum Ecosystem

#### Ethereum Mainnet

**Data source:** Ethereum Blockchain - BigQuery Public Dataset </br>
**Dataset ID:** bigquery-public-data.goog_blockchain_ethereum_mainnet_us

_Step 1: Find all contracts created from the Tokeny T-Rex Factory_

ENS Name: erc3643.eth </br>
Contract address: 0xfe1bd11cd131c02f31a8b213651a8358fa1ab7a8

Function to create contract: 0x60806040 </br>
input: 0x6080604052600061001 </br>


N# of contracts created by the Tokeny T-REX Factory on the Ethereum Mainnet.</br>


<img src="https://i.imgur.com/5r0eh6L.png" alt="N# of Contracts Created by the Tokeny T-REX Factory" width="475"/>


``` 

SELECT transaction_hash
FROM `bigquery-public-data.goog_blockchain_ethereum_mainnet_us.transactions` 
WHERE from_address='0xfe1bd11cd131c02f31a8b213651a8358fa1ab7a8' AND
input="0x608060405260006100176001600160e01b0361006616565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b6106fb806100796000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c7b225511161005b578063c7b22551146100f4578063d514447214610111578063df09d60414610137578063f2fde38b1461018f57610088565b8063082978461461008d578063715018a6146100ac5780638da5cb5b146100b45780638f32d59b146100d8575b600080fd5b6100aa600480360360208110156100a357600080fd5b50356101b5565b005b6100aa6102f3565b6100bc610384565b604080516001600160a01b039092168252519081900360200190f35b6100e0610393565b604080519115158252519081900360200190f35b6100aa6004803603602081101561010a57600080fd5b50356103b7565b6100aa6004803603602081101561012757600080fd5b50356001600160a01b03166104e0565b61013f610533565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561017b578181015183820152602001610163565b505050509050019250505060405180910390f35b6100aa600480360360208110156101a557600080fd5b50356001600160a01b031661058b565b6101bd610393565b6101fc576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b60015460005b818110156102ee57826001828154811061021857fe5b906000526020600020015414156102e6576001818154811061023657fe5b906000526020600020016000905560018083038154811061025357fe5b90600052602060002001546001828154811061026b57fe5b906000526020600020018190555060018083038154811061028857fe5b6000918252602082200155600180548061029e57fe5b60019003818190600052602060002001600090559055827f0b1381093c776453c1bbe54fd68be1b235c65db61d099cb50d194b2991e0eec560405160405180910390a26102ee565b600101610202565b505050565b6102fb610393565b61033a576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600080546001600160a01b03166103a86105db565b6001600160a01b031614905090565b6103bf610393565b6103fe576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b60015460005b8181101561048057826001828154811061041a57fe5b90600052602060002001541415610478576040805162461bcd60e51b815260206004820152601960248201527f636c61696d546f70696320616c72656164792065786973747300000000000000604482015290519081900360640190fd5b600101610404565b5060018054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60183905560405183917f01c928b7f7ade2949e92366aa9454dbef3a416b731cf6ec786ba9595bbd814d691a25050565b6104e8610393565b610527576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b6105308161058b565b50565b6060600180548060200260200160405190810160405280929190818152602001828054801561058157602002820191906000526020600020905b81548152602001906001019080831161056d575b5050505050905090565b610593610393565b6105d2576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b610530816105df565b3390565b6001600160a01b0381166106245760405162461bcd60e51b81526004018080602001828103825260268152602001806106806026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122009defd746cfbdb23363feebfe343d23ef4124aaae6779c5ea93b416200eab9ff64736f6c63430006020033"

```

_As of 31 Jan 2024 - 39 contracts created by the Tokeny T-REX Factory in total._ </br>

However not all ERC3643-compliant contracts are necessarily deployed by the Tokeny T-REX Factory. </br>


``` 

SELECT transaction_hash
FROM `bigquery-public-data.goog_blockchain_ethereum_mainnet_us.transactions` 
WHERE from_address !='0xfe1bd11cd131c02f31a8b213651a8358fa1ab7a8' AND
input="0x608060405260006100176001600160e01b0361006616565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006a565b3390565b6106fb806100796000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063c7b225511161005b578063c7b22551146100f4578063d514447214610111578063df09d60414610137578063f2fde38b1461018f57610088565b8063082978461461008d578063715018a6146100ac5780638da5cb5b146100b45780638f32d59b146100d8575b600080fd5b6100aa600480360360208110156100a357600080fd5b50356101b5565b005b6100aa6102f3565b6100bc610384565b604080516001600160a01b039092168252519081900360200190f35b6100e0610393565b604080519115158252519081900360200190f35b6100aa6004803603602081101561010a57600080fd5b50356103b7565b6100aa6004803603602081101561012757600080fd5b50356001600160a01b03166104e0565b61013f610533565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561017b578181015183820152602001610163565b505050509050019250505060405180910390f35b6100aa600480360360208110156101a557600080fd5b50356001600160a01b031661058b565b6101bd610393565b6101fc576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b60015460005b818110156102ee57826001828154811061021857fe5b906000526020600020015414156102e6576001818154811061023657fe5b906000526020600020016000905560018083038154811061025357fe5b90600052602060002001546001828154811061026b57fe5b906000526020600020018190555060018083038154811061028857fe5b6000918252602082200155600180548061029e57fe5b60019003818190600052602060002001600090559055827f0b1381093c776453c1bbe54fd68be1b235c65db61d099cb50d194b2991e0eec560405160405180910390a26102ee565b600101610202565b505050565b6102fb610393565b61033a576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b600080546001600160a01b03166103a86105db565b6001600160a01b031614905090565b6103bf610393565b6103fe576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b60015460005b8181101561048057826001828154811061041a57fe5b90600052602060002001541415610478576040805162461bcd60e51b815260206004820152601960248201527f636c61696d546f70696320616c72656164792065786973747300000000000000604482015290519081900360640190fd5b600101610404565b5060018054808201825560009182527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60183905560405183917f01c928b7f7ade2949e92366aa9454dbef3a416b731cf6ec786ba9595bbd814d691a25050565b6104e8610393565b610527576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b6105308161058b565b50565b6060600180548060200260200160405190810160405280929190818152602001828054801561058157602002820191906000526020600020905b81548152602001906001019080831161056d575b5050505050905090565b610593610393565b6105d2576040805162461bcd60e51b815260206004820181905260248201526000805160206106a6833981519152604482015290519081900360640190fd5b610530816105df565b3390565b6001600160a01b0381166106245760405162461bcd60e51b81526004018080602001828103825260268152602001806106806026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b039290921691909117905556fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a264697066735822122009defd746cfbdb23363feebfe343d23ef4124aaae6779c5ea93b416200eab9ff64736f6c63430006020033"

```

What is the Tokeny: T-REX Servicing - see: 0x670ac37a1f420f3ea18b87aa06a5b7134b75578094d7fa93a3c4e6d10183e4b1 ?


``` 

SELECT date(block_timestamp) as date, transaction_hash, to_address, value, input
FROM `bigquery-public-data.goog_blockchain_ethereum_mainnet_us.transactions` 
WHERE from_address='0xfe1bd11cd131c02f31a8b213651a8358fa1ab7a8'
ORDER BY date desc;

```

Example: https://etherscan.io/address/0x6f31caae12ea25f8d5b69b93d4c57e1af7f62272






ENS deployer transaction: 0x6f4fb82e843bce9ce1c01ff4efbf55ffa6dbe3c58ff32d8ba100d849048feff6


_Step 2: abc_

```

SELECT date(block_timestamp) as date, address, data
FROM `bigquery-public-data.goog_blockchain_ethereum_mainnet_us.logs`,
UNNEST(topics) AS topic
WHERE topic = '0x7f3a888862559648ec01d97deb7b5012bff86dc91e654a1de397170db40e35b6' OR
topic = '0xd2be862d755bca7e0d39772b2cab3a5578da9c285f69199f4c063c2294a7f36c' OR
topic = '0xc465e742f7ad62135e227f5f2eef5d2c1329a0def3989ef6601f8201bcdaf873'OR
topic = '0xd131ab1e6f279deea74e13a18477e13e2107deb6dc8ae955648948be5841fb46' OR
topic = '0xe7be9e386976ab29f9c6b6277a4bb92fe29d2ce986625e4bd063d90b5b4e9869' OR
topic = '0x6a1105ac8148a3c319adbc369f9072573e8a11d3a3d195e067e7c40767ec54d1'
ORDER BY date desc;

```






### Avalanche Ecosystem

# Acknowledgements
