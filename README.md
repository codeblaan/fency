# Fency
Just gmail.com inside of an electron browser window. Since gmail is in a
separate app, it can't track and ad target you as easily, and it's
convenient to have separate from all your tabs.

![login](https://raw.githubusercontent.com/codeblaan/fency/master/login.gif)

## Run dev build

```bash
# Install dependencies
npm install
# Run the app
npm start
```

## Build a binary

```bash
# Install dependencies
npm install
# Run the app
npm run-script build
```

## Build a binary ready for uploading
```bash
npm run release -- $VERSION
# e.g. npm run release -- 1.0.2
```

## Resources for Learning Electron

- [electronjs.org/docs](https://electronjs.org/docs) - all of Electron's documentation
- [electronjs.org/community#boilerplates](https://electronjs.org/community#boilerplates) - sample starter apps created by the community
- [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
- [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
- [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
- [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
