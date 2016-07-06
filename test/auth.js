'use strict';

var assert = require('assert');
var request = require('supertest');

require('should');
require('should-http');

var url = 'http://127.0.0.1:3000/v1';

describe('Authentication Testcases:', function() {

    before(function(done){
        var profile = {
            username: 'naval',
            password: 'naval',
            email: 'navalnovel@gmail.com',
            fullname: 'Naval Saini'
        };

        request(url)
        .post('/register')
        .send(profile)
        .end(function(err, res){
            done(); // ignore error (user may already be registered)
        });
    });

    it('should return error trying to save duplicate user', function(done){
        var profile = {
            username: 'naval',
            password: 'naval',
            email: 'navalnovel@gmail.com',
            fullname: 'Naval Saini'
        };

        request(url)
        .post('/register')
        .send(profile)
        .end(function(err, res){
            if(err) {
                return done(err);
            }
            res.should.have.status(400);
            done();
        });
    });

    it('should login the user', function(done){
        var body = {
        username: 'naval',
        password: 'naval'
        };

        request(url)
        .post('/login')
        .send(body)
        .end(function(err, res){
            if(err) {
                return done(err);
            }
            res.body.fullname.should.equal('Naval Saini');
            res.body.email.should.equal('navalnovel@gmail.com');
            res.should.have.status(200);
            done();
        });
    });

    it('should logout the user', function(done){
        request(url)
        .post('/logout')
        .end(function(err, res){
            if(err) {
                return done(err);
            }
            res.should.have.status(200);
            done();
        });
    });
});

