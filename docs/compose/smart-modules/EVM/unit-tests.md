---
title: Unit Tests
description: How to build unit tests for your smart contract.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Unit Tests

How to build unit tests for your smart contract.

---

## Getting Started

No smart contract is complete without having been thoroughly tested. To test your smart contract, write unit tests inside of the [/tests/module-tests.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/test/module-tests.js) file. Continue refining your contract and redeploying until you're happy with your smart contract.

![1](/img/content/docs/builderkit/5.png)

:::info Additional resources

Haven't written your smart contracts? See [Smart Contracts](smart-contracts) before moving forward. Check out the [Chai](https://www.chaijs.com/) assertion library, and [Hardhat](https://hardhat.org/) for additional resources to help you get started.

:::

### Update module-test.js

The [module-test.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/test/module-tests.js) file should contain all of the unit tests for your smart contract. To complete this file, update the module description, module name, and add unit tests for each of your smart contract functions to match your smart contract.

```jsx
const { ethers } = require("hardhat");
const { expect } = require("chai");

// highlight-start
// Update module description
describe("Module", function () {
  let Module;
  let ModuleFactory;
  let moduleContract;
  let factoryContract;
  let alice;
  // highlight-end

  beforeEach(async () => {
    // highlight-start
    // Update module name
    Module = await ethers.getContractFactory("Module");
    // highlight-end
    [owner, alice, bob, cara] = await ethers.getSigners();

    // highlight-start
    // Update occurrences of module name
    moduleContract = await Module.deploy(owner.address);
    await moduleContract.deployed();
    // highlight-end

    // highlight-start
    // Update occurrences of module factory
    ModuleFactory = await ethers.getContractFactory("ModuleFactory");
    factoryContract = await ModuleFactory.deploy(
      // highlight-end
      // highlight-start
      // Update name of moduleContract
      moduleContract.address,
      // highlight-end
      owner.address
    );
  });

  describe("Initial", function () {
    it("Checking owner", async () => {
      // highlight-start
      // Update name of moduleContract
      expect(await moduleContract.contractOwner()).to.equal(owner.address);
      // highlight-end
    });
  });

  // highlight-start
  // Add unit tests for all smart contract functions
  // highlight-end
});
```

:::info Example

View an example of a completed **module-test.js** file at [token-test.js](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/test/token-test.js).

:::

## JavaScript API

You're now ready to start building your JavaScript API!

<PageRef url="javascript-api" pageName="Step 4: JavaScript API" />
