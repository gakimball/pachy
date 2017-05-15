# pachy

> A simpler Webpack CLI

[![Travis](https://img.shields.io/travis/gakimball/pachy.svg?maxAge=2592000)](https://travis-ci.org/gakimball/pachy) [![npm](https://img.shields.io/npm/v/pachy.svg?maxAge=2592000)](https://www.npmjs.com/package/pachy)

Pachy is a CLI for people who want to use Webpack to do basic, boring things. Give it an entry file and an output file and it does the Webpack thing, with Babel. *That's it and that's all.*

Eventually you'll be able to add more loaders with command line flags.

## Installation

```bash
npm install pachy
```

## Usage

```js
const pachy = require('pachy');

// Paths are relative to the CWD, unless an absolute path is given
const webpack = pachy('src/input.js', 'build/output.js');

// Run once
webpack.run(() => console.log('Done compiling.'));

// Watch for changes
webpack.watch(() => console.log('Bundle updated.'));
```

## API

### pachy(input, output)

Generates a Webpack instance based on the given entry file (`input`) and path to output file (`output`). `babel-loader` is enabled with `babel-preset-env`.

For more info on the object returned, see the [Webpack documentation on its Node.js API](https://webpack.js.org/api/node/).

## CLI

```
  Usage
    $ pachy <input> <output>

  Options
    -w, --watch  Watch files for changes

  Examples
    $ pachy index.js bundle.js
```

## Local Development

```bash
git clone https://github.com/gakimball/pachy
cd pachy
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
