---
title: UI Harness
description: How to build the UI interface to your smart module.
---

import PageRef from '@components/PageRef'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import YouTube from '@components/YouTube';

# UI Harness

How to build the UI interface to your smart module.

---

## Getting Started

To interact with your smart contract, you'll need to build a UI harness. This is the UI that will be displayed to the user that enables experiment with the functionality of your smart contract. Navigate to the [stories](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/stories) folder to build and edit your UI harness.

![1](/img/content/docs/builderkit/7.png)

:::info Smart Contracts Setup

Haven't written your JavaScript API? See [JavaScript API](javascript-api) before moving forward.

:::

### Helpful Resources

The UI Harness is written using Storybook, an open source tool for building UI components that streamlines UI development, testing, and documentation. This guide assumes you have some knowledge of this tool and you can use the links below to find additional information.

- [Storybook](https://storybook.js.org/)

### Update Example.stories.tsx

The [Example.stories.tsx](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/stories/Example.stories.tsx) contains the code for your UI harness.

```jsx
import { HyperverseProvider } from './utils/Provider';
import { Meta, Story } from '@storybook/react';
// highlight-start
// STEP 1: IMPORT use<Name> RATER THAN useModule
import { useModule } from '../source';
// highlight-end
import { useEvm } from '@decentology/hyperverse-evm/source';
const Button = () => {
   const { connect } = useEvm();
   // highlight-start
   // STEP 2: UPDATE useModule TO use<Name>
   const { factoryContract } = useModule();
   // highlight-end
   return <button onClick={() => connect()}>{factoryContract?.address}</button>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   // highlight-start
   // STEP 3: UPDATE TITLE AND COMPONENT NAME
   title: 'Example/Test1',
   component: Button,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // highlight-end
} as Meta;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args) => (
   // highlight-start
   // STEP 4: UPDATE HyperverseProvider TO MATCH COMPONENT NAME ABOVE
   <HyperverseProvider>
       <Button {...args} />
   </HyperverseProvider>
   // highlight-end
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {};

```

:::info

View an example of the completed **GetBalanceOf.stories.tsx** file for the ERC20 Smart Module [here](https://github.com/decentology/hyperverse-mono/tree/main/packages/hyperverse-evm-erc20/stories)

:::

## Submit Smart Module

You're now ready to submit your smart module to the Hyperverse! Submit a PR to the Hyperverse Monorepo as a new branch including your completed smart module.
