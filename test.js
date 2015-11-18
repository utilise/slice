var expect = require('chai').expect
  , slice = require('./')

describe('slice', function() {

  it('should slice value into array', function() {
    expect(slice(0,2)('foo')).to.be.eql('fo')
  })

})