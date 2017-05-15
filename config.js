'use strict';

const path = require('path');
const cwd = require('prepend-cwd');

/**
 * Generate a Webpack config based on an input file and ouput file.
 * @param {String} input - Entry JavaScript file.
 * @param {String} output - Output filename.
 * @returns {Object} Webpack config.
 */
module.exports = (input, output) => {
  input = cwd(input);
  output = cwd(output);

  return {
    context: path.dirname(input),
    entry: `./${path.basename(input)}`,
    output: {
      filename: path.basename(output),
      path: path.dirname(output)
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    resolve: {
      modules: [path.dirname(input), 'node_modules']
    }
  };
};
