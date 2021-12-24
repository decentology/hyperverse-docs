---
title: DappStarter Architecture
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# DappStarter Architecture

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="scZZiFXfXa4"/>

# Intro to DappStarter

You can find DappStarter here: https://dappstarter.decentology.com/

Before reading this section, make sure to watch the associated video above. This section will go over some terminology we use for things you'll encounter in DappStarter so it will make sense for upcoming days.

## Action Cards

<!-- ![Transaction Action Card](images/transaction_action_card.png) -->

_An example of an action card that sends a transaction_

<!-- ![Script Action Card](images/script_action_card.png) -->

_An example of an action card that executes a script_

Action cards are used to run transactions and scripts on the UI Harness. They each have different **widgets** inside them so we can pass parameters to our transactions and scripts. This can be very useful, because we no longer have to type out crazy json-formatted stuff into our command line. Instead, we can easily select accounts, insert numbers, etc.

The action cards that have an orange Submit button on them send transactions to the blockchaiin. Action cards that have a green View button execute scripts.

## Widgets

**Widgets** are the pieces of UI we use to select parameters inside our **action cards**. There are two main types of widgets you should know:

<!-- ![Account Widget](images/account_widget.png) -->

_An example of an account widget_

1. Account widgets - these widgets allow you to select an account. We can use these to select signers, recipients of a transfer, etc.

<!-- ![Text Widget](images/text_widget.png) -->

_An example of an account widget_

2. Text widgets - these widgets allow us to type in numbers. We can use these to put in an amount, a price for our Kitty Items, etc.

_Note_: in any text widgets that have an "Amount" label, you MUST use numbers that have a decimal. For example, if you want to input 30, you have to put 30.0. This is because "Amount" takes in Fixed numbers, not Integers.

# Quests

For day one, we have two quests: `W2Q1` and `W2Q2`. These quests will be pretty short because I know I'm throwing a lot at you today.

These quests also won't cover contract interfaces or post/pre-conditions because I don't want to overwhelm you. I will be here right alongside you to help whenever and wherever you need. If you need assistance while solving these, feel free to ask questions on Discord in the **burning-questions** channel or reach out to me in a DM if need be. You got this!!

- `W2Q1` – Access Control Party

Look at the w2q1 folder. For this quest, you will be looking at 4 variables (a, b, c, d) and 3 functions (publicFunc, privateFunc, contractFunc) defined in some_contract.cdc. You will see I've marked 4 different areas (#1, #2, #3 in some_contract.cdc, and #4 in some_script.cdc) where I want you to answer the following task: For each variable (a, b, c, and d), tell me in which areas they can be read (read scope) and which areas they can be modified (write scope). For each function (publicFunc, contractFunc, and privateFunc), simply tell me where they can be called.

Ex. In Area 1:

1. Variables that can be read: a and c.
2. Variables that can be modified: d.
3. Functions that can be accessed: publicFunc and privateFunc
   Note: this is very wrong ^, haha!

- `W2Q2` – Dappiness

For this quest, follow the [Getting our DappStarter dApp](https://www.youtube.com/watch?v=-CuH95wtR-I). Get the Fast Floward Foundation on DappStarter and attempt to run your project as instructed in the video. If you can `yarn start`, see the UI Harness, and submit all the Day 1 **action cards**, you are done! Simply submit a screenshot of the return values on the action cards :)

Best of luck on your quests, you got this. See you next time Cadence adventurers ~
