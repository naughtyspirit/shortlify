var should = require('chai').should()
var expect = require('chai').expect
var Shorty = require('../src/index')


describe("Bit.ly link generator", function() {
    it("should return short link", function*() {
        var shorty = new Shorty('<API_KEY>')
        var link = yield shorty.getShortLink("http://duckduckgo.com")
        expect(link).to.contain('http')
    })
})
