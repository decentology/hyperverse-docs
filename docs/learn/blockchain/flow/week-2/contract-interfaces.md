---
title: Contract Interfaces
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Contract Interfaces

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="nONO4MSou5Y"/>

## Contract Interfaces

I know, I know. More Cadence. Ugh. We're almost done... just kidding! We will be stuck with Cadence for 2 more weeks, so we might as well keep going. :)

Contract interfaces are very similar to what we learned last week with resources. They are a little different, though, and it will appear in some examples this week, so let's go over it quickly (don't worry, it's not that bad).

Let's define a sample contract interface:

```cadence
pub contract interface TestContractInterface {
  pub let x: Int

  pub fun readX(): Int {
    post {
      result == self.x:
        "The result is not equal to x. That's a problem."
    }
  }

  pub resource interface INFT{
    pub let y: Int
  }

  pub resource NFT: INFT {
    pub let y: Int
  }
}
```

There's multiple things going on here. First, we've defined a constant named `x`, a function named `readX`, a resource interface named `INFT`, and a resource named `NFT` that implements the `INFT` resource interface. But what is this doing? What's the point here?

Well, we can use this contract interface to require other contracts to implement its fields, functions, variables, and constants. Let's use our example from above:

```cadence
import TestContractInterface from './TestContractInterface'
pub contract TestContract: TestContractInterface {
  pub let x: Int

  pub fun readX(): Int {
    return self.x
  }

  pub resource NFT: TestContractInterface.INFT {
    pub let y: Int

    init() {
      self.y = 1
    }
  }

  init() {
    self.x = 0
  }
}
```

As you can see, we had to define an `x` constant, a `readX` function that returns `x`, and a resource named `NFT` that implements `TestContractInterface.INFT` and has field named `y`. Note that `NFT` MUST be named "NFT" or we will receive an error. Similarly, we cannot define our own `INFT` resource interface in `TestContract`. We MUST have `NFT` implement `TestContractInterface.INFT` because that is how `TestContractInterface` is written.

## A Side Note on Pre-Conditions & Post-Conditions

In the example above, you can see we used a **post-condition**. These are most often used in contract interfaces, but you will see them in normal contracts as well. They are both used as an extra security layer and as a means of expressing intent; it makes sure contract functions behave accordingly.

Let's look at the above example:

```cadence
pub contract interface TestContractInterface {
  pub let x: Int

  pub fun readX(): Int {
    post {
      result == self.x:
        "The result is not equal to x. That's a problem."
    }
  }

  {...}
}
```

The post condition here is being used to make sure that whoever implements `TestContractInterface` MUST have a function named readX that returns `self.x`. Not any other value.

Similarly, **pre-conditions** are used to check conditions are met before a function even excecutes. Here's an example:

```cadence
pub contract TestContract {

  {...}

  pub fun deposit(amount: Int): Int {
    pre {
      amount > 0:
        "We do not want to deposit any value equal to or below 0."
    }

    {...}
  }

  {...}

}
```

In this example, assume we are depositing into our Vault. We want to make sure we don't accept an amount equal to or below 0 or it wouldn't make sense. We can do this using a **pre-condition**. It's important to describe why this is so useful:

1. Developer Intent - Any person calling deposit knows amount must be > 0.
2. Saves Time & Resources - If an amount <= 0 is deposited, we will save a ton of time by reverting the call immediately.
3. Extra Layer of Security - We prevent harmful/malicious acts on our own Vaults.
