'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    expect(page.h1El.getText()).toBe('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });
});

describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
        firstNumber.sendKeys(4);
    secondNumber.sendKeys(6);

    goButton.click();
    expect(latestResult.getText()).toEqual('10');
  });
});

describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));

  function add(a, b) {
    firstNumber.sendKeys(a);
    secondNumber.sendKeys(b);
    goButton.click();
  }

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.count()).toEqual(2);

    add(5, 6);

    expect(history.count()).toEqual(3); // This is wrong!
  });

   it('should have a valid history', function() {
    add(1, 2);
    add(3, 4);

    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('3 + 4'); // This is wrong!
  });


});