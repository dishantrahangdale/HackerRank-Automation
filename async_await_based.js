const puppeteer = require("puppeteer")
const code = require("./answers")

const loginlink = "https://www.hackerrank.com/auth/login"
const email = "dishant.rahangdale.167@gmail.com";
const password = "Dishant@hack1";


(async function(){
    try{
        let browserOpen = await puppeteer.launch({
            headless:false,
            args:["--start-maximized"],
            defaultViewport:null
        })
        let newTab = await browserOpen.newPage();
        await newTab.goto(loginlink); 
        await newTab.type("input[id='input-1']",email,{delay:5});
        await newTab.type("input[id='input-2']",password,{delay:5});
        await newTab.click("button[data-analytics='LoginPassword']",{delay:50})
        await waitAndClick('.topic-card a[data-attr1="algorithms"]',newTab)
        await waitAndClick("input[value='warmup']",newTab)
        let allProblems = await newTab.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:30})
        console.log(allProblems);
        console.log(allProblems.length);
        await questionsolver(newTab,allProblems[0],code.answers[0]);
    } 
    catch(error){
        console.log(error);
    }
})()




async function waitAndClick(selector,cpage){
    await cpage.waitForSelector(selector)
    let selectorClicked = cpage.click(selector)
    return selectorClicked;
}


async function questionsolver(page,question,answer){
        await question.click() 
        await waitAndClick('.monaco-editor.no-user-select.vs',page)
        await waitAndClick('.checkbox-input',page)
        await page.waitForSelector('textarea.custominput',page);
        await page.type('textarea.custominput',answer,{delay:10})
        await page.keyboard.down('Control')
        await page.keyboard.press('A',{delay:100})
        await page.keyboard.press('X',{delay:100})
        await page.keyboard.up('Control')
        await waitAndClick('.monaco-editor.no-user-select.vs',page);
        await page.keyboard.down('Control')
        await page.keyboard.press('A',{delay:100})
        await page.keyboard.press('V',{delay:100})
        await page.keyboard.up('Control')
        await page.click('.hr-monaco__run-code',{delay:50})
        
        
        // await waitForSelector(".testcase-tab-item.tab-item-color-success.testcase-item",page)
        // await page.keyboard.down('Alt')
        // await page.keyboard.press('ArrowLeft',{delay:100})
        // await page.keyboard.up('Alt');
        // await waitAndClick("",page)
}