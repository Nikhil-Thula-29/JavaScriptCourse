//for loop
for(var i=0;i<5;i++){
    
}
console.log(i);//var:5 //let:error i is not defined

//var keyword breaks the scope rule
//let keyword obeys the scope rule


var sub="JavaScript";
var sub="Nikhil Thula";
console.log(sub);   //var:Nikhil Thula  //let gives error it wont allow duplicates



//global
let data=100;
//console.log(data);


//block
{
    //local
    let data=200;   //actually when we use var 200 should be accessible inside that block only
    
}
console.log(data);  //by var 200 wrong it is local so use let

// If any block of code effecting global member called as global polluting issue
// Global polluting issue raised bcz of var keyword
// We can overcome global polluting issue by using keyword


//var msg;    //variable declaration
//var msg="Hello"  //variable intilization

var msg="Hello";
console.log(msg);

console.log(xyz);   //undefined with var but expected error
var xyz=600;        //so use let

//getting undefined before declaration and initialization called as variable hoisting
//we can overcome variable hoisting with the help of let keyword.

 /*    var	                                let
    ES1                 	        ES6
Scope rule break	            Scope rule follows
Duplicate members allows	   Duplicate not allow
Global polluting issue	        We can overcome
Variable hoisting raised	    We can overcome */

const value =100;
//value=2000;//error due to const


//we cant modify complete array but we can modify inside its values by using const keyword
const arr=[1,2,3,4,5];
arr[0]=100;
arr[2]=300;
arr[5]=600; //extra added
console.log(arr);
arr.pop();  //remove last 
console.log(arr);
arr.shift();
console.log(arr);

const obj={
    "one":"React",
    "two":"Angular",
    "three":"java"
};
//error due to const we can modifiy inside only
 /*    obj={

} */

 obj.one="harish";
 obj.three="kiran";
 console.log(obj);

 