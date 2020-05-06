# Picolou
> Mobile App using React Native 



**Table of Contents**
- [📖 Introduction](#-introduction)
- [🏗 Installation ](#-installation-for-app-developping)
- [⚙️ Functionnalities ](#%EF%B8%8F-functionnalities)
- [📝 Notes ](#-notes)



## 📖 Introduction

This mobile App was developped using Expo (so React Native + Javascript).

It used an online API on Heroku to access the datas.
Link to heroku app: [paris-bar-api](https://paris-bar-api.herokuapp.com/).

We wanted to try a few bars with my friends for the last months together so I thought it could be cool to to a cross-platform mobile app!

## 🏗 Installation (for app developping)

To try the app just run
```sh
❯ npm install
```
and then
```sh
❯ npm start
```

You'll need the  expo app on your smartphone (you can also use an emulator on your laptop).
You'll then need to scan a QR code to try the application


## ⚙️ Functionnalities 

Actually:
- display a (very small) list of bars
- give details on a specific bar
- favorites 


## 📝 Notes 

### Features to add

- general improvments on the app
- map with all the bar -> maybe difficult

On the API:
- Handle several pages (-> impose changes in the react mobile app) 
- Create a new bar (-> perhaps a thumbnail in the app to do so)

### Librairies used

Here are the librairies I installed to run this project:

- mongodb-stitch-react-native-sdk
- mongodb-stitch-react-native-services-mongodb-remote
- react-navigation
- react-navigation-stack 
- react-native-gesture-handler  
- react-native-safe-area-context 
- react-native-screens
- redux
- react-redux
- react-navigation-tabs
- react-native-reanimated
- redux-persist
- @react-native-community/async-storage

To install them I just ran
```sh
❯ npm install --save <library name>
```
and to ensure the installation: 
```sh
❯ npm install 
```
