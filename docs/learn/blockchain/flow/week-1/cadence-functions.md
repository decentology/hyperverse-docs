---
title: Cadence Functions
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

## Cadence Functions

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="cGyFC8cEs7I"/>

## Functions

Cadence functions are a lot like functions in other languages, especially Swift. They are value types, meaning you can assign them to variables, and pass them as arguments to other functions. Function arguments can have labels, which provide for clarity at the call-site for what each value represents.

Up to this point we were using the **REPL** functionality of `flow cadence`. To explore functions, we'll start executing our code by sending files to the interpreter.

```sh
flow cadence test.cdc
```

The only difference with `.cdc` files is that you have to declare an entry-point where execution should start. You do that by declaring a function called `main()`.

```cadence
pub fun main() {
  log("Hi!")
}
```

The keyword `pub` that preceeds `fun` is an access modifier and it defines _public_ access to the value. We'll discuss it later, for now, just use `pub` when declaring anything outside of the `main()` function.

For example.

```cadence
pub fun sayHi(to name: String) {
  log("Hi, ".concat(name))
}
pub fun main() {
  sayHi(to: "FastFloward")
}
```

## Composite Types

We now have the basics to start assembling more complex structures. In Cadence, you have two kinds of composite types.

1. Structures - value types (copied)
2. Resources - linear types (moved, not copied, can only exist once)

### Declaration

You declare structures and resources almost the same, each can have fields, functions, and an initializer. Every field must be initialized in the `init()` initializer.

```cadence
pub struct Rectangle {
  pub let width: Int
  pub let height: Int

  init(width: Int, height: Int) {
    self.width = width
    self.height = height
  }
}

pub resource Wallet {
  pub var dollars: UInt

  init(dollars: UInt) {
    self.dollars = dollars
  }
}
```

### Instantiation

Structures are initialized like regular types.

```cadence
let square = Rectangle(width: 10, height: 10)
```

Resources are different, instead of `=` we use `<-` to signify that we're moving the resource from one place to another. We also can't simply allow garbage collection to implicitly dispose of our resource, like we do with structures.

```cadence
let myWallet <- create Wallet(dollars: 10)
destroy myWallet
```

We have to use `create` and `destroy` to explicitly mark what happens to our resources. A resource must be assigned to a variable/field that lives outside of a given scope or it must be destroyed.
