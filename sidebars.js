const sidebars = {

  // ######################################
  // basics 
  // ######################################

  basics: [
    { type: 'doc', label: 'Introduction', id: 'basics/introduction', },
    {
      type: "category",
      label: "Get Started",
      items: [
        { type: 'doc', label: 'Why Hyperverse', id: 'basics/hyperverse/why-hyperverse', },
        { type: 'doc', label: 'How it Works', id: 'basics/hyperverse/how-it-works', },
        { type: 'doc', label: 'Key Concepts', id: 'basics/hyperverse/key-concepts', },
        { type: 'doc', label: 'Technology', id: 'basics/hyperverse/technology', },
        { type: 'doc', label: 'Next Steps', id: 'basics/hyperverse/next-steps', },
      ],
    },
    {
      type: "category",
      label: "Web3 Basics",
      items: [
        { type: 'doc', label: 'Introduction to Web3', id: 'basics/web3/web3-overview', },
        { type: 'doc', label: 'Web2 vs Web3', id: 'basics/web3/web2-vs-web3', },
        { type: 'doc', label: 'Web3 Concepts', id: 'basics/web3/web3-concepts', },
        { type: 'doc', label: 'Future of Web3', id: 'basics/web3/future-of-web3', },
        { type: 'doc', label: 'Web3 Tools', id: 'basics/web3/web3-tools', },
        { type: 'doc', label: 'Web3 Resources', id: 'basics/web3/web3-resources', },
      ],
    },
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        { type: 'doc', label: 'Introduction to Blockchain', id: 'basics/blockchain/overview', },
        { type: 'doc', label: 'Algorand', id: 'basics/blockchain/algorand', },
        { type: 'doc', label: 'Conflux', id: 'basics/blockchain/conflux', },
        { type: 'doc', label: 'Ethereum', id: 'basics/blockchain/ethereum', },
        { type: 'doc', label: 'Flow', id: 'basics/blockchain/flow', },
        { type: 'doc', label: 'Near', id: 'basics/blockchain/near', },
        { type: 'doc', label: 'Polygon', id: 'basics/blockchain/polygon', },
        { type: 'doc', label: 'Solana', id: 'basics/blockchain/solana', },
      ],
    },
    { type: 'doc', label: 'Terminology', id: 'basics/terminology', },
    { type: 'doc', label: 'Support', id: 'basics/support', },
    { type: 'doc', label: 'FAQ', id: 'basics/faq', },
  ],

  // ######################################
  // Compose 
  // ######################################

  compose: [
        { type: 'doc', label: 'Introduction', id: 'compose/overview', } ,
        {
          type: "category",
          label: "Smart Modules",
          items: [
            { type: 'doc', label: 'Specifications', id: 'compose/smart-modules/specifications', },
            { type: 'doc', label: 'Smart Contracts', id: 'compose/smart-modules/smart-contracts', },
            { type: 'doc', label: 'Unit Tests', id: 'compose/smart-modules/unit-tests', },
            { type: 'doc', label: 'UI Harness', id: 'compose/smart-modules/ui-harness', },
            { type: 'doc', label: 'Documentation', id: 'compose/smart-modules/documentation', },
            { type: 'doc', label: 'Code Samples', id: 'compose/smart-modules/code-samples', },
          ],
        },
        { type: 'doc', label: 'Develop', id: 'compose/develop/overview', } ,
        { type: 'doc', label: 'Review', id: 'compose/review/overview', } ,
        { type: 'doc', label: 'Audit', id: 'compose/audit/overview', } ,
        { type: 'doc', label: 'Stake', id: 'compose/stake/overview', } ,
  ],

  // ######################################
  // Discover 
  // ######################################
  
  discover: [ 
    { type: 'doc', label: 'Introduction', id: 'discover/overview', },
    { type: 'doc', label: 'Hello World', id: 'module/helloworld', },
    { type: 'doc', label: 'Marketplace', id: 'module/marketplace', },
    { type: 'doc', label: 'Rewards', id: 'module/rewards', },
    { type: 'doc', label: 'Simple NFT Marketplace', id: 'module/simpleNFT-marketplace', },
    { type: 'doc', label: 'Simple NFT', id: 'module/simpleNFT', },
    { type: 'doc', label: 'Simple Token', id: 'module/simpleToken', },
    { type: 'doc', label: 'Tribes', id: 'module/tribes', },
  ],

  // ######################################
  // Build 
  // ######################################
  
  build: [  
    { type: 'doc', label: 'Introduction', id: 'build/overview' },
    { type: 'doc', label: 'Quickstart', id: 'build/quickstart' },
    {
      type: "category",
      label: "Local Environment",
      items: [
        { type: 'doc', label: 'Using Mac', id: 'build/local-environment/using-mac', },
        { type: 'doc', label: 'Using Windows', id: 'build/local-environment/using-windows', },
      ],
    },
    {
      type: "category",
      label: "Build a dApp",
      items: [
        { type: 'doc', label: 'Run your dApp', id: 'build/build-a-dapp/run-your-dapp' },
        { type: 'doc', label: 'Modify the Client', id: 'build/build-a-dapp/modify-the-client' },
        { type: 'doc', label: 'Call Functions', id: 'build/build-a-dapp/call-functions' },
      ],
    },
  ], 

  // ######################################
  // learn 
  // ######################################
  
  learn: [  
      { type: 'doc', label: 'Introduction', id: 'learn/overview', },
      {
        type: "category",
        label: "Algorand",
        items: [
          { type: 'doc', label: 'Welcome to Algorand', id: 'learn/algorand/welcome-to-algorand', },
        ],
      },
      {
        type: "category",
        label: "Conflux",
        items: [
          { type: 'doc', label: 'Welcome to Conflux', id: 'learn/conflux/welcome-to-conflux', },
        ],
      },
      {
        type: "category",
        label: "Ethereum",
        items: [
          { type: 'doc', label: 'Welcome to Ethereum', id: 'learn/ethereum/welcome-to-ethereum', },
        ],
      },
      {
        type: "category",
        label: "Flow",
        items: [
          { type: 'doc', label: 'Welcome to Flow', id: 'learn/flow/welcome-to-flow', },
          {
            type: "category",
            label: "Learn the Basics",
            items: [
              { type: 'doc', label: 'Introduction', id: 'learn/flow/week-1/introduction', },
              { type: 'doc', label: 'Environment Setup', id: 'learn/flow/week-1/environment-setup', },
              { type: 'doc', label: 'Cadence Syntax', id: 'learn/flow/week-1/cadence-syntax', },
              { type: 'doc', label: 'Cadence Functions', id: 'learn/flow/week-1/cadence-functions', },
              { type: 'doc', label: 'Playing with Cadence', id: 'learn/flow/week-1/playing-with-cadence', },
              { type: 'doc', label: 'Flow Playground', id: 'learn/flow/week-1/flow-playground', },
              { type: 'doc', label: 'Flow Emulator', id: 'learn/flow/week-1/flow-emulator', },
              { type: 'doc', label: 'Deploying Contracts', id: 'learn/flow/week-1/deploying-contracts', },
              { type: 'doc', label: 'Flow Client Library', id: 'learn/flow/week-1/flow-client-library', },
              { type: 'doc', label: 'Flow NFT Marketplace', id: 'learn/flow/week-1/flow-nft-marketplace', },
              { type: 'doc', label: 'Review', id: 'learn/flow/week-1/lesson-review', },
            ],
          },
          {
            type: "category",
            label: "Intermediate Topics",
            items: [
              { type: 'doc', label: 'Introduction', id: 'learn/flow/week-2/introduction', },
              { type: 'doc', label: 'Access Control', id: 'learn/flow/week-2/access-control', },
              { type: 'doc', label: 'Contract Interfaces', id: 'learn/flow/week-2/contract-interfaces', },
              { type: 'doc', label: 'Fast Floward Foundation', id: 'learn/flow/week-2/fast-floward-foundation', },
              { type: 'doc', label: 'DappStarter Architecture', id: 'learn/flow/week-2/dappstarter-architecture', },
              { type: 'doc', label: 'Kitty Items Contract', id: 'learn/flow/week-2/kitty-items-contract', },
              { type: 'doc', label: 'Intro to Dapplib', id: 'learn/flow/week-2/dapplib-transactions-scripts', },
              { type: 'doc', label: 'DappStarter Client', id: 'learn/flow/week-2/dappstarter-client', },
              { type: 'doc', label: 'DappStarter Tests', id: 'learn/flow/week-2/dappstarter-tests', },
              { type: 'doc', label: 'Final Quest', id: 'learn/flow/week-2/day-5-quest', },
              { type: 'doc', label: 'Review', id: 'learn/flow/week-2/lesson-review', },
            ],
          },
          {
            type: "category",
            label: "Advanced Topics",
            items: [
              { type: 'doc', label: 'Introduction', id: 'learn/flow/week-3/introduction', },
              { type: 'doc', label: 'Composability', id: 'learn/flow/week-3/smart-contract-composability', },
              { type: 'doc', label: 'Day 2 Office Hours', id: 'learn/flow/week-3/day-2-office-hours', },
              { type: 'doc', label: 'Day 3 Office Hours', id: 'learn/flow/week-3/day-3-office-hours', },
              { type: 'doc', label: 'Day 4 Office Hours', id: 'learn/flow/week-3/day-4-office-hours', },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Near",
        items: [
          { type: 'doc', label: 'Welcome to Near', id: 'learn/near/welcome-to-near', },
        ],
      },
      {
        type: "category",
        label: "Polygon",
        items: [
          { type: 'doc', label: 'Welcome to Polygon', id: 'learn/polygon/welcome-to-polygon', },
        ],
      },
      {
        type: "category",
        label: "Solana",
        items: [
          { type: 'doc', label: 'Welcome to Solana', id: 'learn/solana/welcome-to-solana', },
        ],
    },
  ], 

  // ######################################
  // Contribute 
  // ######################################

  community: [ 
    { type: 'doc', label: 'Introduction', id: 'contribute/overview', },
    {
      type: "category",
      label: "Ambassadors",
      items: [
        { type: 'doc', label: 'Content Creators', id: 'contribute/ambassadors/content-creators', },
        { type: 'doc', label: 'Technical Writers', id: 'contribute/ambassadors/technical-writers', },
        { type: 'doc', label: 'Developers', id: 'contribute/ambassadors/developers', },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        { type: 'doc', label: 'Events', id: 'contribute/community/events', },
        { type: 'doc', label: 'Hackathons', id: 'contribute/community/hackathons', },
      ],
    },
    { type: 'doc', label: 'Bounty Program', id: 'contribute/bounty-program', } ,
    { type: 'doc', label: 'Code of Conduct', id: 'learn/flow/code-of-conduct', },
  ],  
};

module.exports = sidebars;
