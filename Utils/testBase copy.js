import {test} from "@playwright/test"

exports.myTest = test.extend({
    //use - custom function is a clean way to use the fixture values in the test file
    userList: async ({}, use)=>{   
        await use([
            {
                username : "standard_user",
                password : "secret_sauce"
            } ,
            {
                username : "visual_user",
                password : "secret_sauce"
            }
        ])
    } 
    
})