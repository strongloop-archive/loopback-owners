'use strict';

var expect = require('chai').expect;
var index = require('..');

describe('index', function() {
  it('exports an array', function() {
    expect(index).to.be.an('array');
  });
});
