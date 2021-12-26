---
title: DappStarter Client
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# DappStarter Client

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="-Rka-0ytXhs"/>

# Client/UI Harness

In this section, we'll learn how to set up our UI Harness and how it connects to our DappLib. You can find the UI Harness in `packages/client/src/harness/fast_floward-harness`. Let's also bring back the diagram we've been using this week to understand the DappStarter architecture:

<!-- ![DappStarter Overview](images/dappstarter_overview.PNG) -->

You'll see that the UI Harness calls the Javascript functions that we set up in our DappLib. Let's find out how.

## Setting Up an Action Card

`fast_floward-harness.js` has a bunch of Javascript in it that we don't need to worry about. Our main focus is going to be on the **action cards** and how to set them up. Let's look at an example of an action card in our UI Harness and also what it looks like in the code:

<!-- ![Picture from UI Harness](images/action-card-ui.png) -->

_This is what the action card looks like in the UI Harness_

<!-- ![Picture from UI Harness Code](images/action-card.png) -->

_This is what the action card looks like in fast_floward-harness.js_

An **action card** element has 5 HTML attributes:

1. **title** - this is the text on the top of your action card and represents the title of it
2. **description** - this is the text on the bottom of your action card that provides a simple description of what it does
3. **action** - this is the name of the Javascript function in your DappLib that this action card will call
4. **method** - either "post" (for transactions) or "get" (for scripts)
5. **fields** - all of the fields we will pass into our Javascript function in our DappLib. Each field will be mapped to a **widget**, which I will explain in the next section. You will access these fields in your DappLib using `data.{nameOfField}`

In the above example, you can see that we have 3 fields which are each represented by a widget (will be explained below). We are calling the kibbleTransferTokens function in our DappLib and passing in the 3 fields to it. This is why, in our DappLib, we wrote `data.signer`, `data.recipient`, and `data.amount`.

### Widgets

Widgets are used to pass in fields to our DappLib. For example, in the action card in the picture above, you'll see it had 3 fields: a signer, an amount, and a recipient.

**Widgets** are most-often either a **text widget** or an **account widget**.

#### Account Widgets

Account widgets allow us to select an account. We can use these to select signers, recipients of a transfer, etc. When we select an account, it will be passed into the DappLib when we hit "Submit" or "View".

Here is an example of an account widget:

<!-- ![Account Widget](images/account_widget.png) -->

In our code, an account widget takes in 2 HTML attributes:

1. **field** - this is the name of the field. It has to match with the field name we put in the **action card's** **field** attribute
2. **label** - this is the label that appears next to the account widget on the UI Harness

#### Text Widgets

Text widgets allow us to type in numbers or strings. We can use these to put in an amount, a price for our Kitty Items, a name, etc.

Here is an example of a text widget:

<!-- ![Text Widget](images/text_widget.png) -->

In our code, an account widget takes in 3 HTML attributes:

1. **field** - this is the name of the field. It has to match with the field name we put in the **action card's** **field** attribute
2. **label** - this is the label that appears next to the text widget on the UI Harness
3. **placeholder** - placeholder text that will appear in the text widget on the UI Harness
