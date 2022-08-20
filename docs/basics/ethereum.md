---
title: Ethereum UI
description: Build smart modules from ethereum.hyperverse.dev
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Ethereum User Interface

Build smart modules from ethereum.hyperverse.dev

---

## Getting Started

We have created a UI for building smart modules on Ethereum. You can use it to build your own smart modules and deploy them to the Ethereum network. Navigate to [eth.hyperverse.dev](https://eth.hyperverse.dev/) to get started.

:::info

See [Local Environment](/basics/environment) to build dApps with the Hyperverse programmatically using your local environment.

:::

![1](/img/content/docs/ethereum-hyperverse-dev/1.png)

## Initialize Tenant

Select a smart module from the options provided (example ERC721).

![2](/img/content/docs/ethereum-hyperverse-dev/2.png)

## Connect Wallet

Connect your wallet to the Hyperverse using your preferred wallet provider.

![3](/img/content/docs/ethereum-hyperverse-dev/3.png)

## Get Test Ether

Connect a wallet containing test Ether or use any Rinkeby Testnet Faucet to get funds. Once the wallet is connected, you will see the address and funds on the top right hand side of your screen.

![4](/img/content/docs/ethereum-hyperverse-dev/4.png)

After connecting your wallet, fill in the required fields and select **Initialize Tenant**. After a few moments, you will have a tenant associated with your Ethereum address.

![5](/img/content/docs/ethereum-hyperverse-dev/5.png)

## Local Environment

After initializing your tenant, the get started screen will populate with directions on how to **Install Dependencies**, **Initialize the Hyperverse**, and clone the dApp **Boilerplate**.This is helpful when setting up your local environment. Continue to the next section (Dashboard) if you’d like to continue without a local environment.

![6](/img/content/docs/ethereum-hyperverse-dev/6.png)

:::info

View npm package for ERC721 smart module [here](https://www.npmjs.com/package/@decentology/hyperverse-ethereum-erc721)

:::

:::info

View boilerplate for ERC721 smart module [here](https://github.com/decentology/erc721-nextjs-boilerplate)

:::

## Dashboard

The dashboard panel allows you to interact with the functions of your newly created tenant.

![7](/img/content/docs/ethereum-hyperverse-dev/7.png)

Using the ERC721 module, you may **Initialize Collection**, **Mint Token**, **Set Base URI**, and **Set Permission**. This set of functions will change depending on the smart module you choose.

## Code

The code panel allows you to view the storybook, sample app, and the code snippets for your tenant.

![8](/img/content/docs/ethereum-hyperverse-dev/8.png)

## Code Snippets

If you set up your local environment using the Get Started dashboard, you can use the code snippets provided from your local environment to connect your dApp to your tenant

![9](/img/content/docs/ethereum-hyperverse-dev/9.png)

## Sample App

The sample app allows you to interact with the functions of your smart module without setting up a local environment. This is a great way to test the functionality of your module and get inspiration for your project.

![10](/img/content/docs/ethereum-hyperverse-dev/10.png)

:::info

View ERC721 Sample dApp [here](https://samples.hyperverse.dev/erc721-app/).

:::

## Storybook

The storybook allows you to view module details and additional documentation for your smart module. From here you are able to interact with your smart module without a local environment and find additional resources to help you build your dApp.

![11](/img/content/docs/ethereum-hyperverse-dev/11.png)

:::info

View ERC721 Storybook [here](https://samples.hyperverse.dev/erc721-storybook/).

:::

### Example: Approve

From the storybook, select any of the components to demo their functionality. For example, the Approve component will allow you to connect your wallet and approve transactions.

![12](/img/content/docs/ethereum-hyperverse-dev/12.png)

Select **Connect Wallet** and choose the wallet used to create your tenant from the options provided.

![13](/img/content/docs/ethereum-hyperverse-dev/13.png)

You are now ready to approve transactions from your wallet using Storybook!

![14](/img/content/docs/ethereum-hyperverse-dev/14.png)

Select the Docs tab for more information about using this functionality from within your local environment.

![15](/img/content/docs/ethereum-hyperverse-dev/15.png)

Continue testing each Component to learn more and get inspiration for your project.

:::info

See [Local Environment](/basics/environment) to build dApps with the Hyperverse programmatically using your local environment.

:::
