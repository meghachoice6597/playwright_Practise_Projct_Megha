//if we hve two test to skip one test use --- test.skip otherwise test.only will run only that test and skip all other tests
import test, {expect} from "@playwright/test"
const Exceljs=require ('exceljs');  //import exceljs and store it in a variable
//import {test,expect} from '@playwright/test' // this not required

//async function with parameters searchValue,replacedValue,change,filePath
async function writeExcelTest(searchValue,replacedValue,change,filePath) {
      const workbook=new Exceljs.Workbook(); //workbook is inbuilt method of exceljs to create a new workbook
      await workbook.xlsx.readFile(filePath) //read the file from the path provided in the parameter
      const worksheet=workbook.getWorksheet('Sheet1'); //get the worksheet from the workbook - sheet1 is wrkbooksheet name 
      const output=await readExcel(worksheet,searchValue);//
      const cell=worksheet.getCell(output.row,output.column+change.colChange); //insted of hardcode we use the object variables ,use change as last
      //const cell=worksheet.getCell(output.row,output.column);
      cell.value=replacedValue 
      await workbook.xlsx.writeFile(filePath);//re-write the file and save it again

}

async  function readExcel(worksheet,searchValue) 
{
    
   let output={row:-1,column:-1} //object with key value pair to store the row and column number of the cell where the searchValue is found

  //eachRow is inbuilt method of exceljs to loop through each row of the worksheet
worksheet.eachRow((row,rowNumber)=>{

    row.eachCell((cell,colNumber)=>{
 
        if(cell.value===searchValue)
      
         {
            output.row=rowNumber; 
            output.column=colNumber; 
            console.log(cell.value)
            console.log(output.row); 
            console.log(output.column);
        
      }
    })

  })

  return output; 
}
//writeExcelTest("Replaced Value","Value",{rowChange: 0, colChange: 1},"\\Users\\megha\\Downloads\\Playwright_Programs\\Utils\\jspreadsheet.xlsx") //call the function with parameters searchValue,replacedValue,change,filePath
test("excelTest_fileupload", async({page}) =>{
await page.goto("https://demo.automationtesting.in/FileUpload.html");
const browseButton = await page.locator("#input-4");
await browseButton.setInputFiles("C:\\Users\\megha\\Downloads\\Playwright_Programs\\Utils\\jspreadsheet.xlsx");
await page.pause();
}
)

test("excelTest_filedownload", async({page}) =>{
await page.goto("https://demoqa.com/upload-download");
const downloadPromise = page.waitForEvent("download")
const downloadButton = await page.locator("#downloadButton");
await downloadButton.click();
const download = await downloadPromise
await download.saveAs("C:\\Users\\megha\\Downloads\\Playwright_Programs\\Utils\\file1.txt")
await page.pause();
}
)
