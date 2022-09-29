# Improve the Docs

Help improve the Hyperverse documentation.

---

## Background

All of the Hyperverse documentation is in Markdown located in the `docs` directory. The site uses [Docusaurus](hhttps://docusaurus.io/) to generate the documentation pages. Markdown is what this file and GitHub README.md files are written in. If you need some help with Markdown, [please see this Markdown cheatsheet.](https://www.markdownguide.org/cheat-sheet/).

:::info Hyperverse ❤️ Feedback

If you have any ideas to improve the docs please make an [issue](https://github.com/decentology/hyperverse-docs/issues), discuss in the [forum](https://forum.decentology.com/), or [submit a PR](https://github.com/decentology/hyperverse-docs/pulls).

:::

## Steps to GitHub PRs

[Learn the steps to create a pull request here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

For hot fixes, like typos, broken links or recommendations, please use the following steps:

1. Please name your branch `fix/[THING YOU FIXED HERE]`
2. In the subject line of your Pull Request, start with the docs you're targeting in brackets. For example: `[basics/contribute] Fixes link in Line #10` This will help other folks who have a similar issue see if there's already something open.

:::info

Learn more on [how to use branches](https://www.atlassian.com/git/tutorials/using-branches) 🌳.

:::

### Coordination

We use [GitHub issues](https://github.com/decentology/hyperverse-docs/issues) for our issue tracking and project management.

### Overview

We use the [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) method of open source contribution. This method allows projects to scale well with not alot of complexity.

### Setup

See the [primer on setting up repos](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

1. [Fork](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo) the `hyperverse-docs` [repository](https://github.com/decentology/hyperverse-docs).
2. [Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) the forked repository from your GitHub profile to your desktop.
3. [Add the remote](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-for-a-fork) repositories for [origin and upstream](https://stackoverflow.com/questions/9257533/what-is-the-difference-between-origin-and-upstream-on-github).

:::info

Learn more about [working with forks](https://docs.github.com/en/github/collaborating-with-pull-requests/working-with-forks)🍴.

:::

## Contributing Code

### Issues

[Open a issue](https://github.com/decentology/hyperverse-docs/issues). Issues are good! They are used to point out errors and suggest new features.

### Picking up an Issue

Read the issue. Ask any questions in the issue thread. Mention the issue that you'd like to work on this to avoid double work.

### Staying Up To Date

Before starting on work on the issue, make sure your code is up to date.

1. In the local version of the branch you're using as your PR, run `git remote add upstream https://github.com/decentology/hyperverse-docs/issues`
2. Grab the recent changes by running `git fetch upstream`
3. Merge the recent changes with your branch by running `git merge upstream/YOUR_BRANCH_NAME_HERE`
4. Push the resolved codebase back to the GitHub version of your branch with `git push origin YOUR_BRANCH_NAME_HERE`

:::info

Learn more on [how to use branches](https://www.atlassian.com/git/tutorials/using-branches) 🌳.

:::

### Creating a contribution

1. Check for the latest code and update.
2. Branch off of `main`.
3. Name your branch based on intent. See the style guide below.
4. Write code.
5. Commit code. See style guide.
6. Push the branch to `origin`.
7. Open a pull request against `main` with the branch.

## Style Guide

To keep our commit history clean, we follow these simple rules.

### Naming Git Branches

Types of branches:

1. `main` - main branch that is live and you'll make PRs against.
2. `feat/FEATURE` - for features.
3. `fix/THING1` - hot fixes.
4. `bug/THING2` - bug fixes.

Make sure to:

1. branch your `feat/`, `fix/`, or `bug/` branches off `main`.

### Git Commit style guide

1. The First `-m`: High-level description  
   `"Added| Edited | etc. FILE"`

2. Second `-m`: Describe the code in under 240 characters.  
   `Added x feature in sample.js and updated README.md in the section required.`

```
git commit -m "Feature. Added GIF to README.md -m "Added the GIF was required to explain what is Solidity."
```

### Pull Request Commits

Make sure to [reference the issue that you are closing](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-issues/linking-a-pull-request-to-an-issue).

Example: `Closes #7 - Add CONTRIBUTING.md`

## Get Support

:::info

Open an [issue](https://github.com/decentology/hyperverse-docs/issues) or [join our discord](https://discord.com/invite/hyperversedao).

:::
