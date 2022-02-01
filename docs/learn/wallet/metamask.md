---
title: MetaMask Wallet
description: How to install, manage, and fund a MetaMask wallet.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# MetaMask

How to install and fund a MetaMask wallet.

---

## Get Started with MetaMask

To build a blockchain application on Ethereum you need to install a [MetaMask](https://metamask.io/) wallet and fund it with testnet funds for Ethereum’s Rinkeby testnet. If you don’t know what that means yet, don’t worry! The following sections will provide you with all of the details you need to get started.

:::info

Looking for a different wallet? [View wallets](overview)

:::

## What is MetaMask?

[MetaMask](https://metamask.io/) is a popular [crypto wallet](https://docs.hyperverse.dev/basics/glossary#wallet) that provides a simple yet secure way to connect to blockchain-based applications. Installing a wallet allows you to interact with decentralized applications ([dApps](https://ethereum.org/en/developers/docs/dapps/)) and is an important part of developing and testing your dApp.

<YouTube videoId="YVgfHZMFFFQ"/>

:::info

If you run into any issues while getting started with MetaMask, you can visit the [MetaMask Docs](https://docs.metamask.io/guide/) or [MetaMask Support](https://metamask.zendesk.com/hc/en-us/) for additional details.

:::

## Install MetaMask

If you do not have a MetaMask wallet, navigate to [metamask.io](https://metamask.io/) and follow [How to set up a MetaMask Wallet](https://www.surgewomen.io/learn-about-web3/set-up-metamask-wallet) for support while getting started.

![1](/img/content/docs/metamask/1.png)

## Fund your wallet

To interact with a blockchain application your MetaMask wallet needs to contain cryptocurrency specific to the blockchain you are using. This currency is used anytime you make a transaction on the blockchain which is common while building and testing dApps. [Ethereum](https://ethereum.org/en/developers/docs/intro-to-ethereum/) uses a currency known as [Ether](https://ethereum.org/en/developers/docs/intro-to-ether/) which has real-world value, meaning developing applications can become quite expensive.

To avoid spending real money while building dApps, Ethereum developers have created test networks ([testnets](https://docs.hyperverse.dev/basics/glossary#test-netowork-testnet)) that operate using a test currency that has no real-world value. You can fund your wallet for free using a testnet [faucet](https://docs.hyperverse.dev/basics/glossary#faucet) and refill your MetaMask wallet with additional Ether at any time. The Ethereum testnet you will use to develop applications is known as the [Rinkeby testnet](https://ethereum.org/en/developers/docs/networks/#testnets).

To access the Rinkey testnet from MetaMask, open the [browser extension](https://metamask.io/download/) and select the Rinkey testnet from the top navigation menu.

![2](/img/content/docs/metamask/2.png)

You may now copy the account address of your testnet account.

![3](/img/content/docs/metamask/3.png)

Navigate to one of the following Rinkeby testnet faucets and provide your wallet address to fund your account.

- [Paradigm Testnet Faucet](https://faucet.paradigm.xyz/) (recommended)
- [Rinkeby Authenticated Faucet](https://faucet.rinkeby.io/)
- [MyCrypto](https://app.mycrypto.com/faucet)

After providing your address, follow the directions at the bottom of the page. This is used to prevent spam or malicious attacks that would block access to this service. After your transaction is confirmed on the Rinkeby testnet, you will be able to view your test funds in your MetaMask wallet.

![4](/img/content/docs/metamask/4.png)

## Congratulations!

You have now installed and funded your MetaMask wallet with Ether for the Ethereum Rinkeby testnet. You are ready to begin developing on the Hyperverse!

:::info

Interested in using the MetaMask wallet to develop on a blockchain? View [Ethereum](../../build/blockchain/ethereum).

:::
