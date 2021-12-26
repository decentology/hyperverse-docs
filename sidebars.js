const sidebars = {

  // ######################################
  // basics 
  // ######################################

  basics: [
    { type: 'doc', label: 'Welcome', id: 'basics/welcome', },
    { type: 'doc', label: 'Quickstart', id: 'basics/quickstart', },
    { type: 'doc', label: 'How it Works', id: 'basics/how-it-works', },
    { type: 'doc', label: 'Key Concepts', id: 'basics/key-concepts', },
    { type: 'doc', label: 'Technology', id: 'basics/technology', },
    { type: 'doc', label: 'Glossary', id: 'basics/glossary', },
    { type: 'doc', label: 'FAQ', id: 'basics/faq', },
  ],

  // ######################################
  // Compose 
  // ######################################

  compose: [
        { type: 'doc', label: 'Introduction', id: 'compose/introduction', } ,
        {
          type: "category",
          label: "Choose your Role",
          items: [
            { type: 'doc', label: 'Overview', id: 'compose/role/overview', } ,
            { type: 'doc', label: 'Develop', id: 'compose/role/develop/overview', } ,
            { type: 'doc', label: 'Review', id: 'compose/role/review/overview', } ,
            { type: 'doc', label: 'Audit', id: 'compose/role/audit/overview', } ,
            { type: 'doc', label: 'Stake', id: 'compose/role/stake/overview', } ,
          ],
        },
        {
          type: "category",
          label: "Smart Modules",
          items: [
            { type: 'doc', label: 'Overview', id: 'compose/smart-modules/overview', },
            { type: 'doc', label: 'Specifications', id: 'compose/smart-modules/specifications', },
            { type: 'doc', label: 'Smart Contracts', id: 'compose/smart-modules/smart-contracts', },
            { type: 'doc', label: 'Documentation', id: 'compose/smart-modules/documentation', },
            { type: 'doc', label: 'Code Samples', id: 'compose/smart-modules/code-samples', },
            { type: 'doc', label: 'UI Harness', id: 'compose/smart-modules/ui-harness', },            
            { type: 'doc', label: 'Unit Tests', id: 'compose/smart-modules/unit-tests', },            
            
          ],
        },
        {
          type: "category",
          label: "Blockchains",
          items: [
            { type: 'doc', label: 'Overview', id: 'compose/blockchain/overview', },
            { type: 'doc', label: 'Algorand', id: 'compose/blockchain/algorand', },
            { type: 'doc', label: 'Conflux', id: 'compose/blockchain/conflux', },
            { type: 'doc', label: 'Ethereum', id: 'compose/blockchain/ethereum', },
            { type: 'doc', label: 'Flow', id: 'compose/blockchain/flow', },
            { type: 'doc', label: 'Near', id: 'compose/blockchain/near', },
            { type: 'doc', label: 'Polygon', id: 'compose/blockchain/polygon', },
            { type: 'doc', label: 'Solana', id: 'compose/blockchain/solana', },
          ],
        },  
  ],

  // ######################################
  // Discover 
  // ######################################
  
  discover: [ 
    { type: 'doc', label: 'Introduction', id: 'discover/introduction', },
    {
      type: "category",
      label: "Modules",
      items: [
        { type: 'doc', label: 'Overview', id: 'module/overview', },
        { type: 'doc', label: 'Hello World', id: 'module/helloworld', },
        { type: 'doc', label: 'Marketplace', id: 'module/marketplace', },
        { type: 'doc', label: 'Rewards', id: 'module/rewards', },
        { type: 'doc', label: 'Simple NFT Marketplace', id: 'module/simpleNFT-marketplace', },
        { type: 'doc', label: 'Simple NFT', id: 'module/simpleNFT', },
        { type: 'doc', label: 'Simple Token', id: 'module/simpleToken', },
        { type: 'doc', label: 'Tribes', id: 'module/tribes', },
      ],
    },
  ],

  // ######################################
  // Build 
  // ######################################
  
  build: [  
    { type: 'doc', label: 'Introduction', id: 'build/introduction' },
    // { type: 'doc', label: 'Quickstart', id: 'build/quickstart' },
    {
      type: "category",
      label: "Local Environment",
      items: [
        { type: 'doc', label: 'Overview', id: 'build/local-environment/overview', },
        { type: 'doc', label: 'Using Mac', id: 'build/local-environment/using-mac', },
        { type: 'doc', label: 'Using Windows', id: 'build/local-environment/using-windows', },
      ],
    },
    {
      type: "category",
      label: "Build a dApp",
      items: [
        { type: 'doc', label: 'Overview', id: 'build/dapp/overview', },
        { type: 'doc', label: 'Run your dApp', id: 'build/dapp/run-your-dapp' },
        { type: 'doc', label: 'Modify the Client', id: 'build/dapp/modify-the-client' },
        { type: 'doc', label: 'Call Functions', id: 'build/dapp/call-functions' },
      ],
    },
  ], 

  // ######################################
  // learn 
  // ######################################
  
  learn: [  
      { type: 'doc', label: 'Introduction', id: 'learn/introduction', },
      {
        type: "category",
        label: "Web3",
        items: [
          { type: 'doc', label: 'Overview', id: 'learn/web3/overview', },
          {
            type: "category",
            label: "Basic",
            items: [
              { type: 'doc', label: 'Overview', id: 'learn/web3/basic/overview', },
              { type: 'doc', label: 'Welcome to Web3', id: 'learn/web3/basic/web3-overview', },
              { type: 'doc', label: 'Web2 vs Web3', id: 'learn/web3/basic/web2-vs-web3', },
              { type: 'doc', label: 'Web3 Concepts', id: 'learn/web3/basic/web3-concepts', },
              { type: 'doc', label: 'Future of Web3', id: 'learn/web3/basic/future-of-web3', },
              { type: 'doc', label: 'Web3 Tools', id: 'learn/web3/basic/web3-tools', },
              { type: 'doc', label: 'Web3 Resources', id: 'learn/web3/basic/web3-resources', },
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Blockchain",
        items: [
          { type: 'doc', label: 'Overview', id: 'learn/blockchain/overview', },
          {
            type: "category",
            label: "Algorand",
            items: [
              { type: 'doc', label: 'Welcome to Algorand', id: 'learn/blockchain/algorand/welcome-to-algorand', },
            ],
          },
          {
            type: "category",
            label: "Conflux",
            items: [
              { type: 'doc', label: 'Welcome to Conflux', id: 'learn/blockchain/conflux/welcome-to-conflux', },
            ],
          },
          {
            type: "category",
            label: "Ethereum",
            items: [
              { type: 'doc', label: 'Welcome to Ethereum', id: 'learn/blockchain/ethereum/welcome-to-ethereum', },
            ],
          },
          {
            type: "category",
            label: "Flow",
            items: [
              { type: 'doc', label: 'Welcome to Flow', id: 'learn/blockchain/flow/welcome-to-flow', },
              {
                type: "category",
                label: "Basic",
                items: [
                  { type: 'doc', label: 'Overview', id: 'learn/blockchain/flow/week-1/introduction', },
                  { type: 'doc', label: 'Environment Setup', id: 'learn/blockchain/flow/week-1/environment-setup', },
                  { type: 'doc', label: 'Cadence Syntax', id: 'learn/blockchain/flow/week-1/cadence-syntax', },
                  { type: 'doc', label: 'Cadence Functions', id: 'learn/blockchain/flow/week-1/cadence-functions', },
                  { type: 'doc', label: 'Playing with Cadence', id: 'learn/blockchain/flow/week-1/playing-with-cadence', },
                  { type: 'doc', label: 'Flow Playground', id: 'learn/blockchain/flow/week-1/flow-playground', },
                  { type: 'doc', label: 'Flow Emulator', id: 'learn/blockchain/flow/week-1/flow-emulator', },
                  { type: 'doc', label: 'Deploying Contracts', id: 'learn/blockchain/flow/week-1/deploying-contracts', },
                  { type: 'doc', label: 'Flow Client Library', id: 'learn/blockchain/flow/week-1/flow-client-library', },
                  { type: 'doc', label: 'Flow NFT Marketplace', id: 'learn/blockchain/flow/week-1/flow-nft-marketplace', },
                  { type: 'doc', label: 'Review', id: 'learn/blockchain/flow/week-1/lesson-review', },
                ],
              },
              {
                type: "category",
                label: "Intermediate",
                items: [
                  { type: 'doc', label: 'Overview', id: 'learn/blockchain/flow/week-2/introduction', },
                  { type: 'doc', label: 'Access Control', id: 'learn/blockchain/flow/week-2/access-control', },
                  { type: 'doc', label: 'Contract Interfaces', id: 'learn/blockchain/flow/week-2/contract-interfaces', },
                  { type: 'doc', label: 'Fast Floward Foundation', id: 'learn/blockchain/flow/week-2/fast-floward-foundation', },
                  { type: 'doc', label: 'DappStarter Architecture', id: 'learn/blockchain/flow/week-2/dappstarter-architecture', },
                  { type: 'doc', label: 'Kitty Items Contract', id: 'learn/blockchain/flow/week-2/kitty-items-contract', },
                  { type: 'doc', label: 'Intro to Dapplib', id: 'learn/blockchain/flow/week-2/dapplib-transactions-scripts', },
                  { type: 'doc', label: 'DappStarter Client', id: 'learn/blockchain/flow/week-2/dappstarter-client', },
                  { type: 'doc', label: 'DappStarter Tests', id: 'learn/blockchain/flow/week-2/dappstarter-tests', },
                  { type: 'doc', label: 'Final Quest', id: 'learn/blockchain/flow/week-2/day-5-quest', },
                  { type: 'doc', label: 'Review', id: 'learn/blockchain/flow/week-2/lesson-review', },
                ],
              },
              {
                type: "category",
                label: "Advanced",
                items: [
                  { type: 'doc', label: 'Overview', id: 'learn/blockchain/flow/week-3/introduction', },
                  { type: 'doc', label: 'Composability', id: 'learn/blockchain/flow/week-3/smart-contract-composability', },
                  { type: 'doc', label: 'Day 2 Office Hours', id: 'learn/blockchain/flow/week-3/day-2-office-hours', },
                  { type: 'doc', label: 'Day 3 Office Hours', id: 'learn/blockchain/flow/week-3/day-3-office-hours', },
                  { type: 'doc', label: 'Day 4 Office Hours', id: 'learn/blockchain/flow/week-3/day-4-office-hours', },
                ],
              },
            ],
          },
          {
            type: "category",
            label: "Near",
            items: [
              { type: 'doc', label: 'Welcome to Near', id: 'learn/blockchain/near/welcome-to-near', },
            ],
          },
          {
            type: "category",
            label: "Polygon",
            items: [
              { type: 'doc', label: 'Welcome to Polygon', id: 'learn/blockchain/polygon/welcome-to-polygon', },
            ],
          },
          {
            type: "category",
            label: "Solana",
            items: [
              { type: 'doc', label: 'Welcome to Solana', id: 'learn/blockchain/solana/welcome-to-solana', },
            ],
        },
      ],
    },
    {
      type: "category",
      label: "Hyperverse",
      items: [
        { type: 'doc', label: 'Overview', id: 'learn/hyperverse/basic/overview', },
        {
          type: "category",
          label: "Basic",
          items: [
            { type: 'doc', label: 'Overview', id: 'learn/hyperverse/intermediate/overview', },
            // { type: 'doc', label: 'Composability', id: 'compose/smart-modules/specifications', },
            // { type: 'doc', label: 'Smart Modules', id: 'compose/smart-modules/specifications', },
          ],
        },
        {
          type: "category",
          label: "Intermediate",
          items: [
            { type: 'doc', label: 'Overview', id: 'learn/hyperverse/intermediate/overview', },
            // { type: 'doc', label: 'Specifications', id: 'compose/smart-modules/specifications', },
            // { type: 'doc', label: 'Smart Contracts', id: 'compose/smart-modules/smart-contracts', },
            // { type: 'doc', label: 'Documentation', id: 'compose/smart-modules/documentation', },
            // { type: 'doc', label: 'Code Samples', id: 'compose/smart-modules/code-samples', },
            // { type: 'doc', label: 'UI Harness', id: 'compose/smart-modules/ui-harness', },            
            // { type: 'doc', label: 'Unit Tests', id: 'compose/smart-modules/unit-tests', },  
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            { type: 'doc', label: 'Overview', id: 'learn/hyperverse/advanced/overview', },
          ],
        },
      ],
    },
  ], 

  // ######################################
  // Contribute 
  // ######################################

  contribute: [ 
    { type: 'doc', label: 'Introduction', id: 'contribute/introduction', },
    {
      type: "category",
      label: "Ambassadors",
      items: [
        { type: 'doc', label: 'Overview', id: 'contribute/ambassadors/overview', },
        { type: 'doc', label: 'Content Creators', id: 'contribute/ambassadors/content-creators', },
        { type: 'doc', label: 'Technical Writers', id: 'contribute/ambassadors/technical-writers', },
        { type: 'doc', label: 'Developers', id: 'contribute/ambassadors/developers', },
      ],
    },
    {
      type: "category",
      label: "Events",
      items: [
        { type: 'doc', label: 'Overview', id: 'contribute/events/overview', },
        { type: 'doc', label: 'Hackathons', id: 'contribute/events/hackathons', },
      ],
    },
    { type: 'doc', label: 'Bounty Program', id: 'contribute/bounty-program', } ,
    { type: 'doc', label: 'Code of Conduct', id: 'learn/blockchain/flow/code-of-conduct', },
  ],  
};

module.exports = sidebars;
