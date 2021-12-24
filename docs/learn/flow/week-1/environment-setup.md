---
title: Flow Programming Environment
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Flow Programming Environment

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="ygxmbF0QbHo"/>

## Flow

Flow is a blockchain that's efficient, fast, reliable, and it supports smart contracts. It is designed by developers for developers with tons of tools and resources made available. You can go from zero to executing your first contract in a few minutes, without having to spend loads of time correctly setting up your environment.

Flow has an innovative architecture, and you can learn more about that by going to [onflow.org][1]. For the purposes of our Bootcamp, we only need to understand how to communicate with the Flow blockchain, and as such, we won't dig deeper into how it works.

## Environment

Let's get started by setting up our environment. Flow has a command-line utility that enables us to interact with the blockchain. I'll show you how to do it both on Windows and Linux/macOS.

## Linux/macOS

Following the [documentation][2] it's a simple one-liner.

```sh
sh -ci "$(curl -fsSL https://storage.googleapis.com/flow-cli/install.sh)"
```

But make sure to include `flow` in your `$PATH`. After doing all that, reload your shell settings.

## Windows

Again, following the [documentation][2], make sure you have **PowerShell** on your version of Windows. Search for _"PowerShell"_ and once it's open, run this command.

```sh
iex "& { $(irm 'https://storage.googleapis.com/flow-cli/install.ps1') }"
```

## Testing

After you've successfully installed `flow-cli` you should be able to run the version command.

```sh
flow version
```

As of this recording, it should display `v0.26.0`.

```sh
Version: v0.26.0
Commit: 5cac45ba37572dfe4279d9ad26019950ef53b3c8
```

To take it a step further, let's execute our first **Cadence** command.

```sh
flow cadence
```

We're greeted by a command-line prompt.

```
Welcome to Cadence v0.18.0!
Type '.help' for assistance.

1>
```

Let's say hi to the World!

```
log("Hello, World!")
```

The response should say:

```
"Hello, World!"
()
```

I'm going to be using **VS Code** as my code editor, the team at Flow have created an extension for VS Code that enables syntax highlighting, type checking, and more. To install it locally, as per their [documentation][3], simply run this command.

```sh
flow cadence install-vscode-extension
```

Now that we're all set up, we can dig deeper into **Cadence**, the **Flow** smart contract programming language. Going forward, I'll be working in a Linux environment, but everything should work the same in both macOS and Windows.
