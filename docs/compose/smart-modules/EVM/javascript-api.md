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

:::info Additional resources

Haven't written your unit tests? See [Unit Tests](unit-tests) before moving forward. The JavaScript API is written using [React](https://reactjs.org/) and makes use of both [React Query](https://react-query.tanstack.com/) and [React Hooks](https://reactjs.org/docs/hooks-intro.html). It also uses [Ethers](https://github.com/ethers-io/ethers.js/#the-ethers-project) to interact with the Ethereum Network.

:::

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
// highlight-start
// Update file name to match smart module (ex. erc20Library.ts)
// highlight-end
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

	// highlight-start
	// Add additional functionality to read and write from smart contract
	// highlight-end

	return {
		...base
		// highlight-start
		// Return all additional consts as specified above
		// highlight-end
	}
}
```

## Update useHook.ts

[useHook.ts](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/useHook.ts) provides hooks that expose your library to the React ecosystem.

```jsx
// highlight-start
// Update file name to match smart module (ex. useERC20.ts)
// highlight-end
import { useState, useEffect } from 'react';
import { createContainer, useContainer } from '@decentology/unstated-next';
import { useEvm } from '@decentology/hyperverse-evm';
// highlight-start
// Update imports to match smart module
import { ModuleLibrary, ModuleLibraryType } from './moduleLibrary';
// highlight-end
import { useHyperverse } from '@decentology/hyperverse';

// highlight-start
// Update name to match smart module
function ModuleState(initialState: { tenantId: string } = { tenantId: '' }) {
// highlight-end
	const { tenantId } = initialState;
	const { address, connectedProvider, readOnlyProvider } = useEvm();
	const hyperverse = useHyperverse();
	// highlight-start
	// Update name to match smart module
	const [hyperverseModule, setHyperverseModule] = useState<ModuleLibraryType>();
	// highlight-end


	useEffect(() => {
		// highlight-start
		// Update library to match smart module
		const lib = ModuleLibrary(hyperverse, connectedProvider || readOnlyProvider).then(setHyperverseModule)
		// highlight-end
		return lib.cancel;
	}, [connectedProvider])


	return {
		// highlight-start
		// Update name to match smart module
		...hyperverseModule,
		// highlight-end
		tenantId,
	};
}

// highlight-start
// Update occurrences of module to match smart module
export const Module = createContainer(ModuleState);

export function useModule() {
	return useContainer(Module);
}
// highlight-end
```

:::info

View an example of the completed **useERC20.ts** file [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/useERC20.ts)

:::

## Update Provider.tsx

[provider.tsx](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/source/Provider.tsx) contains the React Context to expose state to child components.

```jsx
import { FC } from "react";
import { QueryClientProvider, QueryClient } from "react-query";
// highlight-start
// Update occurrences of module to match smart module
import { HyperverseModuleInstance } from "@decentology/hyperverse";
import { Module } from "./useHook";
// highlight-end
const client = new QueryClient();

const Provider: FC<HyperverseModuleInstance> = ({ children, tenantId }) => {
  if (tenantId == null) {
    throw new Error("Tenant ID is required");
  }
  return (
    // highlight-start
    // Update occurrences of module to match smart module
    <QueryClientProvider client={client}>
      <Module.Provider initialState={{ tenantId: tenantId }}>
        {children}
      </Module.Provider>
    </QueryClientProvider>
    // highlight-end
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

// highlight-start
// Update occurrences of module in imports and exports to match smart module
import Factory from '../artifacts/contracts/ModuleFactory.sol/ModuleFactory.json';
import Contract from '../artifacts/contracts/Module.sol/Module.json';
import Contracts from '../contracts.json';
export const ContractABI = Contract.abi;
export const FactoryABI = Factory.abi;
// highlight-end

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
// highlight-start
// Update occurrences of module to match smart module
export { useModule } from "./useHook";
// highlight-end
import { Provider } from "./Provider";
export { Provider } from "./Provider";
// highlight-start
// Update occurrences of module to match smart module
export const ModuleName = "CustomModule";
export { ModuleLibrary } from "./moduleLibrary";
export const CustomModule = {
  Provider,
  ModuleName,
};
// highlight-end
```

:::info

View an example of the completed **ERC20 index.ts** file [here](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/source/index.ts)

:::

## Build UI Harness

You're now ready to start building your UI Harness!

<PageRef url="ui-harness" pageName="Step 5: UI Haress" />
