
//JavaScript is a single threaded Language i.e do one thing at a time.
//shortcut for Multiline comment in vscode-->shift+alt+a



/* console.log("Nikhil");

setTimeout(function(){
    console.log("Java Script");
},3000);

console.log("Advance Topics"); */

const cart=["shoes","pant","kurta"];

//callBack 
//order to paymennt to summary
//This Structure is called Pyramid of DOM
api.creatOrder(cart,function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet();
        });
    });
});

//callBacks are available to handle async operations
//Issues with callBacks are 
// 1. CallBack Hell
// 2. Inversion of Control->giving control to another function





