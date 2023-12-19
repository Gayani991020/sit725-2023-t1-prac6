var expect  = require("chai").expect;
var request = require("request");
const Cube = require('../server').Cube;


describe("Add Two Numbers", function() {
    var url = "http://localhost:8080/addTwoNumbers/3/5";
    it("returns status 200 to check if api works", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api give right result should be 200", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(200);
            done()
          });
    });
    it("returns the result as number", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('number');
            done()
          });
    });
    it("returns the result equal to 8", function(done) {
      request(url, function(error, response, body) {
          body = JSON.parse(body)
          expect(body.result).to.equal(8);
          done()
        });
  });
  it("returns the result not equal to 15", function(done) {
    request(url, function(error, response, body) {
        body = JSON.parse(body);
        expect(body.result).to.not.equal(15);
        done()
      });
});
  });

  describe("Add Two strings", function() {
    var url = "http://localhost:8080/addTwoNumbers/a/b";
    it("should return status 200", function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
          });
    });
    it("returns statusCode key in body to check if api gives right result should be 400", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.statusCode).to.equal(400);
            done()
          });
    });
    it("returns the result as null", function(done) {
        request(url, function(error, response, body) {
            body = JSON.parse(body)
            expect(body.result).to.be.a('null');
            done()
          });
    });

    
  });

  describe('Testing the Cube Functions', function() {
    var url = "http://localhost:8080/cube";
    it('1. The side length of the Cube', function(done) {
    let c1 = new Cube(2);
    expect(c1.getSideLength()).to.equal(2);
    done();
    });
    
    it('2. The surface area of the Cube', function(done) {
    let c2 = new Cube(5);
    expect(c2.getSurfaceArea()).to.equal(150);
    done();
    });
    
    it('3. The volume of the Cube', function(done) {
    let c3 = new Cube(7);
    expect(c3.getVolume()).to.equal(343);
    done();
    });
  }); 