---
title: Hyperverse Early Access
description: Start building smart modules with the with the **Hyperverse Early Access** program.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Build Smart Modules | Early Access

Start building smart modules with the with the **Hyperverse Early Access** program.

---

## Getting started

Welcome to **Hyperverse Early Access** program! This program gives you the opportunity to build a smart module for the Hyperverse. To complete your smart module you'll **create a smart contract**, **write unit tests**, **build a JavaScript API**, and **create an example application**.

:::info Explore Smart Modules

View a list of available smart modules [here](/basics/modules).

:::

## Hyperverse Smart Module Demo

Watch the video below to learn how to build a smart module.

<YouTube videoId="E9WrvKwUnpg"/>

## Step 1: Set up your Environment

Using the Hyperverse, you'll build a smart module using the [smart module starterkit](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum-starterkit). This starterkit allows you to begin with the core functionality you need to build ad deploy your smart module. To get started, you'll need to set up your local environment.

- [Environment Setup](smart-modules/environment-setup)

After completing this step you should have a working Hyperverse environment.

![1](/img/content/docs/create-smart-module/1.png)

## Step 2: Write your smart contract

Now that you've set up your working environment, you're ready to begin building your smart contract. Navigate to the [contracts](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum-starterkit/contracts) directory to edit your smart contracts.

![1](/img/content/docs/create-smart-module/2.png)

When you are ready, navigate to the [/scripts/deploy.js](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-ethereum-starterkit/scripts/deploy.js) file to update your deploy scripts.

![1](/img/content/docs/create-smart-module/3.png)

## Step 3: Write unit tests

No smart contract is complete without having been thoroughly tested. To test your smart contract, write unit tests inside of the [/tests/module-tests.js](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-ethereum-starterkit/test/module-tests.js) file. Continue refining your contract and redeploying until you're happy with your smart contract.

![1](/img/content/docs/create-smart-module/4.png)

## Step 4: Build JavaScript API

Once your smart contract is built, tested, and deployed, you can build a JavaScript API to interact with your smart contract. Navigate to the [/source](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum-starterkit/source) folder to build and edit your JavaScript API.

![1](/img/content/docs/create-smart-module/5.png)

## Thanks for participating!

Thanks for participating in Hyperverse Early Access! We're so excited that you joined us and can't wait to see what you build using the Hyperverse. We'll be here to support any questions you have and will do our best to make sure you have the best possible experience getting started.

:::info Connect with us

Join us on [Discord](https://discord.com/invite/uqecGxg) or view the [Forum](https://forum.decentology.com/) if you have any questions at all while getting started with the Hyperverse.

:::
