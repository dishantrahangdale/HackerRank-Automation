const puppeteer = require("puppeteer")

let page;
let browserlaunch = puppeteer.launch(
    {headless:false
     
    }
).then(function(browser){
    let pagearrpromise =  browser.pages();
    return pagearrpromise;
}).then(
    function(browserpages){
        page = browserpages[0];
        let gotopromise = page.goto("https://www.google.com");
        return gotopromise;
    }
).then(
    function(){
        let elementwaitpromise = page.waitForSelector("input[type='text']",{visible:true});
        return elementwaitpromise;
    }
).then(function(){
    let type_pep = page.type("input[type='text']","youtube")
    return type_pep;
}).then(
    function(){
        return page.keyboard.press("Enter");
    }
).then(
    function (){
        return page.waitForSelector(".LC20lb.MBeuO.DKV0Md",{visible:true});
        // console.log("done")
    }
).then(
    function(){
        return page.click(".LC20lb.MBeuO.DKV0Md")
    }
).then(
    function(){
        console.log("fine");
    }
)