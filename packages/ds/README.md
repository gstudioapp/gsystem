[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://objective-panini-639144.netlify.app)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4f72c65f-47f7-4f73-8a1e-1ea9afdd17cc/deploy-status)](https://app.netlify.com/sites/objective-panini-639144/deploys)

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

## Scaffolding

```bash
./packages/ds/src
├── assets
│   └── images
├── components
│   ├── Button
│   ├── Card
│   ├── Heading
│   ├── Icon
│   ├── Input
│   ├── Logo
│   ├── MenuSelect
│   ├── Text
│   ├── ThemeProvider
│   └── index.ts
├── index.d.ts
├── test-utils.tsx
├── theme
│   ├── components
│   ├── foundations
│   ├── index.ts
│   ├── styles
│   ├── theme.tsx
│   └── utils
└── types
    ├── components
    ├── index.ts
    └── theme
```
