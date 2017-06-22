var expect = require('chai').expect;

describe('in-search-of-happiness homepage', function() {
  before(function() {
    browser.url('http://localhost:3000');
  });

  it('should have the page title', ()=> {
    expect(browser.getText('.App-header h2')).to.equal('In Search Of Happiness');
  });

  it('should have a list of companies', ()=> {
    expect(browser.getTagName('li').length).to.equal(100);
  });

  it('should not have empty list elements', ()=> {
    expect(browser.getTagName('li')[5].innerHTML).to.not.equal('');
  });

});