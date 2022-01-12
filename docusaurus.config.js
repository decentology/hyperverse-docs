/** @type {import('@docusaurus/types').DocusaurusConfig} */
const path = require('path');
const math = require('remark-math');
const katex = require('rehype-katex');
const { docs, developers } = require('./sidebars');
const DefaultLocale = 'en';

module.exports = {
    title: "Hyperverse Docs",
    tagline: "Explore the latest documentation, tutorials, code, and updates.",
    url: "https://docs.hyperverse.dev",
    baseUrl: "/",
    trailingSlash: false,
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/color-favicon.png",
    organizationName: "decentology", // Usually your GitHub org/user name.
    projectName: "docs", // Usually your repo name.
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es']
    },
    themes: ['@docusaurus/theme-live-codeblock'],
    scripts: [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/web3/1.6.0/web3.min.js',
            async: true,
        },
    ],
    plugins: [
        require.resolve('docusaurus-plugin-fathom'),
        path.resolve(__dirname, 'src/plugins/aliases.ts'),
    ],
    themeConfig: {
        prism: {
            theme: require('prism-react-renderer/themes/dracula'),
        },
        colorMode: {
            defaultMode: 'dark',
        },
        navbar: {
            title: "Hyperverse Docs",
            logo: {
                alt: "Hyperverse Logo",
                src: "img/color-logo.png",
            },
            items: [
                {
                    "to": "build/introduction",
                    "label": "Build",
                    "position": "left"
                },
                {
                    "to": "discover/introduction",
                    "label": "Discover",
                    "position": "left"
                },
                {
                    "to": "compose/introduction",
                    "label": "Compose",
                    "position": "left"
                },
                {
                    "to": "contribute/introduction",
                    "label": "Contribute",
                    "position": "left"
                },
                {
                    "to": "learn/introduction",
                    "label": "Learn",
                    "position": "left"
                },
                {
                    href: 'https://www.decentology.com/blog',
                    position: 'right',
                    label: "Blog",
                },             
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                //     dropdownItemsAfter: [
                //       {
                //           to: 'https://hyperverse.crowdin.com/',
                //           label: 'Help us translate',
                //       },
                //     ]
                // },
                {
                    href: 'https://github.com/decentology/hyperverse-docs',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        gtag: {
            // You can also use your "G-" Measurement ID here.
            trackingID: 'G-LVFEVMPDFD',
            // Optional fields.
            anonymizeIP: true, // Should IPs be anonymized?
        },
        // algolia: {
        //     appId: 'VTOK77FLR7',
        //     apiKey: 'b295be99cba0b8841827d1c24faae777',
        //     indexName: 'hyperverse',
        //     contextualSearch: true,
        //     debug: false
        // },
        footer: {
            style: "dark",
            links: [{
                    title: "Docs",
                    items: [{
                        label: "Home",
                        to: "/",
                    },
                    {
                        label: "Blog",
                        href: "https://www.decentology.com/blog"
                    },
                    // {
                    //     href: "https://hyperverse.crowdin.com/hyperverse-docs",
                    //     label: "Help translate"
                    // },
                    {
                        label: "GitHub",
                        href: "https://github.com/decentology"
                    },
                ]},
                {
                    title: "Community",
                    items: [
                        {
                            href: "/contribute/introduction",
                            label: "Contribute",
                        },
                        // {
                        //     label: "Forum",
                        //     href: "https://forum.hyperverse.org/",
                        // },
                        {
                            label: "Discord",
                            href: "https://discord.com/invite/uqecGxg",
                        },
                        {
                            label: "Twitter",
                            href: "https://twitter.com/Decentology",
                        },
                        {
                            label: "YouTube",
                            href: "https://www.youtube.com/c/Decentology"
                        },
                    ],
                },
                {
                    title: "About",
                    items: [{
                        label: "Our Story",
                        href: "https://www.decentology.com/about"
                    },
                    {
                        label: "Partners",
                        href: "https://www.decentology.com/partners"
                    },
                    {
                        label: "News",
                        href: "https://www.decentology.com/news"
                    },
                    {
                        label: "Events",
                        href: "https://www.decentology.com/events"
                    }
                ]
                }
            ],
        },
        fathomAnalytics: {
            siteId: 'YHVNQZAL'
        },

    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    editUrl: "https://github.com/decentology/hyperverse-docs/edit/main/",
                    editUrl: ({locale, versionDocsDirPath, docPath}) => {
                        // Link to Crowdin for French docs
                        if (locale !== DefaultLocale) {
                          return `https://hyperverse.crowdin.com/hyperverse-docs/${locale}`;
                        }
                        // Link to Github for English docs
                        return `https://github.com/decentology/hyperverse-docs/edit/main/docs/${docPath}`
                    },
                    routeBasePath: "/",
                    remarkPlugins: [
                        math,
                        [require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}]
                    ],
                    rehypePlugins: [katex],
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                blog: {
                    blogTitle: 'Hyperverse Blog',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    readingTime: ({content, frontMatter, defaultReadingTime}) =>
                        // allows per post reading time override in frontmatter
                        frontMatter.hide_reading_time ? undefined : defaultReadingTime({content, options: {wordsPerMinute: 300}}),
                }
            },
        ],
    ],
    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
        integrity: 'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
        crossorigin: 'anonymous',
    }],
};
