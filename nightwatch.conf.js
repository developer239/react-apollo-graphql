const SCREENSHOT_PATH = './screenshots/'
const BINPATH = './node_modules/nightwatch/bin/'
const WEB_URL = 'http://localhost:3000'


module.exports = {
  src_folders: [
    'tests/e2e',
  ],
  output_folder: './tests/.reports',
  selenium: {
    start_process: true,
    server_path: './node_modules/nightwatch/bin/selenium.jar',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/nightwatch/bin/chromedriver',
    },
  },
  test_settings: {
    default: {
      screenshots: {
        enabled: true,
        path: './tests/.screenshots',
      },
      globals: {
        waitForConditionTimeout: 5000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        avascriptEnabled: true,
      },
    },
  },
}

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // eslint-disable-line
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function (error) { // eslint-disable-line
      if (error) throw new Error(error) // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH)
    })
  }
})


function padLeft(count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString() // eslint-disable-line
}

let FILECOUNT = 0 // "global" screenshot file count

/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath(browser) {
  const a = browser.options.desiredCapabilities
  const meta = [a.platform]
  meta.push(a.browserName ? a.browserName : 'any')
  meta.push(a.version ? a.version : 'any')
  meta.push(a.name) // this is the test filename so always exists.
  const metadata = meta.join('~').toLowerCase().replace(/ /g, '')
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_' // eslint-disable-line
}

module.exports.imgpath = imgpath
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH
module.exports.WEB_URL = WEB_URL
