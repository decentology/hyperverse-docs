---
title: Build Smart Modules
description: Start building Hyperverse smart modules.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Build Smart Modules

Step-by-step guides to help you build Hyperverse Smart Modules.

---

## What is a Smart Module?

Smart modules are a pre-build package of code containing smart contracts, unit tests, JavaScript API, and UI harness. As a Web3 developer, you can build these smart modules and enable JavaScript developers to build blockchain applications without writing a single line of smart contract code.

![1](/img/content/docs/builderkit/1.png)

:::info

View a list of Hyperverse smart modules [here](/basics/modules) and check out the [Hyperverse Monorepo](./smart-modules/hyperverse-monorepo) and [Smart Module Specifications](./smart-modules/smart-module-specifications) to start building your own smart modules.

:::

## Hyperverse Smart Module Demo

Watch the video below to learn how to build a smart module.

<YouTube videoId="E9WrvKwUnpg"/>

## Step 1: Set up your Environment

Using the Hyperverse, you'll build a smart module using the [smart module starterkit](https://github.com/decentology/hyperverse-evm-builderkit). This starterkit allows you to begin with the core functionality you need to build ad deploy your smart module. To get started, you'll need to set up your local environment.

- [Environment Setup](smart-modules/environment-setup)

After completing this step you should have a working Hyperverse environment.

![1](/img/content/docs/create-smart-module/1.png)

## Step 2: Write your smart contract

Now that you've set up your working environment, you're ready to begin building your smart contract. Navigate to the [contracts](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/contracts) directory to edit your smart contracts.

![1](/img/content/docs/create-smart-module/2.png)

When you are ready, navigate to the [/scripts/deploy.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/scripts/deploy.js) file to update your deploy scripts.

![1](/img/content/docs/create-smart-module/3.png)

## Step 3: Write unit tests

No smart contract is complete without having been thoroughly tested. To test your smart contract, write unit tests inside of the [/tests/module-tests.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/test/module-tests.js) file. Continue refining your contract and redeploying until you're happy with your smart contract.

## What is a Builderkit?

Hyperverse Builderkits help you build smart modules. It provides the core functionality you need to quickly build, deploy, test, and publish your smart module to the Hyperverse.

![1](/img/content/docs/builderkit/2.png)

Once your smart contract is built, tested, and deployed, you can build a JavaScript API to interact with your smart contract. Navigate to the [/source](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/source) folder to build and edit your JavaScript API.

## Available Builderkits

The following Builderkits are available for Web3 developers:

<PageRef url="./smart-modules/EVM/evm-builderkit" pageName="EVM Builderkit" />

:::info

The team is currently working to provide a Builderkit for each Hyperverse blockchain. For questions, comments, and discussions please use our [Discord](https://discord.com/invite/uqecGxg).

:::
