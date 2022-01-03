---
title: Why Hyperverse
description: Onboarding the next 10 million blockchain developers by bringing composability to Web3.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Why Hyperverse

Onboarding the next 10 million blockchain developers by bringing composability to Web3.

---

## Composing the Hyperverse

The Hyperverse is an open, blockchain-agnostic, decentralized, marketplace for
composable smart contracts. It is a solution specifically architected for
decentralized composability at scale, and focuses on four capabilities:
Development Security Discoverability Monetization Development In order for the
Hyperverse to be useful, it needs to have smart contracts that can be composed
by developers building decentralized applications. But in a circular way, it’s
also developers who will create these composable smart contracts. We refer to
them as “Hyperverse Developers” and the entities they create “Smart Modules.”

**Smart Modules implement blockchain application primitives.**

A Smart Module is a package that contains at minimum a smart contract, metadata,
unit tests and documentation. It can optionally include a user interface test
harness and sample code. The smart contract will typically implement a
blockchain application primitive — one feature that provides discrete
functionality. For example, a Subscription Smart Module makes it simple for an
application to check if the calling account is an active subscriber for a
certain feature.

**Smart Modules are multi-tenant. An important characteristic of Smart Modules is
their multi-tenancy.**

This models SaaS applications in Web2 that are typically single applications
serving many different users. Smart Modules do this by separating the smart
contract logic (which resides on-chain in the Hyperverse-deployed smart
contract) from the associated data (which also resides on-chain, but in the
account of the calling smart contract). This is a unique feature of Hyperverse
Smart Modules and is designed to address a multitude of scenarios where it is
necessary for calling applications to use composable smart contract rules, but
store data in their own account space.

## Security

In order for developers to trust a Smart Module and use it in their
applications, they’ll need to trust the developer who built it, and have a high
degree of confidence in the Smart Module’s code.

**Web3 audits are broken.**

In Web2, centralized organizations like Apple and Google, use a combination of
automated and manual analysis and audits to ensure that developer-submitted code
is high-quality, trustworthy and defect-free. In Web3, the closest equivalent to
this is code audits performed by security experts on smart contracts. This audit
model is fundamentally broken. Audits are very expensive ranging from $100-500K,
but the auditors have no accountability if they miss a defect or vulnerability
in the audit. Hyperverse fixes this with an innovative review and audit model.

**Hyperverse audits are an insurance layer for smart contracts.**

When a Smart Module is first submitted to the Hyperverse, multiple Registrars
review the module package for completeness and to ensure that the module does
not contain any malware. Next, multiple auditors audit the Smart Module’s code
prior to deployment on-chain. If they trust the code, they can signal this by
staking tokens. The staked tokens make the auditor eligible for a pro-rata
portion of future revenue from the Smart Module. The aggregate staked tokens on
a Smart Module by auditors also act as an insurance layer. If a defect or
vulnerability in the Smart Module code causes loss of data or money, the staked
tokens are slashed based on predefined rules, thus holding the auditor wholly or
partially accountable.

## Discoverability

The biggest challenge for developers building applications with composable smart
contracts is knowing what contracts are available, their on-chain address, how
to interact with the contract, who created the contracts and whether they can be
trusted.

**Hyperverse solves the discoverability problem with metadata.**

Each Smart Module has on-chain and off-chain metadata, and its usage is tracked
via a Hyperverse Registry contract. The metadata, coupled with the usage data
adds discoverability and analytics capabilities for Smart Modules.

Hyperverse will provide a default, web-based search and discovery experience.

But since the Smart Modules are decentralized, anyone in the community can
create a custom search experience. In addition to finding Smart Modules, the
metadata can also be used by recommendation engines and over time will provide
reputation data for developers, registrars and auditors functioning as an
on-chain resume.

## Monetization

**Even the most successful open source projects struggle with long-term developer
retention.**

They ultimately realize that experienced developers are in high demand and don’t
have the bandwidth to devote significant time for volunteering on projects. The
centralized solution for this is to add a commercial variant of the project, or
use sponsorships to pay the most dedicated and hard-working contributors. But
these approaches fall apart in a decentralized environment.

**Hyperverse provides a decentralized path to monetization for contributors.**

Smart Modules can optionally enable transaction-level fees — flat or percentage
based on the monetary value of a transaction. These fees are captured on-chain,
from where they flow into the DAO Treasury and distributed to developers,
auditors, registrars and the DAO based on predefined rules.

As long as Hyperverse Developers continue to innovate and build useful Smart
Modules, other developers can compose applications with them with zero up-front
cost and an on-chain pay-per-use model. This can scale up to thousands of Smart
Modules being used in hundreds of thousands of decentralized applications
unlocking the Web3 promise of composability.

**Non-fungible tokens unlock a futures market for software.**

On the Hyperverse, each Smart Module is viewed as an asset represented by an
NFT. All of the Smart Module contributors are issued NFTs representing their
share of fractional ownership of future revenues of that Smart Module. This is a
huge unlock for open source software.If you contribute to, or stake on, a fee-based Hyperverse Smart Module in any
capacity, you can sell or collateralize your future income represented by an
NFT.
