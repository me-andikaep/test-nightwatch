const loginHelper = require('../helper/loginHelper');

describe('Task Page', function () {
  before(function (browser) {
    const redirectUrl = 'https://webdev.mile.app/tasks/task';
    loginHelper.reuseSession(browser, redirectUrl);
  });

  // it('on loagin', function (browser) {
  //   browser
  //   .setValue('input#__BVID__19', 'andika@mile.app')
  //   .setValue('input#__BVID__24', 'password')
  //   .pause(2000)
  //   .click('button#baseButtonId')
  //   .waitForElementVisible('.main-wrapper', 10000, 'Redirected page is visible')
  //   .assert.urlContains('/tasks/task', 'URL contains the correct path')
  // })

  it('masuk ke halaman task', function (browser) {
    browser
      .waitForElementVisible('.main-wrapper')
      .assert.titleContains('MileApp')
      .assert.urlContains('/tasks/task', 'URL contains the correct path')
  })
})