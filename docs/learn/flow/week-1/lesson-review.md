---
title: Section Review
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

## Learn the Basics Review

First, let's review what we learned during Day 1.

- Flow is a cool blockchain.
- Cadence is the programming language for writing DApps on Flow.
- We can use `flow cadence` as a REPL shell, and `flow cadence file.cdc` to execute scripts.
- Cadence is strictly typed, and we explored the following built-in types.
  - `Int`
  - `Fix64`
  - `Address`
  - `String`
  - `Array`
  - `Dictionary`
- Cadence optionals, for example `let optional: String?`, are used when values can be `nil`.
- Cadence functions are value types with named labels.
- Cadence has two composite types:
  - `struct`: value type (copied),
  - `resource`: linear type (moved, can only exist once).
- Cadence `resource`'s use `<-` notation for movement, special keywords `create` and `destroy`, and `@` to denote resource type, for example `let canvas: @Canvas`.

## Flow Playground Review

Before we get to that, let's review day 2.

- Flow Playground is an online environment that simulates the Flow blockchain.
  - You can deploy contracts, send transactions, and execute scripts.
- We store our decentralized applications using Cadence `contract` objects.
- Cadence `script`'s allow us to read data from the Flow blockchain.
- Cadence `transaction`'s allow us to interact with the Flow blockchain.
  - Read and write to account storage using `AuthAccount` during the `prepare` phase.
  - Execute transaction logic in the `execute` phase.
  - Create new instances of Cadence contract `resource` objects.
- Cadence **Account Storage API** and two of its methods
  - `account.save(T, to: /storage/path)`
    - Save objects to account storage.
  - `account.link(/[public|private]/path, target: /domain/path)`
    - Create capabilities that allow borrowing references to objects in storage.
- References give us a way to interact with resources and other types without copy/move operations.
  - Create by casting `&something as &T`.
  - Borrow from capability `account.getCapability().borrow()`.

For a complete Cadence language reference, please visit [docs.onflow.org][1].

## Flow Emulator & Contract Deployment Review

Here's a quick review of Day 3 before we get going.

- Flow Emulator provides a full blockchain experience hosted on your local computer.
  - Create cryptographic key pairs.
  - Create and modify accounts.
  - Build, sign, and send transactions.
  - Execute scripts.
  - Deploy as many contracts as you like.
- The `flow-cli` uses a configuration file `flow.json` to store information about your project.
  - Create aliases for your accounts.
  - Link contract names with source files.
  - Assign contract deployment to individual accounts on a per network basis.
- Cadence `event`s allow the contract to communicate when certain things happen.
  - Transactions don't return results to senders, but using `emit EventName` in your contract, you can receive information about what happend as part of the `.events` field of the transaction result.

## Flow Client Library Review

Here's a quick review of Day 4 before we get going.

- Flow Client Library - FCL - is a JavaScript client-side utility designed by Flow.
  - Easily integrate wallets and allow seamless user authentication.
  - Use the `fcl.send` method to interact with the blockchain by sending scripts and transactions.
  - Use `fcl.authz` as a shorthand for current user.
  - FCL automatically converts Cadence types and values into JavaScript equivalents with `fcl.decode`.
- Flow Testnet provides an easy way to test DApp integrations with live user wallets.
  - To view contracts deployed to testnet, use [flow-view-source.com][1].
  - To create and fund testnet accounts, use [flowfaucet][2].
