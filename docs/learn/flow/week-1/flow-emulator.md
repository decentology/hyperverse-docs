---
title: Flow Emulator
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Flow Emulator

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="R3eb07tcSIM"/>

## Flow Emulator

We saw how the Flow blockchain works in practice on day 2. With Flow Playground we were able to deploy smart contracts, run scripts, and execute transactions. It's awesome that you can do all that in your browser!

To accomplish this, Flow Playground abstracts away most of the details. With **Flow Emulator**, we'll get to run a lightweight version of the Flow blockchain locally. To get started, let's create our first project configuration file.

### Configuration

Open up your terminal and run this command.

```sh
flow init
```

It will create a configuration file, `flow.json`, in the current directory. Its main purpose is to link up your local environment with aliases for contracts and accounts, as well as organizing your contract deployments. Let's explore some of the sections in `flow.json`.

#### `networks`

Here is where you will find the addresses of the main Flow blockchain environments. When you want to execute a script, or send a transaction to a particular environment, just use one of the names under `networks`, I.e. `emulator`, `testnet`, or `mainnet`.

On your journey to becoming a DApp developer, look at these environments as a ladder you climb towards shipping a production ready DApp. First, start with the `emulator`. Then, once you a working smart contract, ship it to `testnet` to start integrating with wallets and testing it with friends. Finally, after you've exhaustively tested your DApp, ship it to the `mainnet`.

```json
"networks": {
  "emulator": "127.0.0.1:3569",
  "mainnet": "access.mainnet.nodes.onflow.org:9000",
  "testnet": "access.devnet.nodes.onflow.org:9000"
}
```

#### `accounts`

Here you will assign aliases to the accounts you're using in the development process. Every `flow.json` starts by having `emulator-account` defined, otherwise known as a _service account_. You can add other accounts to simulate various scenarios that your DApp can encounter, or for contract deployment and many other purposes.

```json
"accounts": {
  "emulator-account": {
    "address": "f8d6e0586b0a20c7",
    "key": "bcbd7e16179f286eeb805e06482ac45657d1dface4a775511abcaf8e4b6d4373"
  }
}
```

#### `contracts`

While using Flow Playground we got to interact with smart contracts by `import`'ing them from accounts using the account address. However, if you hard-code an account address in your Cadence code, you will only be able to deploy that contract in the environment that has that account. This is because account addresses are not shared between the emulator and the testnet, or mainnet.

To solve for this, simply use `import Contract from "path/to/contract.cdc"` in your _.cdc_ files, and the `flow-cli` will take care of replacing that with the appropriate account address, if one is defined in your `flow.json`.

```json
"contracts": {
  "Hello": "./hello/contract.cdc"
}
```

#### `deployments`

We combine all of the above sections to create a mapping for contract deployment: **network** > **account** > **contract**.

```json
"deployments": {
  "emulator": {
    "emulator-account": [
      "Hello"
    ]
  }
}
```

### How to Lauch

If you get a system dialog asking for network permissions, please allow it.

```sh
flow emulator start
```

You should be greeted with 4 `INFO` messages, with two at the end confirming the start of a `gRPC` and a `HTTP` server, indicating that you're good to go. The emulator will continue running as long as you keep the process running. You can stop it using the `SIGINT` terminal signal (`CTRL + C` on a macOS terminal).

The data you create while running your emulator doesn't persist by default. This is useful when running tests. However, if you want to, you can instruct the emulator to persist its data using the `--persist` flag.

```sh
flow emulator start --persist
```

This will create a `flowdb` folder for the emulator to store its state. Of course, you can always delete the `flowdb` folder to reset your state.

## Playground

Now that we know how the `flow.json` configuration file works and how to start the Flow Emulator, let's start using it. With the `flow emulator` process running, open up another tab in your terminal where we can start running our commands. By the way, the following commands work for all Flow environments, not just the emulator. The emulator is just the default, if you don't explicitly set a different `--network`.

### Keys

We want to create an account. Before we can do that, we'll need a key pair. Rememeber, the blockchain uses cryptography to determine ownership. The `flow-cli` has a handy command to do just that. The command below also sets the signature algorithm to `ECDSA_secp256k1`, which is the same signature algorithm that Bitcoin uses.

```sh
flow keys generate\
  --sig-algo=ECDSA_secp256k1
```

This returns a set of public and private keys. Obviously, you should not make them public, so be careful.

```
Private Key 	 70d4eebade37eabe0a5df1b1664acf25245187068665c529c1d63f0a214dadfa
Public Key 	 c69560acb6ff5b4db1870ec47c6f2474f862b34bb69b3508557e5733406da63cb5218bdf4ddebc525b93c8d95de1194e77cc9aec7fb0394270cea3ce2c9deee2
```

### Accounts

With our keys in hand, we can create our account. Please note that we must identify the signature algorithm if it's not the default `ECDSA_P256`. Also, since creating an account is just a regular transaction under the hood, an account must sign it. Thankfully, the emulator comes prepopulated with `emulator-account`.

```sh
flow accounts create \
  --key "c69560acb6ff5b4db1870ec47c6f2474f862b34bb69b3508557e5733406da63cb5218bdf4ddebc525b93c8d95de1194e77cc9aec7fb0394270cea3ce2c9deee2" \
  --sig-algo "ECDSA_secp256k1" \
  --signer "emulator-account"
```

If the command succeeds, you'll get an account address in your response. Quick note, unlike Ethereum and some other chains, the account address is not derived from the public key. This means that simply having a public key is not enough to identify an account.

```
Transaction ID: 71b9ded371f66716170d012d2962d97b3dd5c8d820cb62ef775c770949220953

Address	 0x01cf0e2f2f715450
Balance	 0.00100000
Keys	 1
```

To confirm it all worked, you can get account information by running the following command (please replace the account id with the one you get assigned).

```sh
flow accounts get 0x01cf0e2f2f715450
```

Finally, we can update our `flow.json` by adding this newly generated account to it. We're going to use the long-form `key` definition.

```json
{
  ...,
  "accounts": {
    ...,
    "emulator-artist": {
			"address": "01cf0e2f2f715450",
			"key": {
				"type": "hex",
				"index": 0,
				"signatureAlgorithm": "ECDSA_secp256k1",
				"hashAlgorithm": "SHA3_256",
				"privateKey": "70d4eebade37eabe0a5df1b1664acf25245187068665c529c1d63f0a214dadfa"
			}
		}
  },
  ...
}
```

Please refer to the [docs][2] for more details.
