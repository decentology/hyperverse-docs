const sidebars = {

  // ######################################
  // Learn 
  // ######################################

  learn: [
    { type: 'doc', label: 'Welcome', id: 'learn/introduction', },
    {
      type: "category",
      label: "Get Started",
      items: [
        { type: 'doc', label: 'Why Hyperverse', id: 'learn/hyperverse/why-hyperverse', },
        { type: 'doc', label: 'How it Works', id: 'learn/hyperverse/how-it-works', },
        { type: 'doc', label: 'Key Concepts', id: 'learn/hyperverse/key-concepts', },
        { type: 'doc', label: 'Technology', id: 'learn/hyperverse/technology', },
        { type: 'doc', label: 'Next Steps', id: 'learn/hyperverse/next-steps', },
      ],
    },
    {
      type: "category",
      label: "Web3 Basics",
      items: [
        { type: 'doc', label: 'Web3 Overview', id: 'learn/web3/web3-overview', },
        { type: 'doc', label: 'Web2 vs Web3', id: 'learn/web3/web2-vs-web3', },
        { type: 'doc', label: 'Web3 Concepts', id: 'learn/web3/web3-concepts', },
        { type: 'doc', label: 'Web3 Tools', id: 'learn/web3/web3-tools', },
        { type: 'doc', label: 'Future of Web3', id: 'learn/web3/future-of-web3', },
        { type: 'doc', label: 'Web3 Resources', id: 'learn/web3/web3-resources', },
      ],
    },
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        { type: 'doc', label: 'Blockchains', id: 'learn/blockchain/introduction', },
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
            { type: 'doc', label: 'Programming Environment', id: 'learn/blockchain/flow/programming-environment', },
            { type: 'doc', label: 'Cadence Syntax', id: 'learn/blockchain/flow/cadence-syntax', },
            { type: 'doc', label: 'Cadence Functions', id: 'learn/blockchain/flow/cadence-functions', },
            { type: 'doc', label: 'Cadence Deep Dive', id: 'learn/blockchain/flow/cadence-deep-dive', },
            { type: 'doc', label: 'Flow Playground', id: 'learn/blockchain/flow/flow-playground', },
            { type: 'doc', label: 'Flow Emulator', id: 'learn/blockchain/flow/flow-emulator', },
            { type: 'doc', label: 'Deploying Contracts', id: 'learn/blockchain/flow/deploying-contracts', },
            { type: 'doc', label: 'Flow Client Library', id: 'learn/blockchain/flow/flow-client-library', },
            { type: 'doc', label: 'Flow NFT Marketplace', id: 'learn/blockchain/flow/flow-nft-marketplace', },
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
    { type: 'doc', label: 'Terminology', id: 'learn/terminology', },
    { type: 'doc', label: 'Support', id: 'learn/support', },
    { type: 'doc', label: 'FAQ', id: 'learn/faq', },
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
    { type: 'doc', label: 'Code of Conduct', id: 'contribute/code-of-conduct', },
  ],  
};

module.exports = sidebars;
