---
title: Deploying Contracts
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Deploying Contracts

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="jP1t2wnhwe0"/>

## Deploy Contracts

Great! So we have an account, now let's use it to deploy our `Hello` contract that's located in the `hello` folder. Notice how we're no longer using `log()` for our greeting. That's because logging only works on Flow Playground and in the Cadence REPL shell. Instead, we're going to return the greeting as a string.

Another change we're making - we're adding an `event`. When interacting with a contract, it's useful to have events as a way to communicate when certain things happen. Transactions don't have return statements and don't print logs in the emulator, so using events will allow us to see our `greeting`. For more on events, please refer to the [docs][5].

```cadence
pub contract Hello {
  pub event IssuedGreeting(greeting: String)

  pub fun sayHi(to name: String): String {
    let greeting = "Hi, ".concat(name)

    emit IssuedGreeting(greeting: greeting)

    return greeting
  }
}
```

First, let's update our `flow.json` by giving this contract a string name, and providing a path to the source code.

```json
{
  ...,
  "contracts": {
    "Hello": "./hello/contract.cdc"
  },
  ...
}
```

Then we define contract deployment targets.

```json
{
  ...,
  "deployments": {
    "emulator": {
      "emulator-artist": [
        "Hello"
      ]
    }
  }
  ...
}
```

At this point, we can go ahead and deploy our project.

```sh
flow project deploy
```

If we did everything right, we should see this output.

```
Deploying 1 contracts for accounts: emulator-artist

Hello -> 0x01cf0e2f2f715450 (bed8b44ec08dace72775e07a89ceb2ae24949b8ba8991da824bd0895b10ef36e)
```

Please refer to the [docs][3] for more details.

## Scripts

Congrats! We now have our first real smart contract deployed with an account. Let's waste no time, and go play with it. The easiest way to do this will be to execute a script.

Same as with our updated `Hello` contract, we'll modify the script from day 2 to return a string, instead of logging it. Also, we'll provide a `name: String` as an argument instead of hard-coding it. It's more fun that way! One caveat before we proceed, we have to comment out the `emit event` from our `sayHi` function because scripts don't support events.

```cadence
import Hello from "./contract.cdc"

pub fun main(name: String): String {
  return Hello.sayHi(to: name)
}
```

To execute we'll use this command. Please note how we supply arguments by using `--arg Type:value` flags.

```sh
flow scripts execute hello/sayHi.script.cdc \
  --arg String:"FastFloward"
```

Warning! If you're using Windows PowerShell or any other non-unix like terminal, please only use `--arg` to set your arguments. `--args-json` doesn't work on Windows.

We can also use **JSON** to encode our arguments. Remember, the top-level has to be an array `[]`, like in this example.

```sh
flow scripts execute hello/sayHi.script.cdc \
  --args-json='[{"type": "String", "value": "FastFloward"}]'
```

Please refer to the [docs][3] for more details on scripts, as well as the [how to encode Cadence values as JSON][6].

## Transactions

Read-only access to the Flow blockchain with scripts is cool, but transactions are ice cold! Let's take a look.

Flow transactions go through a pipeline that starts with the Cadence source code.

1. Build: encode the source code using `rlp` or the "Recursive Length Prefix" encoding.
2. Sign: cryptographically sign the encoded source code.
3. Send: deliver the encoded source code with the signatures to a Flow Access Node.

For more, please refer to the [docs][7].

Right, time to build! Here's a sample command to build our `sayHi.transaction.cdc` transaction.

```sh
flow transactions build ./hello/sayHi.transaction.cdc \
  --authorizer emulator-artist \
  --proposer emulator-artist \
  --payer emulator-artist \
  --filter payload \
  --save transaction.build.rlp
```

The result is a file `transaction.build.rlp` that encodes our source code, as well as the necessary payer, proposer, and authorizer information. We can then proceed to signing it with our `emulator-artist` account.

```sh
flow transactions sign ./transaction.build.rlp \
  --signer emulator-artist \
  --filter payload \
  --save transaction.signed.rlp \
  -y
```

This produces another file `transaction.signed.rlp` and we can finally send it to our emulator for processing.

```sh
flow transactions send-signed ./transaction.signed.rlp
```

If all goes well, as part of the response, we should see our event that we defined earlier.

```
Events:
    Index	0
    Type	A.01cf0e2f2f715450.Hello.IssuedGreeting
    Tx ID	2188e78921960e1f4cb336432159c8a161f84a0a336bf3afb33a3f77e0ce7f5e
    Values
		- greeting (String): "Hi, 0x1cf0e2f2f715450"
```

### Shortcut

We went through each step of the transaction pipeline to gain a better understanding of how it works. Going forward, we should use the shortcut version of this process.

```sh
flow transactions send ./hello/sayHi.transaction.cdc \
  --signer emulator-artist
```

## Quests

We're getting closer and closer to the our goal of shipping decentralized applications! Today's quests will get just a step away from the finish line. Let's go get it! You'll find stubs for these quests in the `/artist` folder.

- `W1Q5` – Event calendar

Update your `Artist` contract from day 2 to include 3 new events. Emit those events when you see fit.

```cadence
pub event PicturePrintSuccess(pixels: String)
pub event PicturePrintFailure(pixels: String)
```

- `W1Q6` – Printer goes brrrrr

Implement the following transactions.

```
createCollection.transactions.cdc
print.transaction.cdc
```

- `W1Q7` – What you got?

Implement the `displayCollection.script.cdc` as per the specification in the file.

Best of luck on your quests!

[1]: https://docs.onflow.org/cadence/language/
[2]: https://docs.onflow.org/flow-cli/create-accounts/
[3]: https://docs.onflow.org/flow-cli/deploy-project-contracts/
[4]: https://docs.onflow.org/flow-cli/execute-scripts/
[5]: https://docs.onflow.org/cadence/language/events/
[6]: https://docs.onflow.org/cadence/json-cadence-spec/
[7]: https://docs.onflow.org/concepts/transaction-signing/

:::info Office Hours

[Quest implementation and general Q&A](https://www.youtube.com/watch?v=Cb8Fuic6Y9o)

:::
