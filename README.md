# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# Aroa_ReactNative



How to start:

macro for react native page
```bash
rnfes 
```
this is for native wind and tailwindcss
```bash
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context 
```
run
to create a tailwind.config.js file
```bash
npx tailwindcss init
```
change content in tailwind.config.js to
```bash
content: ["./app/**/*.{js,jsx,ts,tsx}"],
presets: [require("nativewind/preset")],
```

create a global.css inside app folder
add these in that file
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
If your project does not have a metro.config.js run 
```bash
npx expo customize metro.config.js
```
metro.config.js should look like this copy paste
```bash
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./app/global.css" });
```

Import your global CSS file in app/_layout.js/.tsx
```bash
import "./global.css";
```
Create a file _layout.js/.tsx file name babel.config.js
```bash
module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }], // For NativeWind JSX support
      ],
      plugins: [
        "nativewind/babel", // Required for NativeWind
        "react-native-reanimated/plugin", // Required for react-native-reanimated
      ],
   };
};
  
```
to run your web project
```bash
npm run web
```