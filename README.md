# Universal React App

## Motivation

I wanted to create an boilerplate like project to use React and React Native on the same project, and been able to create Universals components, sharing the same code between every platform.

Following the boilerplate on version 1.0.0 should be the way to go.

On web you will have support for Internacionalization, Service Workers, PWA support.

On native you will have support for Internacionalization, Every Expo resource and more.

## Commands

### Starting for specific platforms:

```
    yarn start # Will start the Expo bundle on React Native mode
    yarn start-android # Will start the Expo bundle on React Native mode and open Android platform
    yarn start-ios # Will start the Expo bundle on React Native mode and open IOS platform
    yarn start-web # Will start the Expo bundle on Web mode and Browser
```

### Building:

```
    yarn build-web # Will build application and generate web-build folder
```

### Additional commands:

```
    yarn lint-fix # Will run lint and fix all files
    yarn release # Will enable release-it commands
    yarn release:patch # Will run release-it to upgrade patch version
    yarn release:minor # Will run release-it to upgrade minor version
    yarn release:major # Will run release-it to upgrade major version
```

## How to develop

## Table of external resources

| Name | Use |
|---|---|
| [Expo](https://docs.expo.io/) | For Native an Web support. |
| [i18next](https://www.i18next.com/overview/api) | For translations and internacionalization |
| [react-i18next](https://react.i18next.com/) | For components support for i18n |
| [lodash](https://lodash.com/docs/) | For functional and reliable support |
| [redux](https://redux.js.org/) | For managing application state |
| [Release It](https://www.npmjs.com/package/release-it) | For versioning |
| [Typescript](https://www.typescriptlang.org/) | For typecheck |


Created by [@joaomarcuslf](http://joaomarcuslf.github.io/).