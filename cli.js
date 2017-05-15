#!/usr/bin/env node

const meow = require('meow');
const chalk = require('chalk');
const pachy = require('.');

const cli = meow(`
  Usage
    $ pachy <input> <output>

  Options
    -w, --watch  Watch files for changes

  Examples
    $ pachy index.js bundle.js
`, {
  alias: {
    w: 'watch'
  }
});

const webpack = pachy(cli.input[0], cli.input[1]);
const done = () => chalk.green('✔ bundle created.');

if (cli.flags.watch) {
  webpack.watch(done);
} else {
  webpack.run(done);
}
