'use strict';

var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
const debug = require('debug')('demo-archiejs-gdrive-test');

var testApp = require('./archie-unit');

describe('Google drive Testcases: ', function() {

  var tokenService;
  var driveService;

  before(function(done){
    this;
    testApp(function(err, archie) {
      dummyService = archie.getService("dummy");
      done();
    });
  });

  it('has a dummy test', function(done) {
    let result = dummyService.whoAmI();
    result.should.equal("dummy");
    done();
  });

});
