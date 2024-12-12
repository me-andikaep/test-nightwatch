const fs = require('fs');

module.exports = {
  login: function (browser) {
    browser
      .navigateTo('https://webdev.mile.app/login')
      .waitForElementVisible('body')
      .setValue('input#__BVID__20', 'andika@mile.app')
      .setValue('input#__BVID__26', 'password')
      .pause(2000)
      .click('button#baseButtonId')
      .waitForElementVisible('.main-wrapper', 10000, 'Redirected page is visible')
      .assert.urlContains('/tasks/task', 'URL contains the correct path')
      .perform(() => {
        browser.getCookies((result) => {
          fs.writeFileSync('session_cookies.json', JSON.stringify(result.value)); // Simpan cookies ke file
        });
      });
  },

  reuseSession: function (browser, redirectTo) {
    if (fs.existsSync('session_cookies.json')) {
      // const cookies = JSON.parse(fs.readFileSync('session_cookies.json'));
      // console.log('cookies', cookies)
      // cookies.forEach((cookie) => {
      //   browser.setCookie(cookie);
      // });
      // browser.refresh();

      const cookies = JSON.parse(fs.readFileSync('session_cookies.json', 'utf8'));

      browser.navigateTo(redirectTo) // Navigate to the correct domain
        .perform(() => {
          // console.log('Setting cookies:', cookies);

          cookies.forEach((cookie) => {
            browser.setCookie({
              name: cookie.name,
              value: cookie.value,
              domain: cookie.domain || 'webdev.mile.app' || 'webbeta.mile.app',
              path: cookie.path || '/',
              secure: cookie.secure || true,
              httpOnly: cookie.httpOnly || false,
            });
          });
        })
        .navigateTo(redirectTo) // Redirect to the desired page after setting cookies
        .waitForElementVisible('body', 5000, 'Page loaded after setting cookies')
        // .getCookies((result) => {
        //   console.log('Cookies after setting:', result.value);
        // });
    } else {
      this.login(browser); // Jika tidak ada cookies, login ulang
    }
  }
}
