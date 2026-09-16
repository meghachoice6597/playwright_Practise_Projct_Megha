// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  // we need to change html tp allure reporter to generate allure report
  /*reporter : [
    ['line'],['allure-playwright',{outputFolder:"allure-results"}],
  ],*/
  timeout: 40*1000,
  expect : {
    timeout: 50*1000   //Assertion timeout
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  retries: 1,
  
  projects: [
    {
      name:'chromeProject',
      use: {
    //viewport:{width:500,height:500},
    ...devices['Desktop Chrome'],
    permissions:['microphone','geolocation','notifications'],
   // geolocation:{longitude:12.4924,latitude:41.8902},
   IgnoreHTTPSErrors:true,
    browserName:'chromium',
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    headless: false,
  },},
    
    {
      name:'firefoxProject',
     use: {
      //viewport:{width:500,height:500},
    browserName:'firefox',
    screenshot:'only-on-failure',
    video:'retain-on-failure',
    trace:'retain-on-failure',
    headless: false,
  },
    }
  
  ]

  

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

