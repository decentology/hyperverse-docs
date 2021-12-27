---
title: What your Quests should look like
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# What your Quests should look like

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="7L8ixcpB_tE"/>

# Quests

We have two quests today, `W2Q3` and `W2Q4`. You will **ONLY** be modifying Kibble.cdc. Please make sure to watch the video above on what W2Q3 and W2Q4 will look like.

Also, these quests will be pretty short compared to previous days. **_I suggest taking the time to review the 3 contracts and ask about them if you have any questions._** In the upcoming days, we will be writing transactions and scripts to interact with these contracts, so it's important you understand what they're doing. Additionally we will be writing our own contracts next week, so it's crucial you begin to ask yourself how you might set up contracts similar to these.

- `W2Q3` – Hey, Where'd the Functions Go?

Look at Kibble.cdc. If you look in the `Vault` resource, you may notice the `deposit` function is gone. Similarly, the `mintTokens` function in the `Minter` resource isn't implemented. Your job is to follow the comments I wrote in the code and implement those two functions yourself. You can read the surrounding comments to also give you some hints.

Then, `yarn start` your dApp and go to the UI Harness. See if the **action card** that says "DAY 2: Kibble - Mint Tokens" works. To check if it works, go to the "DAY 1: Kibble - Get Balance" **action card** and see if Kibble was minted into the account you chose.

Note: in the `deposit` function, I ask you to use a new syntax: `as!`. You can find an example of this in KittyItems.cdc if it helps.

- `W2Q4` – And Withdraw Too?!?!?

You'll notice that the `withdraw` function in the `Vault` resource is gone as well! Gosh, whoever removed these functions must be an idiot...

Anyways, do the same thing as W2Q3. Implement the `withdraw` function by following the comments and hints I left for you. Then, go to the UI Harness, and see if the **action card** that says, "DAY 2: Kibble - Transfer Tokens" works. You can check to see if it works with the "DAY 1: Kibble - Get Balance" **action card** to see if Kibble was transferred from one account to another.

## What Should I Submit?

For both W2Q3 and W2Q4, please submit your updated Kibble.cdc contract and a screenshot of your action cards working as shown in the video. You don't have to use 30.0 like I did. Try to experiment with different values!

Good luck on your quests. See you next time Cadence adventurers ~
