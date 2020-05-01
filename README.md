# Universal React App

- [Universal React App](#universal-react-app)
  - [Motivation](#motivation)
  - [Commands](#commands)
    - [Starting for specific platforms:](#starting-for-specific-platforms)
    - [Building:](#building)
    - [Additional commands:](#additional-commands)
  - [Alias](#alias)
    - [How to use:](#how-to-use)
    - [General alias](#general-alias)
    - [Shared alias](#shared-alias)
    - [Platform specific alias](#platform-specific-alias)
      - [Native](#native)
      - [Web](#web)
  - [How to develop](#how-to-develop)
    - [React Native only:](#react-native-only)
    - [Web only:](#web-only)
    - [Both:](#both)
  - [Table of external resources](#table-of-external-resources)

## Motivation

I wanted to create an boilerplate like project to use React and React Native on the same project, and been able to create Universals components, sharing the same code between every platform.

Following the boilerplate on version 1.0.0 should be the way to go.

On web you will have support for Internacionalization, Service Workers, PWA support.

On native you will have support for Internacionalization, Every Expo resource and more.

## Commands

### Starting for specific platforms:

```sh
    yarn start # Will start the Expo bundle on React Native mode
    yarn start-android # Will start the Expo bundle on React Native mode and open Android platform
    yarn start-ios # Will start the Expo bundle on React Native mode and open IOS platform
    yarn start-web # Will start the Expo bundle on Web mode and Browser
```

### Building:

```sh
    yarn build-web # Will build application and generate web-build folder
```

### Additional commands:

```sh
    yarn lint-fix # Will run lint and fix all files
    yarn release # Will enable release-it commands
    yarn release:patch # Will run release-it to upgrade patch version
    yarn release:minor # Will run release-it to upgrade minor version
    yarn release:major # Will run release-it to upgrade major version
```

## Alias

### How to use:

```js
import something from '@alias';
import something from '@alias/path';
import { something}  from '@alias';
import { something}  from '@alias/path';
```

### General alias

- '@src': will resolve to the src folder.
- '@actions': will resolve to actions folder.
- '@constants': will resolve to constants folder.
- '@reducers': will resolve to reducers folder.
- '@helpers': will resolve to helpers folder.
- '@translations': will resolve to translations folder.

### Shared alias

- '@shared-components': will resolve to src/components/shared
- '@shared-containers': will resolve to src/containers/shared

### Platform specific alias

This alias will change based on what platform you are using, the platform is defined by the enviroment variable APP_ENV.

By default, if no APP_ENV is given, it resolves to Native.

#### Native

- '@components': will resolve to src/components/native
- '@containers': will resolve to src/containers/native
- '@scenes': will resolve to src/scenes/native
- '@router': will resolve to src/router/native


#### Web

- '@components': will resolve to src/components/web
- '@containers': will resolve to src/containers/web
- '@scenes': will resolve to src/scenes/web
- '@router': will resolve to src/router/web

## How to develop

### React Native only:

If you choose to only use React Native part, you can delete every shared or web folder, and the project will be just fine, no change need to be made.

### Web only:

If you choose to only use Web part, you can delete every shared or native folder, and change the babel.config.js or package.json.

If you choose to modify babel.config.js, you just need to modify just the alias object. Change the @components, @containers, @scenes, @router, changing the 'native' word on the end of each line.

Or if you choose to modify package.json, just add APP_ENV='web' on the beginning of each script.

### Both:

You can see that components, container, scenes, router have three folders inside each:

- native: for React Native imports
- web: for Web imports
- shared: for files that can be imported on every platform

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