# Cerberus

This readme contains my reasoning for automated CI QA, to guard the code from bugs and other bad things to (e)merge. This repository is also set up, to satisfy it with a simple demo application.

## Summary

- Use [Prettier](https://prettier.io/)
- Use Linting (without formatting rules)
- Use automated tests
- Enforce all previous things on your main branch
  - Don't enforce any of those prior within your branches through git pre-commit hooks

## Use Prettier

Why does automated formatting deposit into QA? Why enforce opinionated Prettier instead of coming up with the perfect fit of rules for your team?

### Value of automated consistent formatting

At primary school I had hard times to understand why I have to memorize exact spelling. E.g. no harm is done if I write "miscelaneous" instead of "miscellaneous", right? For one typo this might be true. But if you read a roman having a typo every third word it is kind of annoying. Beside humans are good at recognizing patterns. If everyone uses the same spelling, you get used to parse the combination of letters, what improves reading speed.

With code it is the same. There is really no harm at all if you e.g. one time write `function() {...}` and another time `function () {...}` with a space before round braces. Nor is one version superior to the other. Same goes for two or four spaces as tabs, ect. But if the code is consistent, you get used to the pattern of characters and will be able to comprehend it a very little easier. If the formatting happens automated, you can keep writing code without short interruptions in your business logic thoughts to switch to formatting logic. Both points are clearly no game changers, but if you can get them for almost free with Prettier, why should you reject them?

### Why use Prettier

It is very possible, that choices made by Prettier doesn't fit personal style of all team members. So why not assemble your own rule set, like ESLint enables you to do. As said above, the gain of consistent formatting is not too big and what style you chose is pretty indifferent. But coming up with your own rule set has two costs:

- The team needs time to settle on them.
- More important, styles are personal. Discussions about them tend to be nit picky and burn mental energy.

You might still wonder, why not use pre-configured formatting rules of ESLint? It is to one faster and the other it can auto fix more things than ESLint.

## Why use Linting

Similar to formatting, linting comes with almost no costs at all. And it should be obvious that rules like [no-debugger](https://eslint.org/docs/rules/no-debugger) or [no-dupe-args](https://eslint.org/docs/rules/no-dupe-args) prevent you from doing silly mistakes to your production code. In contrast to Prettier, I think it is very valid to disable a rule locally with a comment explaining why, or globally if you in generally disagree with a rule like [no-cond-assign](https://eslint.org/docs/rules/no-cond-assign) if you prefer some C style.

## Why use automated tests

Automated tests detect bugs, prevent regression and give you confidence for refactoring. What kind of tests you should use and how many of them is not topic here. But let me point out the general point, that each test comes with a cost. It has to be maintained like regular code and it adds execution time to the QA gate. So make sure that its gain outweighs the costs and if not, don't be shy to improve it or throw it away!

## Enforce it

As humans sometimes forget something or make mistakes, the main branch should be protected. Meaning you cannot push directly into it and PR pipelines fail if Prettier, linting, or automated tests are not satisfied.

### Why not enforce everything as pre-commit hooks

You could already enforce everything on each commit through git pre-commit hooks. In my opinion this is wasted time. The goal is to keep the production code clean and not to polish each commit. E.g. I sometimes hack around to find out how something works. Then I realize that a variable is badly named and do an automated renaming executed by my IDE. I have confident in my IDE, so I want to do a micro-commit immediately with only the renaming staged. Unfortunately I have currently somewhere an unused variable, which is not part of the commit. Sadly the pre-commit hooks fails anyway and pulls me out of my concentrated debug mind-set, forcing me to think about linting of changes, I will never commit anyway. In the worst case pre-commit hooks takes more than 3 seconds to execute, what would pull me out of my thoughts with each commit.

## Resources

Resources I enjoyed reading for this reasoning:

- https://www.smashingmagazine.com/2012/10/why-coding-style-matters/
- https://prettier.io/docs/en/why-prettier.html
- https://github.com/prettier/prettier/issues/40
- https://guides.github.com/introduction/flow/
- https://docs.microsoft.com/en-us/learn/paths/az-400-manage-source-control/
- https://lucasr.org/2011/01/29/micro-commits/
