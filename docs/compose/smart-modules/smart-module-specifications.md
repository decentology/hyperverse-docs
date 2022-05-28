---
title: Smart Module Specifications
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Smart Module Specifications

Requirements document for Smart Module development on the Hyperverse.

---

## Getting Started

Smart Module Packages are developed by Hyperverse Smart Contract developers.

**Smart Modules implement blockchain application primitives.**

A Smart Module is a package that contains at minimum a smart contract, metadata, unit tests and documentation. It can optionally include a user interface test harness and sample code. The smart contract will typically implement a blockchain application primitive — one feature that provides discrete functionality. For example, a Subscription Smart Module makes it simple for an application to check if the calling account is an active subscriber for a certain feature.

**Smart Modules are multi-tenant.**

An important characteristic of Smart Modules is their multi-tenancy. This models SaaS applications in Web2 that are typically single applications serving many different users. Smart Modules do this by separating the smart contract logic (which resides on-chain in the Hyperverse-deployed smart contract) from the associated data (which also resides on-chain, but in the account of the calling smart contract). This is a unique feature of Hyperverse Smart Modules and is designed to address a multitude of scenarios where it is necessary for calling applications to use composable smart contract rules, but store data in their own account space.

**Smart Modules Contain the following:**

- Smart Contract
- JS library
- UI harness
- Unit tests
- Documentation
- Reference application

## Smart Module Requirements

While all smart modules their own unique use cases, it is important that they all adhere to a general set of requirements. The goal is to maintain a level of quality and consistency that allows users to get the most out of the Hyperverse smart modules.

### General Requirements

- May only be developed for blockchains with active Hyperverse integrations.
- Project files, folders, and details follow all conventions defined in the blockchain-specific Starterkit.
- Must be submitted as branch PR to Hyperverse Monorepo and approved by core developers.
- Must be available as npm package.

### Smart Contract

Blockchain-specific deployment of smart contracts adhering to Hyperverse requirements.

- Makes use of the latest design patterns for smart contract safety
- Makes use of the latest design patterns for efficient gas usage
- Implements **CloneFactory.sol** as a mechanism for implementing factory pattern
- Implements **IHyperverseModule.sol** as a mechanism for standardizing metadata.
- Implements **ModuleNameFactory.sol** (example: **ERC20Factory.sol**) as a mechanism for module specific clone factory implementation

### JS Library

API exposing smart contract functionality using JavaScript.

- Exposes all available smart contract functions to JavaScript developers using clear naming conventions. (example: **balance** in smart contract callable by **getBalance** in library.)
- Exports library as container under name **useModuleName** (example: **useERC20**)
- Implements **Proxy** pattern using **factoryContract** and **tenantId**
- Implements **accountSigner**, fetchContract, createInstance, and getProxy as specified in starterkit
- Implements interface exposing each function available in the smart contract.
- Return statement includes tenantID, factoryContract, proxyContract, CheckInstance, NewInstance, useMutation, and Proxy statements.
- Return statement includes query for all library functions
- All queries within return statement contains all required function parameters and mutations

### UI harness

Front-end interface that enables access to features provides by the JS Library.

- Exposes all **JS library** functions from an accessible user interface.
- Implements **web3modal** to connect and interact with user wallets.
- Allows user to easily deploy Proxy from within the user interface.

### Unit tests

Extensive set of tests ensuring the security of the smart module.

- Uses blockchain specific standard testing library.
- Adheres to blockchain specific testing best practices.
- Implements tests for all functions exposed by the modules JS Library.
- All tests pass at time of smart module deployment.

### Documentation

Clear and concise documentation clarifying the module structure, usage, and details.

- Includes README with overview of project structure.
- Comments guiding users throughout all module code.
- Addresses details needed for both JavaScript developers and Smart Module developers.
- Defines first steps and common use cases for JavaScript developers

### Reference Application

Application separate from smart module that shows live use case

- Demonstrates use case for smart module targeting a significant number of module features.
- Holds up to user testing and has no known errors at time of deployment
- Contains README and documentation standards as defined above
- May be installed and viewed on** localhost:3000** using **yarn** - **yarn dev**
