---
title: Create an Instance
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an Instance

Create a personal instance by connecting your wallet to the Hyperverse.

---

## Setup

Navigate to [localhost:3000/setup](http://localhost:3000/setup)

![1](/img/content/docs/create-instance/1.png)

Copy the address from your wallet (example: MetaMask)

![1](/img/content/docs/create-instance/9.png)

## On Ethereum

Navigate to `packages/hyperverse-ethereum-tribes/source/Provider.tsx` and replace the `TENANT_ADDRESS` with your wallet address.

![1](/img/content/docs/create-instance/3.png)

## On Flow

Navigate to `flow/tribes/pages/shared.tsx` and replace the `TENANT_ADDRESS` with your wallet address.

![1](/img/content/docs/create-instance/10.png)

## Create Instance

Navigate back to [localhost:3000/setup](http://localhost:3000/setup) and select **Create Instance**

![1](/img/content/docs/create-instance/4.png)

Approve the transaction from your wallet and wait for it to process.

![1](/img/content/docs/create-instance/7.png)

You now have an instance that allows you to create transactions specific to your wallet.

![1](/img/content/docs/create-instance/8.png)

:::info

After successfully creating an instance, you are now able to add a [tribe](../../module/tribes).

:::
