---
Title: "Exploring the Polymesh Network"
Status: Draft v1
Date: "2024-03-04"
Authors: Anaïs Ofranc
---

<!--  **Sponsored by xxx**🟢✨ -->

**Table of content:**

 - [1. Introduction](#item-one)
 - [2. Data Exploration & Analysis](#item-two)
 - [2.1 Our Approach](#item-21)

<a id="item-one"></a>
# 1. Introduction



## Why exploring the Polymesh network?



**Growth of Tokenized Asset Market:** The adoption and usage of the Polymesh network can be a strong indicator of the growth and maturation of the market for tokenized assets. As more assets are tokenized using this standard, it reflects an increasing acceptance and utilization of blockchain technology for asset representation, potentially transforming traditional asset markets.

**Innovation and Development Insight:** Monitoring the adoption and usage of the Polymesh network can provide insights into the areas of innovation and development within the blockchain and fintech sectors. It helps in understanding which types of assets are being tokenized and the emerging use cases, guiding future developments and investments in the space.

**Regulatory Landscape Understanding:** The extent to which the Polymesh network is adopted may influence or be influenced by the regulatory landscape. Understanding its adoption can provide insights into how regulations are shaping the market and vice versa. It can also signal the need for new or adapted regulatory frameworks to accommodate the growing market of tokenized assets.

**Investor Interest and Market Dynamics:** Tracking adoption can shed light on investor interest and confidence in tokenized assets. A rising adoption rate might indicate a bullish market sentiment, while stagnation or decline could signal issues or lack of confidence in the market.

<a id="item-two"></a>
# 2. Data Exploration

<a id="item-21"></a>
## 2.1 Our Approach

_Step 1: Understand Polymesh Data._

To get started install and run Polymesh subquery : https://github.com/PolymeshAssociation/polymesh-subquery . </br>
Use pgAdmin to get a quick overview and understanding of the data.

The query below returns the list of tables and their descriptions.

``` 

SELECT 
    cls.relname AS table_name,
    obj_description(cls.oid) AS table_description
FROM 
    pg_class cls
JOIN 
    pg_namespace ns ON ns.oid = cls.relnamespace
WHERE 
    ns.nspname = 'public' AND 
    cls.relkind = 'r';

```


| table_name     | table_description |
| -------- | ------- |
| debugs | -    |
| found_types  | -    |
| blocks   | A set of transactions that were executed together. Includes a reference to its parent, which reference its parent, this forms a chain to the genesis block   |
| permissions | Represents an Account's permissions. The primary key for an Identity always has full permission |
| _metadata| NULL
| identities | Represents a person or business on chain. All Polymesh assets belong to an Identity. A single Identity can have many accounts (i.e. 'keys') An Identity needs a valid CDD claim from at least one KYC/KYB provider to perform most actions on chain |
| accounts | Represents a public/private key pair. Most actions must be signed by an appropriately permissioned Account. Before an Account can sign most Extrinsics it must first be attached to an Identity |
| account_histories | Represents historical data of identities assigned to an account |
| bridge_events | Represents `POLY`, the Ethereum based ERC-20 token, being converted to POLYX, the native Polymesh token |
| staking_events | Represents a change in staking status |
| assets | Represents a tokenized Asset on the Polymesh chain. The central data structure for the ecosystem |
| ticker_external_agent_actions | Represents an administrative action on an Asset, e.g. tokens issued, compliance rules updated, document added, etc. |
| venues | Represents a place to trade assets. This allows for additional mediation and control over the exchange of Assets e.g. An asset may specify it can only be exchanged at a particular Venue, allowing the Venue owner to explicitly approve transactions |
| portfolios | Represents a grouping of Assets held by an Identity. Particular accounts maybe authorized only over certain portfolios Note: identities will always have a default Portfolio (id = 0) |
| stos | Securities Token Offering. Represents a fund raising effort from a company. e.g. sale of company equity in exchange for a stable coin |
| authorizations | Represents a request to grant an Account some permission to perform actions for an Identity. e.g. become a Portfolio custodian |
| investments | Represents participation in an STO |
| ticker_external_agents | Represents an Identity authorized to perform actions on behalf of a company |
| ticker_external_agent_histories | Represents a change in the status of an external agent.
|  | |AgentAdded | | and  | |AgentPermissionsChanged | | will have `permissions` field. `AgentRemoved` will have an empty `permissions` value |
| agent_groups | Represents a set of agents authorized to perform actions for a given Asset |
| agent_group_memberships | Represent membership in a group. Tracks which members belong to which groups |
| portfolio_movements | Represents a transfer of fungible assets between a single identities portfolios. Note: transfers between identities are known as `Settlements` |
| instructions | Represents a request to exchange Assets between parties. Before an Instruction is executed all involved parties must sign and submit an affirmation. Once an Instruction is affirmed it will then be attempted to be executed. If any party fails to satisfy any compliance or transfer restriction the Instruction will fail, and no movement of assets will occur. |
| settlements | Represents a trade of assets between parties |
| legs | Represents the movement of a single Asset in a trade, e.g. Alice will give Bob 1 USDS |
| distributions | Represents a distribution to the owners of an Asset. e.g. dividend payment |
| distribution_payments | Represents an owner of an asset collecting a distribution e.g. accepting a dividend |
| proposals | Represents a potential change to how the chain will operate. It will need gain sufficient  'Aye' votes before having effect |
| proposal_votes | Represents a vote on a governance proposal |
| claim_scopes | The scope of a claim. e.g. `target` is Blocked from owning  | |TICKER-A | | or `target` is an Affiliate of  | |TICKER-B | | |
| custom_claim_types | Represents the registered CustomClaimType |
| claims | A claim made about an Identity. All active identities must have a valid CDD claim, but additional claims can be made. e.g. The Identity belongs to an accredited, US citizen |
 |trusted_claim_issuers | An claim issuer that is trusted for an Asset. Assets relying on on chain compliance should be explicit on which issuers they trust |
| asset_pending_ownership_transfers | Represents a request to take ownership of a particular Asset |
| transfer_managers | deprecated in favor of `TransferCompliance` |
| stat_types | Represents an on chain statistic about the Asset owners. e.g. How many investors hold the Asset. These are required to be enabled in order for the chain to enforce transfer restrictions e.g. A restriction requiring ownership to be at least 50% Canadian would require a StatType of type `Balance` scoped to Jurisdiction before being created |
| transfer_compliances | Represents restriction that will ensure the composition of ownership remains a certain way e.g. No more than 2000 individual investors to avoid additional reporting requirements |
| transfer_compliance_exemptions | Represents an exemption for an individual for TransferCompliance rules |
| nft_holders | Represents what NFTs of a collection an Identity owns |
| compliances | Represents a restriction all investor must comply with for a given Asset e.g. All investors must be German citizens |
| asset_holders | Represents how much of a given Asset an Identity owns |
| asset_documents | Represents off chain documentation for an Asset. A hash should be included on chain so readers can be sure their copy has not been tampered with e.g. A companies 10-K report |
| migrations | Represents the list of migrations executed |
| asset_transactions | Represents all the transactions related to an Asset |
| fundings | Represents an investment into an Asset |
| asset_mandatory_mediators | NULL |
| subquery_versions | Represents the deployed version of the node indexing the data |
| polyx_transactions | Represents transactions involving POLYX |
| child_identities | Represents the parent child mapping for an Identity |
| multi_sigs | Represents a MultiSig |
| multi_sig_signers | Represents a MultiSig signer |
| multi_sig_proposals | Represents a MultiSig proposal |
| multi_sig_proposal_votes | Represents a MultiSig proposal vote |
| meditator_affirmations | Represents a mediator's approval for an instruction |
| events | Information of a chain state transition on. For most use cases a more specific entity should be queried |
| extrinsics | Represents external data included into the chain. Virtually all user actions, as well as runtime operations are extrinsics. Usually extrinsics are signed. When the block author includes data, e.g. `timestamp.set` then the signature is implied. This is indicated with `signed = 0`| 



_Step 2: Select tables of interest._


| table_name     | table_description |
| -------- | ------- |
| assets  | Represents a tokenized Asset on the Polymesh chain. The central data structure for the ecosystem	 |
| asset_transactions  | 	Represents all the transactions related to an Asset |
| asset_holders |  	Represents how much of a given Asset an Identity owns |
| identities  | 	Represents a person or business on chain. |
| legs  |  	Represents the movement of a single Asset in a trade, e.g. Alice will give Bob 1 USDS |
| settlements |  	Represents a trade of assets between parties |
| fundings  | 	Represents an investment into an Asset |
| stat_types  | 	Represents an on chain statistic about the Asset owners. e.g. How many investors hold the Asset.  |
| investments | 	Represents participation in an STO |
| ticker_external_agent_actions |  	Represents an administrative action on an Asset, e.g. tokens issued, compliance rules updated, document added, etc.  |
| venues  | 	Represents a place to trade assets. This allows for additional mediation and control over the exchange of Assets e.g. An asset may specify it can only be exchanged at a particular Venue, allowing the Venue owner to explicitly approve transactions  |


Familiarize ourselves with the data schema for tables of interests.

``` 

SELECT 
    column_name, 
    data_type, 
    character_maximum_length, 
    column_default, 
    is_nullable 
FROM 
    information_schema.columns 
WHERE 
    table_schema = 'public' 
    AND table_name = 'assets';


```



<a id="item-22"></a>
## 2.2 Exploring assets on Polymesh


The metrics below not only offer a snapshot of the current state of assets (as of XX March 2024 ) but also enable stakeholders to analyze trends over time, assess the diversity of asset types, and understand investor engagement.


| Metric Category   | Metric | Metric Description |
| ---------------   | -------------- | -------------- |
| Asset | Nb Assets | Total number of assets on the network  |
| Asset | Assets by type | Total number of assets on the network by type |
| Asset | Assets per month per type  | Total number of assets created per month, grouped by asset type |
| Asset | Top 10 Assets by investor count | Top 10 assets by investor count |
| Asset | Assets created over the last 30 days by type | Total number of assets created over the last 30 days by type |
| Asset | List of Assets created over the last 30 days | List of assets created over the last 30 days |


### How many assets on Polymesh ?

Gives a high-level overview of the ecosystem's size and growth, indicating the adoption and utilization of the Polymesh platform for asset issuance.

``` 

SELECT 
COUNT(*) as nbAssets
FROM 
    assets
GROUP BY type;


```

Nb Assets


### How many assets on Polymesh by type ?

Important for understanding the composition of the asset ecosystem, showing which types of assets (e.g., bonds, equities, funds) are most prevalent. This reflects market preferences and regulatory compliance capabilities of Polymesh.


``` 

SELECT 
COUNT(*) as nbAssets, type
FROM 
    assets
GROUP BY type
ORDER BY nbAssets DESC
type,
COUNT(*) as nbAssets
FROM 
    assets
GROUP BY type;


```

Asset by type


### How many assets created per month, grouped by asset type ?

Provides insights into growth trends and market dynamics, helping to identify patterns or shifts in the types of assets being created, which could be indicative of broader market or regulatory changes.


```

SELECT 
    DATE_TRUNC('month', b.datetime) AS month,
    a.type,
    COUNT(*) AS total_assets_created
FROM 
    assets a
JOIN 
    blocks b ON a.created_block_id::integer = b.block_id
GROUP BY 
    month, 
    a.type
ORDER BY 
    month DESC, 
    a.type;

```


Assets per month per type 


### What are the top 10 assets on Polymesh by number of investors ?

Highlights the most popular or widely held assets, which can be a proxy for market sentiment, perceived value, or investor confidence in certain asset classes or issuances.


``` 

WITH AssetCreation AS (
    SELECT 
        DATE_TRUNC('month', b.datetime) AS createdMonth,
        a.id AS assetID
    FROM 
        assets a
    JOIN 
        blocks b ON a.created_block_id::integer = b.block_id
), TopAssets AS (
    SELECT 
        a.id AS assetID,
        a.name AS "Asset Name",
        a.type AS "Asset Type",
        COUNT(DISTINCT ah.identity_id) AS "InvestorCount",
        a.total_supply AS "Total Supply"
    FROM 
        assets a
    JOIN 
        asset_holders ah ON ah.asset_id = a.id
    GROUP BY 
        a.id
    ORDER BY 
        "InvestorCount" DESC
    LIMIT 10
)
SELECT 
    t."Asset Name",
    t.assetID,
    t."Asset Type",
    t."InvestorCount",
    t."Total Supply",
    ac.createdMonth
    t."Asset Type",
    t."InvestorCount",
    t."Total Supply",
    ac.createdMonth,
    t.assetID
FROM 
    TopAssets t
JOIN 
    AssetCreation ac ON t.assetID = ac.assetID
ORDER BY 
    t."InvestorCount" DESC;

```

### How many assets created over the last 30 days by type ?

Allows stakeholders to track recent activity and interest in different types of assets. This metric is particularly useful for identifying sudden spikes or drops in asset issuance, possibly in response to market or regulatory developments.


``` 

SELECT 
    a.type AS "Asset Type",
    COUNT(a.id) AS "Number of Assets Created",
    DATE_TRUNC('day', b.datetime) AS "Creation Date"
FROM 
    assets a
JOIN 
    blocks b ON a.created_block_id::integer = b.block_id
WHERE 
    b.datetime >= NOW() - INTERVAL '30 days'
GROUP BY 
    "Asset Type", "Creation Date"
ORDER BY 
    "Creation Date" DESC, "Asset Type";



```

### What is the list of assets created over the last 30 days on Polymesh ?


Provides specific details on recent issuances, offering users immediate insights into the newest assets on the network. This can be valuable for investors looking for new opportunities or analysts monitoring the innovation and evolution of the platform's offerings.

``` 

SELECT 
   ticker, name, type, funding_round
FROM 
    assets a
JOIN 
    blocks b ON a.created_block_id::integer = b.block_id
WHERE 
    b.datetime >= NOW() - INTERVAL '30 days';


```




<a id="item-22"></a>
## 2.2 Exploring Liquidity on Polymesh



The liquidity metrics aim to provide  well-rounded view of market activity and asset liquidity on the Polymesh network.

| Metric Category   | Metric | Metric Description |
| ---------------   | -------------- | -------------- |
| Liquidity | Volume of asset transactions over time  | Volume of asset transactions per year (excluding issuance) |
| Liquidity | Volume of asset transactions by asset type by month  | Volume of asset transactions by asset type by month |
| Liquidity | Average daily trading volume over the last 120 days |  Average amount (or total volume) of asset units traded across all assets within a given day over the last 120 days |
| Liquidity | Average daily trading volume by type over the last 120 days|  Average amount (or total volume) of asset units traded across all assets within a given day by asset type over the last 120 days |
| Liquidity | Days without trading activities |  Nb of days without trading activities (i.e without asset transactions) |
| Liquidity  | Turnover ratio | Volume of an asset traded over a period relative to the total supply of the asset.|

Trading and liquidity metrics

Most traded assets.

Liquidity measures (e.g., bid-ask spreads, depth of book).

Trading volumes over time.


| Metric Category   | Metric | Metric Description |
| ---------------   | -------------- | -------------- |
| Asset | Volume of asset transactions over time  | Volume of asset transactions per year (excluding issuance) |
| Asset | Volume of asset transactions by asset type by month  | Volume of asset transactions by asset type by month |




### What is the volume of asset transactions over time (excluding issuance)


Useful to assess the liquidity and activity level of assets on the network. A year-over-year analysis can reveal the platform's performance in terms of stakeholder engagement and transaction volume.

Useful to assess the liquidity and activity level of assets on the network. A year-over-year analysis can reveal the platform's performance in terms of user engagement and transaction volume.

```

SELECT 
    DATE_TRUNC('month', datetime) AS month,
    COUNT(*) AS total_transactions
FROM 
    asset_transactions
GROUP BY 
    month
ORDER BY 
    month;

```

Volume of asset transactions over time 


### What is the volume of asset transactions over time by asset type by month (excluding issuance)

Provide a more granular view of transaction volumes, enabling stakeholders to identify which asset types are most actively traded and when. This can help in spotting trends, seasonal patterns, or emerging asset classes.

``` 

SELECT 
    DATE_TRUNC('month', at.datetime) AS month,
    a.type AS asset_type,
    COUNT(at.id) AS transaction_volume
FROM 
    asset_transactions at
JOIN 
    assets a ON at.asset_id = a.id
GROUP BY 
    month, 
    asset_type
ORDER BY 
    month ASC, 
    asset_type;

```

Volume of asset transactions by asset type by month


### What is the Average daily trading volume over the last 120 days ?

This metric helps in understanding the daily liquidity.  It Provides insight into the current liquidity and activity level, offering a more immediate snapshot than annual metrics. It's particularly useful for identifying short-term trends.

``` 

SELECT 
    DATE_TRUNC('day', datetime) AS day,
    AVG(amount) AS average_daily_volume
FROM 
    asset_transactions
WHERE 
    datetime >= NOW() - INTERVAL '120 days'
GROUP BY 
    day
ORDER BY 
    day DESC;

```


### What is the Average daily trading volume by asset type over the last 120 days?

This metric helps in understanding the daily liquidity by asset type to provide deeper insights into specific markets.
Similar to the average daily trading volume, but offers a breakdown by asset type.

``` 
SELECT 
    DATE_TRUNC('day', at.datetime) AS day,
    a.type AS asset_type,
    AVG(at.amount) AS average_daily_volume
FROM 
    asset_transactions at
JOIN 
    assets a ON at.asset_id = a.id
WHERE 
    at.datetime >= NOW() - INTERVAL '120 days'
GROUP BY 
    day, asset_type
ORDER BY 
    day DESC, asset_type;


```


### How many days without trading activities (i.e asset transactions) on the Polymesh network ?

Identifies periods of low activity, which can be helpful for spotting potential issues in market participation or interest in certain assets. It's a good indicator of market health and investor engagement.

``` 

WITH date_series AS (
    SELECT generate_series(
        DATE_TRUNC('day', NOW() - INTERVAL '120 days'),
        DATE_TRUNC('day', NOW()),
        INTERVAL '1 day'
    )::DATE AS day
), 
trading_days AS (
    SELECT 
        DATE_TRUNC('day', datetime)::DATE AS trading_day
    FROM 
        asset_transactions
    GROUP BY 
        trading_day
),
days_without_trading AS (
    SELECT 
        ds.day
    FROM 
        date_series ds
    LEFT JOIN 
        trading_days td ON ds.day = td.trading_day
    WHERE 
        td.trading_day IS NULL
)
SELECT 
    DATE_TRUNC('month', day) AS month,
    COUNT(day) AS days_without_trading
FROM 
    days_without_trading
GROUP BY 
    month
ORDER BY 
    month;

```

### How often assets are being traded, relative to their total supply?

A high turnover ratio indicates a liquid market with active trading, while a low ratio suggests the opposite. This metric is helpful for assessing the efficiency and vibrancy of the market.

Weighted average : TO BE REVIEWED

``` 

SELECT 
    SUM(weighted_turnover) / SUM(a.total_supply) AS weighted_avg_turnover_ratio
FROM (
    SELECT 
        assets.id AS asset_id, 
        assets.total_supply,
        SUM(asset_transactions.amount) AS total_volume,
        (SUM(asset_transactions.amount) / assets.total_supply) * assets.total_supply AS weighted_turnover
    FROM 
        asset_transactions
    JOIN 
        assets ON asset_transactions.asset_id = assets.id
    GROUP BY 
        assets.id, assets.total_supply
) AS a;

```

Individual asset turnover ratio helps understand how actively a specific asset is traded relative to its availability, offering insights into the liquidity and investor interest in that particular asset.


## 2.2 Exploring identities and accounts on the network

Total number of identities

SELECT COUNT(*)
FROM identities


Number of identities created by month

SELECT COUNT(*) as "nb Identities", DATE_TRUNC('month', datetime) AS createdMonth
FROM identities
GROUP BY createdMonth
ORDER BY createdMonth DESC


Average number of accounts by identity

SELECT 
    AVG(account_count) AS "Average Accounts per Identity"
FROM (
    SELECT 
        identity_id,
        COUNT(id) AS account_count
    FROM 
        accounts
    GROUP BY 
        identity_id
) AS counts;

Identity with max number of accounts

SELECT 
    identity_id,
    COUNT(id) AS account_count
FROM 
    accounts
GROUP BY 
    identity_id
ORDER BY 
    account_count DESC
LIMIT 1;


Average number of assets by identity

SELECT 
    AVG(asset_count) AS "Average Assets per Identity"
FROM (
    SELECT 
        identity_id,
        COUNT(DISTINCT asset_id) AS asset_count
    FROM 
        asset_holders
    GROUP BY 
        identity_id
) AS counts;


Max number of assets 

``` 

SELECT 
    identity_id,
    COUNT(DISTINCT asset_id) AS asset_count
FROM 
    asset_holders
GROUP BY 
    identity_id
ORDER BY 
    asset_count DESC
LIMIT 1;

Average number of transactions by identity

```

Maximum number of legs by identity/  id  - across both the from_id and to_id appears the most in the legs table.

``` 

SELECT 
    id, 
    COUNT(*) AS occurrences
FROM (
    SELECT 
        from_id AS id
    FROM 
        legs
    WHERE 
        from_id IS NOT NULL

    UNION ALL

    SELECT 
        to_id AS id
    FROM 
        legs
    WHERE 
        to_id IS NOT NULL
) AS combined
GROUP BY 
    id
ORDER BY 
    occurrences DESC
LIMIT 1;

```


Can an identity have more than one portfolio ?
Not clear but it seems that so far, 1 identity = 1 portfolio


## 2.2 Exploring portfolios

Number of portfolio on the network

Number of assets_transactions  (from and to) by portfolio

SELECT 
    portfolio_id, 
    SUM(transaction_count) AS total_transactions
FROM (
    SELECT 
        from_portfolio_id AS portfolio_id, 
        COUNT(*) AS transaction_count
    FROM 
        asset_transactions
    WHERE 
        from_portfolio_id IS NOT NULL
    GROUP BY 
        from_portfolio_id

    UNION ALL

    SELECT 
        to_portfolio_id AS portfolio_id, 
        COUNT(*) AS transaction_count
    FROM 
        asset_transactions
    WHERE 
        to_portfolio_id IS NOT NULL
    GROUP BY 
        to_portfolio_id
) AS combined_counts
GROUP BY 
    portfolio_id
ORDER BY 
    total_transactions DESC;





Top 10 porfolio in terms of assets held in those portfolios ?

## 2.2 Exploring settlements

Total value of settlements over time - number of settlements by results by month.

SELECT 
    DATE_TRUNC('month', b.datetime) AS settlement_month,
    s.result,
    COUNT(*) AS number_of_settlements
FROM 
    settlements s
JOIN 
    blocks b ON s.created_block_id::integer = b.block_id
GROUP BY 
    settlement_month, s.result
ORDER BY 
    settlement_month DESC, s.result;


Number of successful vs. failed vs rejected settlements.

SELECT 
    s.result,
    COUNT(*) AS number_of_settlements
FROM 
    settlements s
JOIN 
    blocks b ON s.created_block_id::integer = b.block_id
GROUP BY 
   s.result
ORDER BY 
   s.result;

## Exploring legs

 pair that occurs most frequently in the legs dataset, with a total occurrence (leg_count) of 4.

 SELECT 
    from_id, 
    to_id, 
    COUNT(*) AS leg_count
FROM 
    legs
GROUP BY 
    from_id, 
    to_id
ORDER BY 
    leg_count DESC
LIMIT 1;




<a id="item-221"></a>
### 2.2.1 

</br>

## 3.4 Dashboard


# Acknowledgements
