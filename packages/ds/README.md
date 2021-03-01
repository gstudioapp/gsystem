[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://objective-panini-639144.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f72c65f-47f7-4f73-8a1e-1ea9afdd17cc/deploy-status)](https://app.netlify.com/sites/objective-panini-639144/deploys) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/15771a8c22dd44b6a16283e09cdb977f)](https://app.codacy.com/gh/gstudioapp/gsystem?utm_source=github.com&utm_medium=referral&utm_content=gstudioapp/gsystem&utm_campaign=Badge_Grade_Dashboard) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/5a71ae4db894401399637dd07f254ca6)](https://www.codacy.com/gh/gstudioapp/gsystem?utm_source=github.com&utm_medium=referral&utm_content=gstudioapp/gsystem&utm_campaign=Badge_Coverage)

# @gsystem/ds

React UI component library

## Steps to install

1. Clone this repo

```bash
git clone git@github.com:gstudioapp/gsystem.git
```

2. Run `nvm install` ([what is nvm?](https://github.com/nvm-sh/nvm))
3. Run `nvm use`
4. Run `yarn` - please, do not use `npm` in this project!

## Running

1. Run dev in the terminal

> Tip: Run each command below in the terminal tab!

```bash
### Storybook
yarn workspace @gsystem/ds run storybook
### Typecheck
yarn workspace @gsystem/ds run typecheck:dev
### Test
yarn workspace @gsystem/ds run test:watch
### Compile
yarn workspace @gsystem/ds run compile:dev
#
## or
#
### Storybook
lerna exec yarn storybook --scope=@gsystem/ds
### Typecheck
lerna exec yarn typecheck:dev --scope=@gsystem/ds
### Test
lerna exec yarn test:watch --scope=@gsystem/ds
### Compile
lerna exec yarn compile:dev --scope=@gsystem/ds
```
