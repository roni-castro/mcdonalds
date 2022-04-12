# MCdonalds App

# Installation

1. Install [Expo requirements](https://docs.expo.dev/get-started/installation/#requirements) and [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable)

Check the minimum Node version [here](.nvmrc)

2. Install [expo command line tools](https://docs.expo.dev/get-started/installation/#installing-expo-cli)

```sh
npm install --global expo-cli
```

3. Install the dependencies of the project:

```sh
yarn install
```

# Run the project

1. Run the command to start expo:

```sh
expo start
```

2. Run the app on Android or iOS, following the Metro Bundler tips, similar to this example:

```
› Press a │ open Android
› Press i │ open iOS simulator
› Press r │ reload app
```

# Publish the Android app (Requires authentication)

```sh
expo publish
```

[Docs](https://docs.expo.dev/workflow/publishing/#how-to-publish)

# Folder and File structure:

```
src
    └── components
        └── ComponentName
            └── index.tsx
            └── styles.ts
            └── interface.ts
    └── config
        └── someConfig
            └── index.ts
    └── hooks
        └── useNameOfTheHook
            └── index.ts
            └── interface.ts
    └── navigation
        └── featureNavigation
            └── index.tsx
    └── screens
        └── FeatureScreen
            └── index.tsx
            └── styles.ts
            └── interface.ts
            └── components
                └── ComponentName
                    └── index.tsx
                    └── styles.ts
                    └── interface.ts
    └── services
        └── featureServiceName
            └── index.ts
            └── interface.ts
    └── theme
        └── token1.ts
        └── token2.ts
        └── index.ts
    └── utils
        └── nameOfTheUtils.ts
```

Obs: All screen and components should start with a capital letter.

## Folder meanings:

**components**: All reusable components.\
**config**: The project configuration goes here, like api client.\
**hooks**: All reusable hooks.\
**navigation**: Any kind of navigation, stack, tabs... associated with react-navigation. Separed by feature.\
**screens**: All the screens of the project. It can have a component folder when the component is not reusable. The same could be done for the hooks\
**services**: All the api service functions and api interfaces.\
**theme**: all the theme tokens and types\
**utils**: shared functions.

## Design System

Here is some of the pre-defined tokens, based on some Figma values

### Typography

#### size

| size             | value |
| ---------------- | ----- |
| titleXLarge      | 36px  |
| titleLarge       | 32px  |
| titleMedium      | 28px  |
| titleSmall       | 24px  |
| paragraphXXLarge | 22px  |
| paragraphXLarge  | 20px  |
| paragraphLarge   | 18px  |
| paragraphMedium  | 16px  |
| paragraphSmall   | 14px  |
| paragraphXSmall  | 12px  |

#### lineHeight

| size             | value |
| ---------------- | ----- |
| titleXLarge      | 36px  |
| titleLarge       | 32px  |
| titleMedium      | 28px  |
| titleSmall       | 24px  |
| paragraphXXLarge | 22px  |
| paragraphXLarge  | 20px  |
| paragraphLarge   | 18px  |
| paragraphMedium  | 16px  |
| paragraphSmall   | 14px  |
| paragraphXSmall  | 12px  |

# Technical Design Template

[Link to the docs](https://docs.google.com/document/d/1JeHL2JEzTgIE_jdd3DYpeA7xd22gQj4GKyTM6shIXWM/edit?usp=sharing)

# Expo Release - Android

[Link](https://expo.dev/@ronicesarrc/mcdonalds?serviceType=classic&distribution=expo-go)

# Demo Video

[Link](https://drive.google.com/file/d/1eIOpobZgQIC19F_ZSC9sZLUdWC3iOneK/view?ths=true)

# Screenshots:

<img width=300 alt="splash" src="https://user-images.githubusercontent.com/24610813/162873212-136a88cc-0c79-4ab8-80d3-1fe5188eac63.png"/> <img width=300 alt="loading" src="https://user-images.githubusercontent.com/24610813/162873206-4f73929c-05c9-4a5e-a1bd-68ed24f3ae52.png"/> <img width=300 alt="error_placeholder" src="https://user-images.githubusercontent.com/24610813/162873191-72ac77c0-cf79-4158-b70f-008b84f74b6b.png"/> <img width=300 alt="home" src="https://user-images.githubusercontent.com/24610813/162873201-7fcafa0c-26c0-4505-9b4c-950e2f88ab61.png"/> <img width=300 alt="menu_modal" src="https://user-images.githubusercontent.com/24610813/162873208-91f96a95-65e5-4b9f-88d3-b6d5283c982c.png"/>
