/* eslint-env mocha */

'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const execa = require('execa');
const tempy = require('tempy');
const config = require('./config');
const pachy = require('.');

describe('CLI', () => {
  it('creates a bundle with Webpack', function (done) {
    // Node 4 needs a lot of time to run this test
    this.timeout(10000);
    const outputFile = tempy.file({extension: 'js'});
    execa(path.join(__dirname, 'cli.js'), ['fixtures/input.js', outputFile]).then(() => {
      const output = fs.readFileSync(outputFile).toString();
      expect(output).to.contain('hello pachy');
      done();
    }).catch(done);
  });
});

describe('pachy()', () => {
  it('returns a Webpack instance', () => {
    expect(pachy('input', 'output').run).to.be.a('function');
  });
});

describe('config()', () => {
  let output;

  before(() => {
    output = config('input.js', 'output.js');
  });

  it('returns an object', () => {
    expect(output).to.be.an('object');
  });

  it('sets context to directory of input file', () => {
    expect(output).to.have.property('context', process.cwd());
  });

  it('sets entry file', () => {
    expect(output).to.have.property('entry', './input.js');
  });

  it('sets output filename', () => {
    expect(output).to.have.deep.property('output.filename', 'output.js');
  });

  it('sets output directory', () => {
    expect(output).to.have.deep.property('output.path', process.cwd());
  });

  it('adds babel-loader', () => {
    expect(output).to.have.deep.property('module.rules').with.lengthOf(1);
    expect(output).to.have.deep.property('module.rules.0.use.loader', 'babel-loader');
  });
});
