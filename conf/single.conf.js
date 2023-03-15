exports.config = {
 user: process.env.LT_USERNAME || 'meerap',
  key: process.env.LT_ACCESS_KEY || 'I9ADikrjXtd5i0yOXOtjmRQRSpcA5ng6PxIvHwEuWvNtQ8CTWd',
  server: 'hub.lambdatest.com',

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    name: "cucumber-js-single-test",
    build: "cucumber-js-LambdaTest-single"
  }]
}
