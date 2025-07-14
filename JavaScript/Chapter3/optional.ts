/* ? means optional not compulsary and void means return nothing rem syntax
this optional option is not there in js so we need to use this ts 
by command-> tsc optional.ts it will automatically create optional.js */

/* function fun_one(arg1?:string,arg2?:string,arg3?:string):void{
    console.log(arg1,arg2,arg3);
}
fun_one();          //undefined undefined undefined
fun_one("Hello1");  //Hello1 undefined undefined
fun_one(undefined,undefined,"Hello3");  //undefined,undefined,Hello3
fun_one(null,null,null); //null null null */




/* function fun_one(arg2:string,arg1?:string):void{    //here arg2 need atleast one arg 
    console.log(arg2,arg1);
}
//fun_one();  // Expected 1-2 arguments, but got 0.
fun_one("Hello1");  //Hello1,undefined
fun_one("Hello1","Hello2"); //Hello1 Hello2
fun_one(undefined,undefined);//undefined,undefined
fun_one(null,null);//null null */


/* function fun_one(arg1:string,arg2?:string,arg3:string="Hello",...arg4:string[]):void{

} */



/* any is also datatype here */
/* op1 is mandatory and op2 is static and op3 is optional and react args rem this order */
/* function fun_one(op1:any,op2:any="Helllooo",op3?:any,...op4:any[]):void{
    console.log(op1,op2,op3,op4);
}
//fun_one();  // Expected at least 1 arguments, but got 0.
fun_one("Hello1");//Hello1 Helllooo undefined []
fun_one("Hello1","Hello2","Hello3","Hello4");//Hello1 Hello2 Hello3 [ 'Hello4' ]
fun_one(undefined,undefined,undefined,undefined); */


