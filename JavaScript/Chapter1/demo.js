console.log("Welcome to javascript");
console.log(10+10); //20
console.log(10+"10"); //1010
console.log(100+ +"100");   //200 rem
console.log(10+"10"+10);  //101010
console.log(10+ +"10"+10);  //30
console.log(10-"2") //8
console.log(10+"2"-"2") //102-2=100
console.log(10>9>8);    //10>9 ->true =1 ; 1>8 false o/p=false
console.log(10*"10");   //100
console.log(10/"10");   //1
console.log(100/"0");   //infinity
console.log(100+ +"100"-"100"*"100");   //-9800 BODMAS
// == checks value
// === value and datatype
console.log(1 == "1"); //true same value
console.log(1 === "1"); //false not same date type
console.log(1=="one")//false not same value
console.log(1==="one")//false not same value and type
console.log(1+true);    //2 true=1
console.log(1-true);    //0 true=1

//variables

var var_one="hello";
console.log(var_one);
var decimalNum=100;
var doubleNum=100.113;
var hexadecimalNum=0x1321ABC;
var octalNum=0o31231;
var binaryNum=0b01010;
console.log(
    decimalNum,
    octalNum,
    doubleNum,
    binaryNum
)
console.log(1+true);
console.log(true-false); //1-0=1
console.log("1"+true);//1tr
// ue
console.log(+"1"+true); //2
var x=true;
x==true?console.log("Hello"):console.log("Bye");


//String
var sub="JavaScript";
var wish=`welcome to ${sub}`;
console.log(wish);

var sub_one="ReactJs";
var sub_two="NodeJs";
var stack=`${sub_one}=>${sub_two}`
console.log(stack);

var tb_name="employees";
var sal=4000;
var sql=`select * from ${tb_name} where esal>${sal}`;
console.log(sql);


//datatypes
//undefined ->value will be there but it is of no use that is memory is occupied like bench people
//null->no value no memory like no job

var x1;  
console.log(x1); //undefined

x1=null;
console.log(x1);

console.log(undefined==undefined)//ture
console.log(undefined===undefined)//ture
console.log(undefined==null)    //true
console.log(undefined===null)   //false

//bigint at the end keep "n" so that we can print big number also
var bigint=123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456123333333333333333333333333333333333333333332387654688765567887655678765567887654678763456n;
console.log(bigint);

console.log(typeof "hello");    //string
console.log(typeof 100);    //number
console.log(typeof true);   //boolean
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);

console.log(1n+2n);
