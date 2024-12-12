const loginHelper = require('../../helper/loginHelper');

describe('Task Page', function () {
  before(function (browser) {
    const redirectUrl = 'https://webdev.mile.app/setting/team';
    loginHelper.reuseSession(browser, redirectUrl);
  });

  it('masuk ke halaman team', function (browser) {
    browser
      .waitForElementVisible('.main-wrapper')
      .assert.titleContains('MileApp')
      .assert.urlContains('/setting/team', 'URL contains the correct path')
    
      .assert.elementPresent('button#baseButtonId', 'button new is present') 
      .assert.elementPresent('input[type="search"]', 'Input search is present') 
      .assert.elementPresent('div.std-virtual-table', 'table is present') 
  })

  it('buat task baru', function (browser) {
    browser
      .click('button#baseButtonId')
      .waitForElementVisible('#dialogTeam')
      .assert.elementPresent('#dialogTeam', 'moidal team is present')
      .assert.elementPresent('div.std-header-dialog__title', 'title modal is present')
      .assert.elementPresent('button.border-secondary', 'button cancel is present')
      .assert.elementPresent('button#baseButtonId.btn-primary', 'button submit is present')

      .assert.elementPresent('input[type="text"]', 'form team name is present')
      .setValue('input.mb-2.form-control', 'naruto')
      .pause(1000)
      .assert.valueEquals('input.mb-2.form-control', 'naruto', 'input field value is set to "naruto"')
      .pause(1000)
      .moveToElement('.btn.btn-primary.btn-sm.base-button', 10, 10) // Ensure the button is clickable
      .click('.btn.btn-primary.btn-sm.base-button')
      .waitForElementVisible('.b-toast.b-toast-solid.b-toast-prepend.b-toast-success', 1000, 'toast success is visible')
      .waitForElementVisible('div.std-virtual-table', 1000, 'table is visible')
      .assert.textContains('div.std-virtual-table', 'naruto', 'Table contains the value "naruto"')
  })


})