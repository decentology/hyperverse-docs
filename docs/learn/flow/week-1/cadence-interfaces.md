---
title: Cadence Interfaces
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Cadence Interfaces

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="H5-RkG0oj_s"/>

## Cadence Interfaces

Day 4 LocalArtist contract contained a new function called `withdraw`, it allows `Picture` withdrawal from `Collection` resources. Creating a public **capability** with such a function would be terrible – everyone could withdraw pictures from your collection. Thankfully, capabilities have this wonderful feature where you can choose how much of a type's functionality you want to expose.

When you create a capability by calling `link` you provide the capability type.

```cadence
account.link<&LocalArtist.Collection>(
  /public/LocalArtistCollection,
  target: /storage/LocalArtistCollection
)
```

That's good enough if we have no functions associated with that type that are dangerous. But after we added `withdraw`, we must create our capability differently. Here's how.

First, we create an `interface` that defines a set of fields and functions. Note, this is a `resource` interface, but you can also have structure and contract interfaces. Then we modify our resource to note that it _implements_ the `PictureReceiver` interface. Of course, we must also implement the fields and functions required by the interface.

```cadence
pub resource interface PictureReceiver {
  pub fun deposit(picture: @Picture)
  pub fun getCanvases(): [Canvas]
}
pub resource Collection: PictureReceiver {
  // ...
  pub fun deposit(picture: @Picture) { /* ... */ }
  pub fun getCanvases(): [Canvas] { /* ... */ }
  // ...
}
```

With this setup, we can proceed to use `PictureReceiver` when creating our public capabilities.

```cadence
account.link<&{LocalArtist.PictureReceiver}>(
  /public/LocalArtistPictureReceiver,
  target: /storage/LocalArtistPictureCollection
)
```

Now, whenever anyone interacts with the resource at `/public/LocalArtistPictureReceiver`, it will only provide access to `deposit()` and `getCanvases()`. And this way, we can stay secure in knowing that only the owner of this account has the ability to withdraw Pictures from their collection.

Here's the full `Greeting` contract from the video.

```cadence
pub contract Hello {
  pub resource interface GreetingLimited {
    pub fun getGreeting(): String
  }
  pub resource Greeting: GreetingLimited {
    pub var greeting: String
    pub init(greeting: String) {
      self.greeting = greeting
    }
    pub fun getGreeting(): String {
      return self.greeting
    }
    pub fun setGreeting(_ greeting: String) {
      self.greeting = greeting
    }
  }

  init() {
    self.account.save<@Greeting>(
      <- create Greeting(greeting: "Hi, FastFloward!"),
      to: /storage/Greeting
    )
    self.account.link<&{GreetingLimited}>(
      /public/Greeting,
      target: /storage/Greeting
    )

    // This fails.
    let greeting = self.account
      .getCapability(/public/Greeting)
      .borrow<&Greeting>()
      ?? panic("I can't!")

    // This works.
    let greetingGood = self.account
      .getCapability(/public/Greeting)
      .borrow<&{GreetingLimited}>()
      ?? panic("I really should...")

    greeting.setGreeting("Bye!")
  }
}
```

To learn more about [capability based access control][3] and [interfaces][4], please visit the official docs.
