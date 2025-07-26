const cart=["shoes","pant","kurta"];

const promise=createOrder(cart);
console.log(promise);
promise.then(function(orderId){
    console.log(orderId);
    //proceedToPayment(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.error(err.message);
});


//promise will take function which have resolve and reject
function createOrder(){
    //creation of promise
    const pr=new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err=new Error("Cart is not valid");
            reject(err);
        }
        const orderId="12345";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            }, 3000);
             
        }
       
    });
    return pr;

}


function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}

function validateCart(cart){
    return true;
}
