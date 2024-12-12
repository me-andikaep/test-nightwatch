describe('The Login Page', function () {
  before(function (browser) {
    browser.navigateTo('https://webdev.mile.app/login');
  });

  it('masuk ke halaman login', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('MileApp')
  })

  it('check komponen dalam login', function (browser) {
    browser
      // icon mileapp
      .assert.elementPresent('a img.mini-imgg', 'icon mileapp is visible')
  
      // icon mileapp
      .assert.elementPresent('div.googleLogin', 'button login google is visible')
    
      // form email
      .assert.textContains('label[for="params.email"]', 'Email', 'Label contains correct text')
      .assert.elementPresent('input#__BVID__20', 'Input field is present') 
      .assert.attributeContains('input#__BVID__20', 'placeholder', 'Write email here', 'Input has correct placeholder') 
      .assert.attributeContains('input#__BVID__20', 'type', 'text', 'Input is of type text')
    
      // form password
      .assert.textContains('label[for="params.password"]', 'Password', 'Label contains correct text')
      .assert.elementPresent('input#__BVID__26', 'Input field is present') 
      .assert.attributeContains('input#__BVID__26', 'placeholder', 'Write password here', 'Input has correct placeholder') 
      .assert.attributeContains('input#__BVID__26', 'type', 'password', 'Input is of type text')
    
      // button forgot password
      .assert.elementPresent('span[style="margin-top: -10px;"].cursorPointer', 'buttom forget is visible')
    
      // button login
      .assert.elementPresent('button#baseButtonId', 'buttom sign in is visible')

      // button sign up
      .assert.elementPresent('a.card-link', 'buttom sign up is visible')
  })

  it('klik logo mileapp redirect ke landing page', function (browser) {
    browser
      .click('a img.mini-img')
      .waitForElementVisible('body', 1000, 'Redirected page is visible')
      .assert.urlContains('mile.app', 'URL contains the correct path')
      .navigateTo('https://webdev.mile.app/login');
  })

  it('klik forget password redirect ke forget password', function (browser) {
    browser
      .click('span[style="margin-top: -10px;"].cursorPointer')
      .waitForElementVisible('body', 1000, 'Redirected page is visible')
      .assert.urlContains('/forgot-password', 'URL contains the correct path')
      .navigateTo('https://webdev.mile.app/login');
  })

  it('klik signup redirect ke signup', function (browser) {
    browser
      .click('a.card-link')
      .waitForElementVisible('body', 1000, 'Redirected page is visible')
      .assert.urlContains('/signup', 'URL contains the correct path')
      .navigateTo('https://webdev.mile.app/login');
  })

  it('on loagin', function (browser) {
    browser
      .setValue('input#__BVID__20', 'andika@mile.app')
      .setValue('input#__BVID__26', 'password')
      .pause(2000)
      .click('button#baseButtonId')
      .waitForElementVisible('.main-wrapper', 10000, 'Redirected page is visible')
      .assert.urlContains('/tasks/task', 'URL contains the correct path')
  })
})