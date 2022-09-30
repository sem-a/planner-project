# planner-project

## Install
You need to install expo:
```
npm i -g expo-cli
```

## Run server
Go to the project directory using the command `cd`
And start the server:
```
expo start
```
## Run android 
Install the android emulator on your computer, download the `Expo Go` application. Select the menu item `Launch on ios` in the console
## Run ios
Install the `Expo Go` application on the iPhone. We scan the QR code with the smartphone camera.

## Assembly in the apk
# 1. In the console, go to the directory with the project and write the command:
```
npm install -g eas-cli
```
# 2. Log in to your Expo account
```
eas login
```
You can check whether you are logged in by running `eas whoami`.
# 3. Configure the project
```
eas build:configure
```
# 4. Run a build
- For Android:
```
eas build --platform android
```
- For ios:
```
eas build --platform ios
```

