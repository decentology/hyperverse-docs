---
title: Playing with Cadence
description: An open, decentralized, blockchain-agnostic marketplace for composable smart contracts
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# Playing with Cadence

An open, decentralized, blockchain-agnostic marketplace for composable smart contracts

---

<YouTube videoId="wOBShK7z-G0"/>

# Playground

With everything that we now know, we can start playing around with Cadence. Let's create some basic structures and functionality that will allow us to eventually build an app where we can draw Non-Fungible Tokens into existance!

Our goal is to be able to draw on a 5x5 grid by turning pixels on and off. For example, if we wanted to draw the letter **X**, we could do it this way (`.` represents _off_ pixels, `*` represents _on_ pixels).

```
*...*
.*.*.
..*..
.*.*.
*...*
```

We can create a Cadence structure to store our pixel canvases. It's a lot easier to store a single and serialize a string instead of a two-dimensional array, so that's what we'll use for our pixels.

```cadence
pub struct Canvas {

  pub let width: UInt8
  pub let height: UInt8
  pub let pixels: String

  init(width: UInt8, height: UInt8, pixels: String) {
    self.width = width
    self.height = height
    // The following pixels
    // 123
    // 456
    // 789
    // should be serialized as
    // 123456789
    self.pixels = pixels
  }
}
```

However, we still want to declare our drawings in a legible way, so we'll use string arrays, but now, instead of `.` we'll use ` ` to represent _off_ pixels.

```cadence
let pixelsX = [
  "*   *",
  " * * ",
  "  *  ",
  " * * ",
  "*   *"
]
```

Unfortunately, we can't pass our array into the `Canvas` initializer, for that we need a new function.

```cadence
pub fun serializeStringArray(_ lines: [String]): String {
  var buffer = ""
  for line in lines {
    buffer = buffer.concat(line)
  }

  return buffer
}
```

This will convert an array of strings into a string that our Canvas structure will accept.

```cadence
pub fun main() {
  let pixelsX = [
    "*   *",
    " * * ",
    "  *  ",
    " * * ",
    "*   *"
  ]
  let letterX = Canvas(
    width: 5,
    height: 5,
    pixels: serializeStringArray(pixelsX)
  )
}
```

We want to provide some tangible ownership to our pixel artists, so let's provide functionality to print a `Canvas` as a `Picture` resource. To do this, we can simply wrap the `Canvas` structure in a resource.

```cadence
pub resource Picture {
  pub let canvas: Canvas

  init(canvas: Canvas) {
    self.canvas = canvas
  }
}
```

Now, we can use it along with `Canvas`.

```cadence
pub fun main() {
  let pixelsX = [
    "*   *",
    " * * ",
    "  *  ",
    " * * ",
    "*   *"
  ]
  let canvasX = Canvas(
    width: 5,
    height: 5,
    pixels: serializeStringArray(pixelsX)
  )
  let letterX <- create Picture(canvas: canvasX)
  log(letterX.canvas)
  destroy letterX
}
```

By now, you should start getting ideas for all the ways you could improve on this and add more functionality. Take some time to explore the following quests to see if you can find a solution.

# Quests

For day one, we have two quests: `W1Q1` and `W1Q2`. If you need assistance while solving these, feel free to ask questions on Discord in the **burning-questions** channel.

- `W1Q1` – Frame it!

Write a function that displays a canvas in a frame.

```cadence
pub fun display(canvas: Canvas)
```

```
"+-----+"
"|*   *|"
"| * * |"
"|  *  |"
"| * * |"
"|*   *|"
"+-----+"
```

- `W1Q2` – Uniques

Create a resource that prints `Picture`'s but only once for each unique 5x5 `Canvas`.

```cadence
pub resource Printer {
  pub fun print(canvas: Canvas): @Picture?
}
```

[1]: https://docs.onflow.org/
[2]: https://docs.onflow.org/flow-cli/install/
[3]: https://docs.onflow.org/vscode-extension/
[4]: https://docs.onflow.org/cadence/language/
