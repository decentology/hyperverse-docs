---
title: Environment Setup
description: Start building on the Hyperverse in 15 minutes or less.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Local Environment

Start building on the Hyperverse in 15 minutes or less.

---

## How to set up your local environment

When building on the Hyperverse, you have the option to set up your local environment using [create-next-app](https://nextjs.org/) or by cloning the [Hyperverse monorepo](https://github.com/decentology/hyperverse-mono). Check that you have the correct system requirements then choose from the options below to get started.

:::info

See [Ethereum UI](/basics/ethereum) to build dApps using the Hyperverse without using code.

:::

### System Requirements

- [Visual Studio Code](https://code.visualstudio.com/download) (or any IDE for editing JavaScript)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= 14.0.0
- [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

<PageRef url="#using-create-next-app" pageName="Using create-next-app" />
<PageRef url="#using-the-hyperverse-monorepo" pageName="Using the Hyperverse Monorepo" />

## Using create-next-app

Follow the steps below to get your app up and running using `create-next-app`. View the [HyperverseStarterDapp](https://github.com/ShainDholakiya/HyperverseStarterDapp) on GitHub or [How to Get Hooked Up to the Hyperverse From Scratch](https://www.decentology.com/blog/how-to-get-hooked-up-to-the-hyperverse-from-scratch) blog post for more detail.

### Initialize React Next App

```jsx
npx create-next-app example-dapp --ts
```

### Change ito the project folder

```jsx
cd example-dapp
```

### Install the Hyperverse

```jsx
yarn add @decentology/hyperverse
```

### Install Blockchain Package

<Tabs>
  <TabItem value="ethereum" label="Ethereum" default>
  <b>
  yarn add @decentology/hyperverse-ethereum
  </b>
  </TabItem>
  <TabItem value="Metis" label="Metis">
  <b>
    yarn add @decentology/hyperverse-metis
  </b>
  </TabItem>
  <TabItem value="Flow" label="Flow">
  <b>
    yarn add @decentology/hyperverse-flow
  </b>
  </TabItem>
    <TabItem value="Algorand" label="Algorand">
  <b>
    yarn add @decentology/hyperverse-algorand
  </b>
  </TabItem>
</Tabs>

### Update \_app.tsx file

Open your `_app.tsx` file and replace it with the following code.

```jsx
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { initialize, Provider, Network } from "@decentology/hyperverse/react";
import { Ethereum } from "@decentology/hyperverse-ethereum/react";
// import { Metis } from '@decentology/hyperverse-metis/react';
// import { Flow } from '@decentology/hyperverse-flow/react';
// import { Algorand } from '@decentology/hyperverse-algorand/react';

function MyApp({ Component, pageProps }: AppProps) {
  const hyperverse = initialize({
    blockchain: Ethereum,
    network: Network.Testnet,
    modules: [],
  });
  return (
    <Provider initialState={hyperverse}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

The code above defaults to the Ethereum network but you can change it to any other available blockchain.

### Run the development server

```
yarn dev
```

You may now view your running application on [localhost:3000](http://localhost:3000/).

## Using the Hyperverse Monorepo

Use the [Hyperverse Monorepo](https://github.com/decentology/hyperverse-mono) to view the project source code and start building your application.

### Clone the repo

```jsx
git clone https://github.com/decentology/hyperverse-mono
```

### Choose your module

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

### Install project dependencies

```
yarn
```

### Run the development server

```
yarn dev
```

### View the application

Open [http://localhost:3000](http://localhost:3000) in your browser to view your application.

![1](/img/content/docs/quickstart/tribes.png)

_**Example:** Tribes Module_

:::info

Interesting in developing with the Tribes application? [Learn more](../module/tribes)

:::

### Important Links and File Locations

Here are some links and locations of files related to the tribes mobule:

- Rinkeby Etherscan of the [contract](https://rinkeby.etherscan.io/address/0x410E22b393B3A90953c0677F2282E331580ed45b)
- Contract code found in the [repo](https://github.com/decentology/workshop-yeovil/blob/workshop/yeovil/packages/hyperverse-ethereum-tribes/contracts/Tribes.sol)
- [useTribe](https://github.com/decentology/workshop-yeovil/blob/workshop/yeovil/packages/hyperverse-ethereum-tribes/source/useTribes.ts) hook which is what allows us to interact and transact with the contract

:::info

Join us on [Discord](https://discord.com/invite/uqecGxg) view the [Forum](https://forum.decentology.com/) for support using the Hyperverse.

:::
