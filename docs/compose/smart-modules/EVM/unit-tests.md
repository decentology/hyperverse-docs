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

:::info Smart Contracts Setup

Haven't written your smart contracts? See [Smart Contracts](smart-contracts) before moving forward.

:::

## Helpful Resources

Unit tests are written using the Chai Assertion library while using Hardhat to compile and deploy smart contracts. This guide assumes you have some understanding of these tools and you can use the links below to find additional information.

- [Chai](https://www.chaijs.com/)
- [Hardhat](https://hardhat.org/)

### Update module-test.js

The [module-test.js](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/test/module-tests.js) file should contain all of the unit tests for your smart contract. To complete this file, update the module description, module name, and add unit tests for each of your smart contract functions.

```jsx
const { ethers } = require("hardhat");
const { expect } = require("chai");

// highlight-start
// STEP 1: UPDATE MODULE DESCRIPTION
describe("Module", function () {
  let Module;
  let ModuleFactory;
  let moduleContract;
  let factoryContract;
  let alice;
  // highlight-end

  beforeEach(async () => {
    // highlight-start
    // STEP 2: UPDATE MODULE NAME
    Module = await ethers.getContractFactory("Module");
    // highlight-end
    [owner, alice, bob, cara] = await ethers.getSigners();

    // highlight-start
    // STEP 3: UPDATE moduleContract TO MODULE NAME & Module to <Name>
    moduleContract = await Module.deploy(owner.address);
    await moduleContract.deployed();
    // highlight-end

    // highlight-start
    // STEP 4: UPDATE ModuleFactory to <Name>Factory
    ModuleFactory = await ethers.getContractFactory("ModuleFactory");
    factoryContract = await ModuleFactory.deploy(
      // highlight-end
      // highlight-start
      // STEP 5: UPDATE moduleContract to <name>Contract
      moduleContract.address,
      // highlight-end
      owner.address
    );
  });

  describe("Initial", function () {
    it("Checking owner", async () => {
      // highlight-start
      // STEP 6: UPDATE moduleContract to <name>Contract
      expect(await moduleContract.contractOwner()).to.equal(owner.address);
      // highlight-end
    });
  });

  // highlight-start
  // STEP 7: ADD TESTS FOR ALL FUNCTIONS IN SMART CONTRACT
  // ...describe
  // highlight-end
});
```

:::info Example

View an example of a completed **module-test.js** file at [token-test.js](https://github.com/decentology/hyperverse-mono/blob/main/packages/hyperverse-evm-erc20/test/token-test.js).

:::

## JavaScript API

You're now ready to start building your JavaScript API!

<PageRef url="javascript-api" pageName="Step 4: JavaScript API" />
