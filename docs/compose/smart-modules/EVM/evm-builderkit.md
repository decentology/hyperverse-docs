---
title: EVM Builderkit
description: Develop EVM compatible smart modules with the Hyperverse EVM Builderkit.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Introduction

Develop EVM compatible smart modules with the Hyperverse EVM Builderkit.

---

## What is the EVM Builderkit?

The EVM Builderkit provides a set of tools to help you build EVM compatible smart modules on the Hyperverse.

## EVM Builderkit Demo

Watch the video below to learn how to build a smart module using the EVM Builderkit.

<YouTube videoId="E9WrvKwUnpg"/>

## Step 1: Set up your Environment

To build your EVM Smart Module, start by setting up your Hyperverse EVM Builderkit local environment.

![1](/img/content/docs/builderkit/3.png)

<PageRef url="evm-setup" pageName="Step 1: Environment Setup" />

## Step 2: Write your smart contracts

Now that you've set up your environment, you may begin building your smart contracts in the [contracts](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/contracts) directory.

![1](/img/content/docs/builderkit/4.png)

<PageRef url="smart-contracts" pageName="Step 2: Smart Contracts" />

## Step 3: Write unit tests

No smart contract is complete without having been thoroughly tested. To test your smart contract, write unit tests inside of the [/tests/module-tests.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/test/module-tests.js) file. Continue refining your contract and redeploying until you're happy with your smart contract.

![1](/img/content/docs/builderkit/5.png)

<PageRef url="unit-tests" pageName="Step 3: Unit Tests" />

## Step 4: Build JavaScript API

Once your smart contract is built, tested, and deployed, you'll build a JavaScript API to interact with your smart contract. Navigate to the [source](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/source) folder to build and edit your JavaScript API.

![1](/img/content/docs/builderkit/6.png)

<PageRef url="javascript-api" pageName="Step 4: JavaScript API" />

## Step 5: Build UI Harness

To interact with your smart contract, you'll need to build a UI harness. This is the UI that will be displayed to the user that enables experiment with the functionality of your smart contract. Navigate to the [stories](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/stories) folder to build and edit your UI harness.

![1](/img/content/docs/builderkit/7.png)

<PageRef url="ui-harness" pageName="Step 5: UI Harness" />

:::info Connect with us

Join us on [Discord](https://discord.com/invite/uqecGxg) or view the [Forum](https://forum.decentology.com/) if you have any questions at all while getting started with the Hyperverse.

:::
