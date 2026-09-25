import { test } from "@playwright/test";
export const customTest = test.extend({
    loginFixture:{
        
    username:"standard_user",
    password:"secret_sauce",
    myprdct : "Sauce Labs Backpack",
    firstname:"Megha",
    lastname:"Saji",
    zip:"1234"


    }
})