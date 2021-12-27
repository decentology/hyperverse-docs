---
title: Flow NFT Marketplace
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Flow NFT Marketplace

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="XN_izf6RFks"/>

## Trading Pictures

We're ready to take our LocalArtist app to the next level by implementing Picture trading! The `day5` folder contains updated code for the user interface as well as a new contract – `LocalArtistMarket`. That's right, we're now interacting with more than one smart contract. In fact, by time we're done with the quest, we will have interacted with 3 smart contracts. That's awesome!

I'll do a quick walkthrough of the project, and I decided to do it on video, so please make sure to watch the YouTube video for FastFloward Day 5. I'll meet you there!

## Quests

This is it – once you're done with this final quest, you're officially a decentralized app developer, congratulations! So, what's the quest? Well, you'll have to implement a couple of transactions to finalize Picture trading functionality. Here goes...

- `W1Q9` – Buy Low, Sell High

Modify `/src/context/Flow.jsx` by implementing these methods.

```
withdrawListing // call LocalArtistMarket.withdraw()
buy // call LocalArtistMarket.buy()
```

Also, take a look at `/src/pages/Trade/Trade.jsx` to see if you need to uncomment anything...

And with that, you've got yourself an online NFT marketplace!

It's been a absolute privilege to guide you on your journey to becoming a decentralized app developer. Week 2 and 3 are coming up, and Jacob along with Nik and the rest of the team at Decentology have incredible content waiting for you. So strap in for the rest of the ride, the fun has just begun!

[1]: https://flow-view-source.com/testnet/account/0xda65073324040264
[2]: https://testnet-faucet.onflow.org/
[3]: https://docs.onflow.org/cadence/language/capability-based-access-control/
[4]: https://docs.onflow.org/cadence/language/interfaces/

:::info Office Hours

[Office Hours #5](https://www.youtube.com/watch?v=Bnaq37xiTmE)

:::
