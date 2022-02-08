---
title: Environment Setup
description: Start building on the Hyperverse in 15 minutes or less.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Environment Setup

Start building on the Hyperverse in 15 minutes or less.

---

## Set up your Local Environment

Use the [Hyperverse Monorepo](https://github.com/decentology/hyperverse-mono) to view the project source code and start building your application.

<Tabs>
  <TabItem value="flow" label="Flow" default>
    <YouTube videoId="QuskcrR03Iw"/>
  </TabItem>
  <TabItem value="ethereum" label="Ethereum">
    <YouTube videoId="UnCNpVR58Fs"/>
  </TabItem>
</Tabs>

:::info

These videos cover getting started with [Flow](/build/blockchain/flow) & [Ethereum](build/blockchain/ethereum) but you may use these steps to build on [Algorand](build/blockchain/algorand).

:::

## System Requirements

- [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing JavaScript)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= 14.0.0
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

## Clone the repo

```jsx
git clone https://github.com/decentology/hyperverse-mono
```

## Choose your module

Navigate to your preferred module within the Hyperverse Monorepo.

**Ethereum Example**

```jsx
cd hyperverse-mono/apps/ethereum/tribes
```

**Flow Example**

```jsx
cd hyperverse-mono/apps/flow/tribes
```

**Algorand Example**

```jsx
cd hyperverse-mono/apps/algorand/web
```

:::info

Learn more about each [blockchain](/build/blockchain/overview) and set up your [wallet](/learn/wallet/overview) to help you get started.

:::

## Install project dependencies

```
yarn
```

## Run the development server

```
yarn dev
```

## View the application

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

![1](/img/content/docs/quickstart/tribes.png)

_**Example:** Tribes Module_

:::info

Interesting in developing with the Tribes application? [Learn more](../module/tribes)

:::

## Important Links and File Locations

Here are some links and locations of files related to the tribes mobule:

- Rinkeby Etherscan of the [contract](https://rinkeby.etherscan.io/address/0x410E22b393B3A90953c0677F2282E331580ed45b)
- Contract code found in the [repo](https://github.com/decentology/workshop-yeovil/blob/workshop/yeovil/packages/hyperverse-ethereum-tribes/contracts/Tribes.sol)
- [useTribe](https://github.com/decentology/workshop-yeovil/blob/workshop/yeovil/packages/hyperverse-ethereum-tribes/source/useTribes.ts) hook which is what allows us to interact and transact with the contract

:::info

Join us on [Discord](https://discord.com/invite/uqecGxg) view the [Forum](https://forum.decentology.com/) for support using the Hyperverse.

:::
