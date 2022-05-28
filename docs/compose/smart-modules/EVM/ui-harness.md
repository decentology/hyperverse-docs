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

To interact with your smart contract, you'll need to build a UI harness. This is the UI that will be displayed to the user that enables experiment with the functionality of your smart contract. It's written using [Storybook](https://storybook.js.org/), a nopen source tool for buildinng UI components. Navigate to the [stories](https://github.com/decentology/hyperverse-evm-builderkit/tree/main/stories) folder to build and edit your UI harness.

![1](/img/content/docs/builderkit/7.png)

:::info Smart Contracts Setup

Haven't written your JavaScript API? See [JavaScript API](javascript-api) before moving forward.

:::

### Update Example.stories.tsx

The [Example.stories.tsx](https://github.com/decentology/hyperverse-evm-builderkit/blob/main/stories/Example.stories.tsx) contains the code for your UI harness.

```jsx
import { HyperverseProvider } from './utils/Provider';
import { Meta, Story } from '@storybook/react';
// highlight-start
// Update occurrences of module to match smart module
import { useModule } from '../source';
// highlight-end
import { useEvm } from '@decentology/hyperverse-evm/source';
const Button = () => {
   const { connect } = useEvm();
   // highlight-start
   // Update occurrences of module to match smart module
   const { factoryContract } = useModule();
   // highlight-end
   return <button onClick={() => connect()}>{factoryContract?.address}</button>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   // highlight-start
   // Update title and component name
   title: 'Example/Test1',
   component: Button,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // highlight-end
} as Meta;

// highlight-start
// Add additional components as needed to build your UI harness
// highlight-end


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story = (args) => (
   // highlight-start
   // Add components as needed to match those listed above
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
