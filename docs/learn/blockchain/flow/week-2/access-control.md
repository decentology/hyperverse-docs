---
title: Access Control
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Access Control

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="_CNxRMIrN98"/>

## Access Control

Access Control describes the way in which we can use things called "Access Modifiers" to increase the security of our smart contracts.

Previously, you may have declared all of your variables and functions using the `pub` keyword, like so:

```cadence
pub let x: Bool

pub fun jacobIsAwesome(): Bool {
  return true
}
```

But what exactly does `pub` mean? Why are we putting it there? Are there other things we can do instead? I want to answer those questions here.

Let's take a look at this diagram to help give us an idea of all the different access modifiers we can use.

<!-- ![Access Modifiers](images/access_control.png) -->

In the video, we only focus on the `var` rows, because `let` does not have a write scope since it is a constant. I encourage you to watch the video before reading over this next section.

Note: [here is the playground from the video.](https://play.onflow.org/2cc441ff-d356-4e36-a45f-715278bd658f?type=account&id=b97af048-15a4-445d-95fe-a31becc2ce41)

### Scope

Scope is the area in which you can access, modify, or call your "things" (variables, constants, fields, or functions). There are 4 types of scope:

1. All - this means we can access our thing from wherever we want. Inside the contract, in transactions and scripts, wherever.
2. Current & Inner - this means we can only access our thing from where it is defined and inside of that.

Ex.

```cadence
pub struct TestStruct {

  pub var x: String

  // The "current and inner scope" for 'x' is here...

  pub fun testFunc() {
    // and in here.
  }

  init(){...}
}
```

3. Containing Contract - this means we can access our thing anywhere inside the contract that it is defined.

Ex.

```cadence
pub contract TestContract {

  // The "containing contract" for 'x' is here...

  pub struct TestStruct {

    pub var x: String

    // here...

    pub fun testFunc() {
      // and in here.
    }

    init(){...}
  }
}
```

4. Account - this means we can access our thing anywhere inside the account that it is defined. Remember: we can deploy multiple contracts to one account.

### pub(set)

`pub(set)` only applies to variables, constants, and fields. Functions **cannot** be publically settable. It is also the most dangerous and easily accessible modifier.

Ex.

```cadence
pub(set) var x: String
```

Write Scope - **All**

Read Scope - **All**

### pub/access(all)

`pub` is the same thing as `access(all)`. This is the next layer down from pub(set).

Ex.

```cadence
pub var x: String
access(all) var y: String

pub fun testFuncOne() {}
access(all) fun testFuncTwo() {}
```

Write Scope - Current & Inner

Read Scope - **All**

### access(account)

`access(account)` is a little more restrictive than `pub` due to its read scope.

Ex.

```cadence
access(account) var x: String

access(account) fun testFunc() {}
```

Write Scope - Current & Inner

Read Scope - Account

### access(contract)

`access(contract)` is a little more restrictive than `access(account)` due to its read scope.

Ex.

```cadence
access(contract) var x: String

access(contract) fun testFunc() {}
```

Write Scope - Current & Inner

Read Scope - Containing Contract

### priv/access(self)

`priv` is the same thing as `access(self)`. This is the most restrictive (and safe) access modifier.

Ex.

```cadence
priv var x: String
access(self) var y: String

priv fun testFuncOne() {}
access(self) fun testFuncTwo() {}
```

Write Scope - Current & Inner

Read Scope - Current & Inner
