//promises are used to handle async operations

const cart=["shoes","pant","kurta"];

//by callbacks
/* createOrder(cart,function(orderId){
    proceedToPayment(orderId);
}); */


//by promise
/* const promise=createOrder(cart);
promise.then(function(orderId){
    proceedToPayment(orderId);
}); */

//In callBacks we are passing to fucntion where we dont have control but in promise we attach so we have more control


var userid="Nikhil";
const user=fetch(userid);
console.log(user);
user.then(function(data){
    console.log(data);
});

//promise is an object representing the completion or failure of asynchronous operation.
//return is mandatory
createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId);
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
   return updateWalletBalance(paymentInfo)
});

// .then(orderId=>proceedToPayment(orderId)); //arrowFunction

