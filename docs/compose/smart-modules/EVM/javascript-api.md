---
title: JavaScript API
description: How to build the JavaScript interface for your smart contract.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# JavaScript API

How to build the JavaScript interface for your smart contract.

---

## Getting Started

Once your smart contract is built, tested, and deployed, you'll build a JavaScript API to interact with your smart contract. Navigate to the [source](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/source) folder to build and edit your JavaScript API.

![1](/img/content/docs/builderkit/6.png)

:::info Smart Contracts Setup

Haven't written your unit tests? See [Unit Tests](unit-tests) before moving forward.

:::

## Helpful Resources

The JavaScript API is written using React.js and makes use of both React Query and React Hooks. It also uses Ether to interact with the Ethereum Network. This guide assumes you have some understanding of these tools and you can use the links below to find additional information.

- [React](https://reactjs.org/)
- [React Query](https://react-query.tanstack.com/)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Ethers](https://github.com/ethers-io/ethers.js/#the-ethers-project)

## Source Folder

The [source](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/source) folder contains the following files for the JavaScript API.

- [moduleLibrary.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/moduleLibrary.ts) - Library that contains the detailed functions that read & write to the blockchain.
- [useHook.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/useHook.ts) - React hook that exposes your library to the react ecosystem.
- [Provider.tsx](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/Provider.tsx) - Hyperverse modules use the React Context to expose state to child components.
- [environment.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/environment.ts) - Simple component that will identify which blockchain and network your module is being used under.
- [index.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/index.ts) - Handles imports and exports for JavaScript API.

## Update moduleLibrary.ts

The [moduleLibrary.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/moduleLibrary.ts) contains the detailed functions that read & write to the blockchain.

```jsx
import { HyperverseConfig } from "@decentology/hyperverse";
import { EvmLibraryBase, getProvider } from "@decentology/hyperverse-evm";
import { ethers } from "ethers";
import { CancellablePromise } from "real-cancellable-promise";
import { getEnvironment } from "./environment";

export type ModuleLibraryType = Awaited<ReturnType<typeof ModuleLibraryInternal>>;
export function ModuleLibrary(...args: Parameters<typeof ModuleLibraryInternal>): CancellablePromise<ModuleLibraryType> {
	return new CancellablePromise(ModuleLibraryInternal(...args), () => { });
}

async function ModuleLibraryInternal(
	hyperverse: HyperverseConfig,
	providerOrSigner?: ethers.providers.Provider | ethers.Signer
) {
	const { FactoryABI, factoryAddress, ContractABI } = getEnvironment(
		hyperverse.blockchain?.name!,
		hyperverse.network
	);
	if (!providerOrSigner) {
		providerOrSigner = getProvider(hyperverse.network);
	}
	const base = await EvmLibraryBase(
		'CustomModule',
		hyperverse,
		factoryAddress!,
		FactoryABI,
		ContractABI,
		providerOrSigner
	);

	return {
		...base
	}
}
```

## Update useHook.ts

[useHook.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/useHook.ts) provides hooks that expose your library to the React ecosystem.

```jsx

import { useState, useEffect } from 'react';
import { createContainer, useContainer } from '@decentology/unstated-next';
import { useEvm } from '@decentology/hyperverse-evm';
import { ModuleLibrary, ModuleLibraryType } from './moduleLibrary';
import { useHyperverse } from '@decentology/hyperverse';

function ModuleState(initialState: { tenantId: string } = { tenantId: '' }) {
	const { tenantId } = initialState;
	const { address, connectedProvider, readOnlyProvider } = useEvm();
	const hyperverse = useHyperverse();
	const [hyperverseModule, setHyperverseModule] = useState<ModuleLibraryType>();


	useEffect(() => {
		const lib = ModuleLibrary(hyperverse, connectedProvider || readOnlyProvider).then(setHyperverseModule)
		return lib.cancel;
	}, [connectedProvider])


	return {
		...hyperverseModule,
		tenantId,
	};
}

export const Module = createContainer(ModuleState);

export function useModule() {
	return useContainer(Module);
}
```

:::info

View an example of the completed **useERC20.ts** file [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/useERC20.ts)

:::

## Update Provider.tsx

[provider.tsx](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/Provider.tsx) contains the React Context to expose state to child components.

```jsx
import { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { HyperverseModuleInstance } from "@decentology/hyperverse";
import { Module } from "./useHook";
const client = new QueryClient();

const Provider: FC<HyperverseModuleInstance> = ({ children, tenantId }) => {
  if (tenantId == null) {
    throw new Error("Tenant ID is required");
  }
  return (
    <QueryClientProvider client={client}>
      <Module.Provider initialState={{ tenantId: tenantId }}>
        {children}
      </Module.Provider>
    </QueryClientProvider>
  );
};

export { Provider };
```

:::info

View an example of the completed **ERC20 Provider.tsx** [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/Provider.tsx)

:::

## Update environment.ts

[environment.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/environment.ts) is a simple component that will identify which blockchain and network your module is being used under. This allows EVM modules to easily work with any supported EVM module

```jsx
import {
	Blockchain,
	isEvm,
	BlockchainEvm,
	EvmEnvironment,
	NetworkConfig,
} from '@decentology/hyperverse';
import Factory from '../artifacts/contracts/ModuleFactory.sol/ModuleFactory.json';
import Contract from '../artifacts/contracts/Module.sol/Module.json';
import Contracts from '../contracts.json';
export const ContractABI = Contract.abi;
export const FactoryABI = Factory.abi;

const environment = Contracts as EvmEnvironment;

function getEnvironment(blockchainName: Blockchain, network: NetworkConfig) {
	if (blockchainName == null) {
		throw new Error('Blockchain is not set');
	}
	if (!isEvm(blockchainName)) {
		throw new Error('Blockchain is not EVM compatible');
	}

	const chain = environment[blockchainName as BlockchainEvm];
	if (!chain) {
		throw new Error('Blockchain is not supported');
	}
	const env = chain[network.type];
	return {
		...env,
		ContractABI,
		FactoryABI,
	};
}

export { environment, getEnvironment };
```

:::info

View an example of the completed **ERC20 environment.ts** file [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/environment.ts)

:::

## Update index.ts

[index.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/index.ts) handles imports and exports for JavaScript API.

```jsx
export { useModule } from "./useHook";
import { Provider } from "./Provider";
export { Provider } from "./Provider";
export const ModuleName = "CustomModule";
export { ModuleLibrary } from "./moduleLibrary";
export const CustomModule = {
  Provider,
  ModuleName,
};
```

:::info

View an example of the completed **ERC20 index.ts** file [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/index.ts)

:::

## Build UI Harness

You're now ready to start building your UI Harness!

<PageRef url="ui-harness" pageName="Step 5: UI Haress" />
