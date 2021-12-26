---
title: DappStarter Tests
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# DappStarter Tests

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="0fBhXLJEr9Q"/>

# Tests

If you've made it this far, you are so close to conquering DappStarter. Awesome job!

The tests can be found in `/packages/dapplib/test/fast_floward-tests.js`. In it, you will find some Javascript code for testing, but you can ignore most of it. Your focus will be on writing **it()** functions to run individual tests. There are a few things to know about setting up a test.

Tests are run using the command `yarn test`. Just like `yarn start`, you type this command at the root of your project. It will start a brand new emulator so that there is no lingering data from your `yarn start`.

## Setting Up a Test

First, you will be calling your DappLib functions just like you do in the UI Harness. Here is an example of a test:

<!-- ![Test](images/test.png) -->

You'll see that we are calling our DappLib functions by doing `DappLib.{nameOfFunction}`. Unlike the UI Harness where we can pass in data through **widgets**, we need to make a `testData` object with the fields defined in it that have hard-coded values for your tests.

You'll notice that if we are calling a DappLib function that sends a transaction, we simple do it by `await DappLib.{nameOfFunction}(testData)`. This is because we don't care about the return value of the call. Howevever, if we call a DappLib function that executes a script, we most likely care about the return value. We can store it like so: `let res = await DappLib.{nameOfFunction}(testData)`.

Afterwards, you can check your script return values with Javascript's `assert`. The actual value of the script can be achieved by `res.result`, and you can compare it to whatever value you expect it to return.

# Hot Loading

It is important to note that DappStarter supports hot loading. If you make any changes to your contracts, transactions, scripts, dapp-lib.js, or the client that we will introduce in tomorrow's content, you will not have to re-run `yarn start`. Your dApp will automatically re-compile for you.

# Quests

I have two quests for you today, `W2Q6` and `W2Q7`. You will **ONLY** be modifying `packages/client/src/harness/fast_floward-harness.js` and `packages/dapplib/tests/fast_floward-tests.js`. Please make sure to watch the videos above before tackling these quests.

- `W2Q6` – The Client

In `packages/client/src/harness/fast_floward-harness.js`, search for 3 action cards that have "TODO" above them. You will have to implement these 3 action cards. I have already implemented the DappLib functions, transactions, and scripts for you, so all you have to do is the action card step. When making your action cards, make sure you are passing in all the correct fields that your DappLib function needs using **widgets**.

Please submit the updated harness file as well as pictures of your action cards on the UI Harness.

- `W2Q7` – Testing Mania

For this quest, inside `packages/dapplib/tests/fast_floward-tests.js`, there are 2 tests for you to write. Follow the guide above on how to write tests (and use the other tests in the file as hints) to try and figure out how to set up the tests I have described for you. There are a bunch of comments above each of the two tests to try and help you in your implementation.

Be sure to submit the test file and a screenshot of all your tests passing in the console.

Good luck on your quests. See you next time DappStarter adventurers ~
