---
title: EVM Builderkit Setup
description: Set up your developer environment and prepare to build a smart module using the EVM Builderkit.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# EVM Builderkit

Set up your developer environment and prepare to build a smart module using the EVM Builderkit.

---

## Getting Started

To build your EVM Smart Module, start by setting up your Hyperverse EVM Builderkit local environment. The goal here is to set up both the EVM Builderkit and the Hyperverse Monorepo in your local environment. This will allow you to create your Smart Module and submit it to the Hyperverse Monorepo when you are ready.

![1](/img/content/docs/builderkit/8.png)

## Set up Hyperverse Monorepo

The Hyperverse Monorepo is where you will submit your final smart module. To get started, change into your preferred project directory.

```
cd project-folder
```

Clone the Hyperverse Monorepo into your local environment.

```
git clone https://github.com/decentology/hyperverse-mono
```

:::info Example

Throughout this section, there will be references to a completed ERC20 Smart Module. This is an example of a smart module that has been deployed as part of the Hyperverse Monorepo. You can view this module at `hyperverse-mono/packages/hyperverse-evm-erc20/`.

:::

## Set up Builderkit

From outside of the Hyperverse Monorepo directory, clone the EVM Builderkit.

```
git clone https://github.com/decentology/hyperverse-evm-builderkit.git
```

**Change into the Builderkit directory**

```
cd hyperverse-evm-builderkit/
```

### Install Project Dependencies

```
pnpm i
```

:::info

View [pnpm](https://pnpm.io/installation) for installation instructions.

:::

### Start the Builderkit

Starting the builderkit will create a local environment for you to build your smart module.

```
pnpm storybook
```

### View your Builderkit

Navigate to [localhost:6006](http://localhost:6006/?path=/story/example-test1--example) to view your builderkit. Users will be able to view and interact with your completed smart module from this page.

![1](/img/content/docs/builderkit/9.png)

## Build Smart Contracts

You're now ready to start building your smart contracts!

<PageRef url="smart-contracts" pageName="Step 2: Smart Contracts" />
```
