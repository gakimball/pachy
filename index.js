'use strict';

const webpack = require('webpack');
const config = require('./config');

module.exports = (input, output) => webpack(config(input, output));
