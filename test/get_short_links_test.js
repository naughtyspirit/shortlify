var should = require('chai').should()
var expect = require('chai').expect
var Shortlify = require('../src/index')


describe("Bit.ly link generator", function() {
    it("should return short link", function*() {
        var shortlify = new Shortlify('<API_KEY>')
        var link = yield shortlify.getShortLink("http://duckduckgo.com")
        expect(link).to.contain('http')
    })
})
