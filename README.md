# GetWashmenChallenge

GetWashmenChallenge is a React-Native app done as a technical test for GetWashmen.

## How to Run the app

1- Installing the packages.

```bash
yarn install OR npm install
```

2- Installing the pods (If you don't want to run it on ios, you can skip this step).

```bash
cd ios && pod install && cd ..
```

3- Now we have to run the app, you need to run the command depending on the platform.

First, run `yarn watch` or `npm start watch` to create a build folder that index.js reads from.

Then:

| Platform |          Command           |
| :------: | :------------------------: |
| android  | `react-native run-android` |
|   ios    |   `react-native run-ios`   |

After running the mentioned commands a packager should open automatically. In case it doesn't, run `yarn start` or `npm start`.

## License

[MIT](https://choosealicense.com/licenses/mit/)
