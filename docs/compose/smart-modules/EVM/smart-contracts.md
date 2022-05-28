---
title: Smart Contracts
description: How to build smart contracts with the Hyperverse Builderkit.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Smart Contracts

How to build smart contracts with the Hyperverse Builderkit.

---

## Getting Started

After setting up your local environment, you're ready to build your smart contract. EVM Smart Modules are written in Solidity and use Hardhat to compile and deploy smart contracts in the [contracts](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/contracts) directory.

![1](/img/content/docs/builderkit/4.png)

:::info Additional resources

Haven't set up your environment? See [Environment Setup](evm-setup) before moving forward. Check out [Ethereum](https://ethereum.org/en/), [Solidity](https://soliditylang.org/), [Hardhat](https://hardhat.org/) for additional resources to help you get started.

:::

## Contracts Folder

The [contracts](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/contracts) folder contains the following files.

- [Module.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/Module.sol) - Contains the core functionality of your smart module.
- [ModuleFactory.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/ModuleFactory.sol) - Contains the clone factory implementation of the smart module.
- [hyperverse/CloneFactory.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/hyperverse/CloneFactory.sol) - Enables the ModuleFactory to deploy clones for your smart module.
- [hyperverse/IHyperverseModule.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/hyperverse/IHyperverseModule.sol) - Contains the Hyperverse EVM Smart Module standard.

:::info Example

View examples of a completed ERC20 EVM Module contracts [here](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-evm-erc20/contracts).

:::

### Update Module.sol

The [Module.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/Module.sol) file contains the core functionality of your smart module. To update this contract, import interfaces and utilities, update the contract name & metadata, and add all smart contract functionality.

```jsx
// highlight-start
// Update file name to match smart module (ex. ERC20.sol)
// highlight-end
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;
// highlight-start
// Import interfaces and utilities
// highlight-end
import './hyperverse/IHyperverseModule.sol';
// highlight-start
// Update contract name and include inherited contracts
contract Module is IHyperverseModule {
// highlight-end
   address public immutable contractOwner;
   address private tenantOwner;

   constructor(address _owner) {
       // highlight-start
       // Update metadata
       metadata = ModuleMetadata(
           'Module',
           Author(_owner, 'https://externallink.net'),
           '1.0.0',
           3479831479814,
           'https://externallink.net'
       );
       // highlight-end
       contractOwner = _owner;
   }
   function init(address _tenant) external {
       tenantOwner = _tenant;
   }
   // highlight-start
   // Add smart contract functionality
   // highlight-end
}
```

:::info Example

View an example of a completed **Module.sol** contract at [ERC20.sol](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/contracts/ERC20.sol)

:::

## Update ModuleFactory.sol

The [ModuleFactory.sol](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/contracts/ModuleFactory.sol) file contains the clone factory implementation of the smart module. To update this contract, update the contract name to reflect changes in your **Module.sol** contract.

```jsx
// highlight-start
// Update file name to match smart module (ex. ERC20Factory.sol)
// highlight-end
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
pragma experimental ABIEncoderV2;

import './hyperverse/CloneFactory.sol';
import './hyperverse/IHyperverseModule.sol';
// highlight-start
// Import smart contract
import './Module.sol';
// highlight-end

/**
* @dev Clone Factory Implementation for ERC20 Token.
*/

// highlight-start
// Update occurrences of module name
contract ModuleFactory is CloneFactory {
   struct Tenant {
       Module module;
       // highlight-end
       address owner;
   }

   mapping(address => Tenant) public tenants;

   address public immutable owner;
   address public immutable masterContract;
    // highlight-start
    // Update admin ethereum address
   address private hyperverseAdmin = 0xD847C7408c48b6b6720CCa75eB30a93acbF5163D;
   // highlight-end

   modifier isOwner(address _tenant) {
       require(
           tenants[_tenant].owner == msg.sender,
           'The calling address is not an owner of a tenant'
       );
       _;
   }
   	modifier isAllowedToCreateInstance(address _tenant) {
		require(
			msg.sender == _tenant || msg.sender == hyperverseAdmin,
			'Please use a valid address to create an instance'
		);
		_;
	}

	constructor(address _masterContract, address _owner) {
		masterContract = _masterContract;
		owner = _owner;
	}

	/******************* TENANT FUNCTIONALITIES *******************/

	function createInstance(address _tenant) external isAllowedToCreateInstance(_tenant) {
        // highlight-start
        // Update module name
		Module m = Module(createClone(masterContract));
        // highlight-end

		//initializing tenant state of clone
		m.init(msg.sender);

		//set Tenant data
		Tenant storage newTenant = tenants[_tenant];
        // highlight-start
        // Update occurrences of module name
		newTenant.module = m;
        // highlight-end
		newTenant.owner = _tenant;
	}

	function getProxy(address _tenant) public view returns (Module) {
		return tenants[_tenant].module;
	}
}
```

:::info

View an example of a completed **ModuleFactory.sol** contract at [ERC20Factory.sol](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/contracts/ERC20Factory.sol)

:::

You may extend the functionality of your smart module by developing additional interfaces, utilities, and smart contracts. Read the [Solidity docs](https://docs.soliditylang.org/en/v0.8.13/) for more information.

## Update Deploy Script

When your smart contract is complete, navigate to the [/scripts/deploy.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/scripts/deploy.js) file to update your deploy scripts. This will allow you to deploy your smart modules to the Ethereum network.

```jsx
const hre = require("hardhat");
const fs = require("fs-extra");
const { constants } = require("ethers");
const main = async () => {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer Address: ", deployer.address);
  const hyperverseAdmin = deployer.address;
  // highlight-start
  // Update module name
  const BaseModule = await hre.ethers.getContractFactory("Module");
  // highlight-end
  const baseContract = await BaseModule.deploy(hyperverseAdmin);
  await baseContract.deployed();
  console.log("Module Contract deployed to: ", baseContract.address);
  // highlight-start
  // Update module factory name
  const ModuleFactory = await hre.ethers.getContractFactory("ModuleFactory");
  const moduleFactory = await ModuleFactory.deploy(
    baseContract.address,
    hyperverseAdmin
  );
  await moduleFactory.deployed();
  // highlight-end

  const env = JSON.parse(fs.readFileSync("contracts.json").toString());
  env[hre.network.name] = env[hre.network.name] || {};
  env[hre.network.name].testnet = env[hre.network.name].testnet || {};

  env[hre.network.name].testnet.contractAddress = baseContract.address;
  // highlight-start
  // Update occurrences of module factory
  env[hre.network.name].testnet.factoryAddress = moduleFactory.address;
  // highlight-end

  // Save contract addresses back to file
  fs.writeJsonSync("contracts.json", env, { spaces: 2 });

  // Deploy default tenant
  let proxyAddress = constants.AddressZero;
  // highlight-start
  // Update occurrences of module factory
  await moduleFactory.createInstance(deployer.address);
  while (proxyAddress === constants.AddressZero) {
    proxyAddress = await moduleFactory.getProxy(deployer.address);
  }
  // highlight-end
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
```

## Build Unit Tests

You're now ready to start building your unit tests!

<PageRef url="unit-tests" pageName="Step 3: Unit Tests" />
