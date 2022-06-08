---
title: Factory Pattern
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Factory Pattern

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts.

---

### Introduction

Smart Modules are a collection of composable smart contracts that you can choose from to begin their journey on the Hyperverse. As long as you are familiar with JavaScript, you can explore and connect Smart Modules to build decentralized apps without having to write a single line of smart contract code.

Hyperverse Smart Modules uses Clone Factory Pattern to create multiple instances of the same contract and a way to keep track of instances and manage them easily. This way Smart Modules achieve multi-tenancy which is a tried and tested model for many Web2 applications.

:::info

Want to learn more about Smart Modules? [Learn more](../introduction).

:::

## What is the Factory Pattern?

It’s a well known programming pattern where we create objects without exposing the creation logic to the client and the client uses the same common interface to create a new type of object. Basically the factory contract should be able to deploy multiple instances of the same contract, store these created instances on the blockchain, and retrieve them when needed.

## Perks of using Factory Pattern in Hyperverse

- Deploy multiple contact with higher gas efficiency
- Improve security of the contract
- Keep track of all deployed contracts
- Save gas on deployment of multiple contracts
- Easier to manage multiple contract that all have same functionalities

## Types of Factory Pattern

### Normal Factory Pattern

This pattern deploys multiple instances of the contract without any optimisation to save gas on each deployment.

### Clone Factory Pattern

Problem with the above pattern is that it wastes a lot of GAS as all the child contracts will have the same logic and we redeploy the same contract every time. The right way is to deploy only one child contract with all functionalities and make all other child contracts act as proxies that delegate calls to the first child contract.

![1](/img/content/docs/factory-pattern/1.png)

## Smart Modules Contracts

- Module.sol - This file contains all the core functionalities that are necessary for a contract.
- ModuleFactory.sol - This contains implementation of the clone factory pattern, which is used to create instances of the master contract and also the tenant details of the instance.
- CloneFactory.sol - Used by the ModuleFactory to create clones and deploy the respective smart module.
- IHyperverseModule.sol - Defines Module Metadata of the Hyperverse Smart Modules.

## How Does It Work?

Module contract is the first step, which contains all the core functionalities, once the Module contract is deployed the next step is to provide the Module Factory contract with the address of the Module contract, once it’s done the Module Factory contract is also deployed.

![1](/img/content/docs/factory-pattern/2.png)

After successfully deploying both contracts, it’s now time to use the Module Factory contract to ‘Create Instance’ by supplying necessary arguments. This will use the Clone Factory contract to create a clone of the master contract, initialize the Tenant state of the clone and sets Tenant data like tenant owner etc.

:::info

For questions, comments, and discussions please use our [Discord](https://discord.com/invite/uqecGxg).

:::
