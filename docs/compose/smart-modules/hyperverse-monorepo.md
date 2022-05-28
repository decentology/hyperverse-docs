---
title: Hyperverse Monorepo
description: Overview and structure of the Hyperverse Monorepo.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Hyperverse Monorepo

Overview and structure of the Hyperverse Monorepo.

---

:::info

View the [Hyperverse Monorepo](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/index.ts) on GitHub to get started with the Hyperverse!

:::

## Monorepo Architecture

The [Hyperverse Monorepo](https://github.com/decentology/hyperverse-mono) contains code packages and applications for the Hyperverse.

- [packages](https://github.com/decentology/hyperverse-mono/tree/main/packages): Blockchain implementations, smart modules and starterkits.
- [apps](https://github.com/decentology/hyperverse-mono/tree/main/apps): Example applications organized by blockchain.

### Packages

Blockchain implementations, smart modules, starterkits and utilities.

- Hyperverse Core
- Blockchain Integrations
- Smart Modules
- Starterkits
- Utilities

### Hyperverse Core

Package defining core Hyperverse functionality.

- [hyperverse](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse): Defines core Hyperverse functionality.

### Blockchain Integrations

Packages defining Hyperverse blockchain integrations.

- [hyperverse-algorand](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-algorand): Defines Algorand specific Hyperverse implementation.
- [hyperverse-ethereum](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum): Defines defining Ethereum specific Hyperverse implementation.
- [hyperverse-evm](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-evm): Defines EVM specific Hyperverse implementation.
- [hyperverse-flow](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-flow): Defines Flow specific Hyperverse implementation.
- [hyperverse-metis](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-metis): Defines Metis specific Hyperverse implementation.
- [hyperverse-polygon](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-polygon): Defines Polygon specific Hyperverse implementation.
- [hyperverse-storage-skynet](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-storage-skynet): Defines Skynet specific Hyperverse implementation for storage.

### Smart Modules

Packages defining blockchain specific use cases prepared for JavaScript developers.

- Algorand
- Ethereum
- EVM
- Flow
- Metis

:::info

View [explore modules](https://docs.hyperverse.dev/basics/modules) a current list of descriptions and resources for each smart module.

:::

### Starterkits

Templates use to facilitate rapid development of Hyperverse smart modules.

- [ethereum-starterkit](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum-starterkit)

### Utilities

Additional tools and libraries used within Hyperverse packages.

- [web3modal](https://github.com/decentology/hyperverse-mono/tree/main/packages/web3modal): A single Web3 / Ethereum provider solution for all Wallets.
- [unstated-next](https://github.com/decentology/hyperverse-mono/tree/main/packages/unstated-next): Library built for React that allows the sharing of state globally in our applications.
- [config](https://github.com/decentology/hyperverse-mono/tree/main/packages/config): Contains all Hyperverse configuration files

## Hyperverse Core

Package defining core Hyperverse functionality.

### Source

- [useHyperverse.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/useHyperverse.tsx): Specifies **useHyperverse** container as implemented by blockchain packages.
- [Provider.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/Provider.tsx): Defines Hyperverse provider configurations.
- [initialize.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/initialize.ts): Returns Hyperverse initialization options.
- [types.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/types.ts): Sets integration blockchain features, configuration, and instance definitions.

### Components

- [DeviceDetect.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/components/DeviceDetect.tsx): Detects user’s mobile or desktop device.

### Constants

- [blockchain.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/constants/blockchains.ts): Specifies list of Hyperverse compatible blockchains.
- [networks.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/constants/networks.ts): Specifies network naming conventions and configuration.
- [storage.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse/source/constants/storage.ts): Specifies Hyperverse storage provider options.

**Access: **useHyperverse

## Blockchain Integrations

Active Hyperverse integrations available for Smart Module development.

### Algorand

Defines [hyperverse-algorand](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-algorand) specific Hyperverse implementation.

- …status?

### Ethereum

Defines [hyperverse-ethereum](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-ethereum) specific Hyperverse implementation.

- [Provider.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-ethereum/source/Provider.tsx): Defines Ethereum provider options connecting Mainnet & Testnet to Infura.
- [index.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-ethereum/source/index.ts): Specifies blockchain ad provider definitions for Ethereum blockchain.
- [useEthereum.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-ethereum/source/useEthereum.ts): Defines Ethereum container for implementation within Hyperverse Smart Modules.

**Access:** useEthereum

### EVM

Defines [hyperverse-evm](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-evm) specific Hyperverse implementation.

- [useEVM.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm/source/useEVM.ts): Defines provider options, modal, state, network, and connnections for EVM chains.
- [index.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm/source/index.ts): Specifies blockchain provider definitions for EVM chains.

**Access: **useEVM

### Flow

Defines [hyperverse-flow](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-flow) specific Hyperverse implementation.

- [index.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-flow/source/index.ts): Specifies blockchain provider definitions for Flow blockchain.
- [types.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-flow/source/types.ts):
- [useFlow.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-flow/source/useFlow.ts): Defines Flow container for implementation within Hyperverse Smart Modules.

**Access:** useFlow

### Metis

Defines [hyperverse-metis](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-metis) specific Hyperverse implementation.

- [Provider.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-metis/source/Provider.tsx): Defines Metis networks connecting Mainnet & Testnet to EVM provider.
- [index.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-metis/source/index.ts): Specifies blockchain provider definitions for Metis.
- [useMetis.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-metis/source/useMetis.ts): Defines Metis container for implementation within Hyperverse Smart Modules.

**Access:** useMetis

### Polygon

Defines [hyperverse-polygon](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-polygon) specific Hyperverse implementation.

- [Provider.tsx](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-polygon/source/Provider.tsx): Defines Polygon networks connecting Mainnet & Testnet to EVM provider.
- [Index.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-polygon/source/index.ts): Specifies blockchain provider definitions for Polygon.
- [usePolygon](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-polygon/source/usePolygon.ts): Defines Polygon container for implementation within Hyperverse Smart Modules.

**Access:** usePolygon

### Skynet

Defines [hyperverse-skynet](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-storage-skynet) specific Hyperverse implementation.

- [useStorage.ts](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-storage-skynet/source/useStorage.ts): Defines Storage container for implementation within Hyperverse Smart Modules.

**Access: **useStorage
