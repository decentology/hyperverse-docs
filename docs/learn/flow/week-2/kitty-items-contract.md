---
title: Kitty Items Contract Overview
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Kitty Items Contract Overview

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="zFtc4QLrxas"/>

<!-- ![Project Overview](images/kitty-items.PNG) -->

The Fast Floward Foundation is built from Kitty Items. I took this project and re-wrote it on DappStarter to give an even better learning experience for you. Specifically, I removed some parts of the contracts, transactions, and scripts so we can build it back up together in quests. I also re-wrote the Marketplace contract and commented the living heck out the code to hopefully make it understandable, although there will still be speed bumps along the way. The following is a summary of the long (i'm so sorry) video that introduces you to each of the 3 contracts. I will not be describing in-depth what all individual resources, structs, etc are in the contract, because there are already extensive comments in the contracts themselves. So, if you have any questions, I encourage you to read the following summary, watch the video, read the comments in the contract, and then ask me in the burning questions channel :D

# Project Contracts

The contracts in the video can be found inside `/packages/dapplib/contracts/Project` within your dApp.

## Kibble

Kibble is a type of Fungible Token that we define in `Kibble.cdc`. You saw an example of Fungible Tokens when you used Flow Token during Week 1. They are represented as a simple `UFix64` and are passed around through `Vault` resources. They are minted by the `Minter` resource. That's all you really need to know for now.

Note that Kibble.cdc implements the FungibleToken contract interfaces, making our Kibble an official FungibleToken. It also serves as a good example of how to set up your own FungibleToken and start experimenting with that on your own :)

Note: We will be making modifications to this contract. It is NOT fully implemented in the code you have. You will complete it during the W2Q3 & W2Q4 quests.

## Kitty Items

A Kitty Item is a Non-Fungible Token (NFT). They are represented by an `NFT` resource and are stored in a `Collection` resource that will lie in each account, very similar to the Collection you saw for `Picture` resources in Week 1. They are minted by the `NFTMinter` resource.

We will refer to Kitty Items and NFTs as the same thing. Also note that the Kitty Items contract implements the NonFungibleToken contract interface. This means that the NFT resource implements NonFungibleToken.INFT, meaning it is officially an NFT by Flow standard. If we wanted to, our Kitty Items could be traded, bought, or sold on any NFT marketplace like OpenSea because of this.

Lastly, similar to how Kibble is a good example for a FungibleToken, Kitty Items serves as a great example for how we might want to construct our own NFT Contracts. We won't be doing that this week, but it might be a good idea to start experimenting with how you'd define your own NFTs called JacobsTheBestTeacherEver just like KittyItems.

## Kitty Items Market

The Kitty Items Market is where users will list their Kitty Items for sale. Each account that wants to put their Kitty Items for sale will store a `SaleCollection` resource in their account. They can then specify a price and the Kitty Item they want to list for sale, allowing any user to purchase from it with Kibble.

It is important to note that the `SaleCollection` does **not** actually store the NFTs that are for sale. They only store the IDs of the NFTs that the owner wants to sale. The NFTs are only removed from the owner's `KittyItems.Collection` once they are bought, in which case the SaleCollection withdraws them from `self.ownerCollection`. The `SaleCollection` also stores the owner's Kibble Vault to deposit a Vault into it when a purchase it made.

# Helpful Overview of DappStarter

DappStarter might be confusing at first. You might be asking... "okay, I'm changing the contracts, but how is this working? What is DappStarter doing behind the scenes to make all of this work?"

We will be answering this question throughout this week so that by the end of Week 2, you will understand how DappStarter ties everything together. For now, you can use this diagram to help you:

<!-- ![DappStarter Overview](images/dappstarter_overview.PNG) -->

Although you may not understand what the DappLib is or even the UI Harness, this will make sense in the upcoming days. You can use this diagram as a reference for now, though.
