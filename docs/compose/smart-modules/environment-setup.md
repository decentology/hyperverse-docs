---
title: Environment Setup
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Environment Setup

Set up your environment to begin building Hyperverse smart modules.

---

## Fork the monorepo

Navigate to the [hyperverse-monorepo](https://github.com/decentology/hyperverse-mono) and fork the repo to your GitHub account.

![1](/img/content/docs/web3/local-environment/1.png)

## Clone the monorepo

Open your terminal and navigate into your preferred project directory

```
cd my project
```

Clone the forked copy of the hyperverse-monorepo

```
https://github.com/YOUR-PROFILE/hyperverse-mono.git
```

## Create a new branch

Change into the **hyperverse-mono** folder

```
https://github.com/decentology/hyperverse-mono.git
```

Create a branch with the name of the blockchain and smart module you plan to create.

```
git checkout -b blockchain-module
```

## View the project directory

Open the project using your favorite code editor (example: VS Code)

```
code .
```

Navigate to **packages/hyperverse-ethereum-starterkit** to view the Hyperverse smart module template.

![2](/img/content/docs/web3/local-environment/2.png)

Duplicate this folder and name it using the blockchain and smart module name.

Within this project directory you will see the following folders and files:

- **Contracts:** Contains the Hyperverse smart module contracts
- **Scripts:** Contains the deploy scripts for the Hyperverse smart module
- **Source:** Contains the smart module Javascript API
- **Tests:** Contains the tests used to ensure the security of the smart module
- **.gitignore:** Ignores node_modules. .env, and other files that git can ignore
- **hardhat.config**: Includes application deployment information
- **package.json:** Includes all smart module dependencies

Your project environment is now ready to begin building your smart module.
