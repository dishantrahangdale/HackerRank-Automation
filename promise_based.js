const puppeteer = require("puppeteer")
const code = require("./answers")

const loginlink = "https://www.hackerrank.com/auth/login"
const email = "dishant.rahangdale.167@gmail.com";
const password = "Dishant@hack1";

let browserOpen = puppeteer.launch({
    headless:false,
    args:["--start-maximized"],
    defaultViewport:null
})

let page;

browserOpen.then(function(browserObj){
    let browserOpenPromise = browserObj.newPage()
    return browserOpenPromise;
    // console.log("successful");
}).then(function(newTab){
    page = newTab
    let hkopen = page.goto(loginlink)
    return hkopen;
}).then(function(){
    let emailenter = page.type("input[id='input-1']",email,{delay:5});
    return emailenter;
}).then(function(){
    let passenter = page.type("input[id='input-2']",password,{delay:5});
    return passenter;
}).then(function(){
    let loginbuttonclick = page.click("button[data-analytics='LoginPassword']",{delay:50})
    return loginbuttonclick;
}).then(function(){
    let clickonalgo = waitAndClick('.topic-card a[data-attr1="algorithms"]',page)
    return clickonalgo;
}).then(function(){
    let clickbox =  waitAndClick("input[value='warmup']",page)
    return clickbox;
}).then(function(){
    let waitfor5sec = page.waitFor(2500);
    return waitfor5sec;
}).then(function(){
    let allquesPromise = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled",{delay:30});
    return allquesPromise;
}).then(function(questionARR){
    console.log("length = ",questionARR.length);
    let questionwillbesolved = questionsolver(page,questionARR[0],code.answers[0])
    return questionwillbesolved;
})


function waitAndClick(selector,cpage){
    return new Promise(function(resolve,reject){
        let waitForModelPromise = cpage.waitForSelector(selector)
        waitForModelPromise.then(function(){
            let clickModel = cpage.click(selector)
            return clickModel;
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject()
        })
    })
}


function questionsolver(page,question,answer){
    return new Promise(function(resolve,reject){
        let quesWillBeClicked = question.click()
        quesWillBeClicked.then(function(){
            let texteditor = waitAndClick('.monaco-editor.no-user-select.vs',page)
            return texteditor;
        }).then(function(){
            return waitAndClick('.checkbox-input',page)
        }).then(function(){
            return page.waitForSelector('textarea.custominput',page);
        }).then(function(){
            return page.type('textarea.custominput',answer,{delay:10})
        }).then(function(){
            let ctrlPressed = page.keyboard.down('Control')
            return ctrlPressed;
        }).then(function(){
            let aispressed = page.keyboard.press('A',{delay:100})
            return aispressed;
        }).then(function(){
            let xispress = page.keyboard.press('X',{delay:100})
            return xispress;
        }).then(function(){
            let ctrlisunpress = page.keyboard.up('Control')
            return ctrlisunpress;
        }).then(function(){
            let maineditor = waitAndClick('.monaco-editor.no-user-select.vs',page);
            return maineditor;
        }).then(function(){
            let ctrlPressed = page.keyboard.down('Control')
            return ctrlPressed;
        }).then(function(){
            let aispressed = page.keyboard.press('A',{delay:100})
            return aispressed;
        }).then(function(){
            let vispressed = page.keyboard.press('V',{delay:100})
            return vispressed;
        }).then(function(){
            let ctrlisunpress = page.keyboard.up('Control')
            return ctrlisunpress;
        }).then(function(){
            return page.click('.hr-monaco__run-code',{delay:50})
        }).then(function(){
            resolve()
        }).catch(function(err){
            reject();
        })
    })
}