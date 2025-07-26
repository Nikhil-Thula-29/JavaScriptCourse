/* array-collection of indexed elements called as array
index starts from 0
we will represent the array by using [] but in java int[] arr=new int[5] or int[] arr={1,2,3}; diff is {}
 */

//length
/* let arr=[10,20,30,40,50]
console.log(arr.length);    //5
console.log(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],arr[-1]);    //10 20 30 40 50 undefined undefined
arr.length=3;   //making the length to 3 removing 40 and 50
console.log(arr[0],arr[2],arr[3],arr[4],arr[-1]);   //10 30 undefined undefined undefined */


//push()->add the element at end
//pop()->delete element at end
//unshift->add the element at beginning
//shift->remove the element from begining

/* let arr=[20,30,40];
console.log(arr);   //[ 20, 30, 40 ]
arr.push(50);
console.log(arr);//[ 20, 30, 40, 50 ]
arr.unshift(10);
console.log(arr);   //[ 10, 20, 30, 40, 50 ]
arr.pop();
console.log(arr);   //[ 10, 20, 30, 40 ]
arr.shift();
console.log(arr);//[ 20, 30, 40 ] */

//delete
/* let arr=[10,20,30,40,50];
console.log(arr.length);       //5
delete arr[0];
console.log(arr);   //[ <1 empty item>, 20, 30, 40, 50 ]
console.log(arr.length);    //5->drawback of delete it wont remove memory
 */


//concatination
/* let arr1=[10,20,30];
let arr2=[40,50,60];
let arr3=[...arr1,...arr2]; //used for concatination ...spread operators
console.log(arr3); */


//making duplicate or xerox copy by ...spread operator same as json line no 178
/* let arr1=[10,20,30];
let arr2=[...arr1];
console.log(arr1);  //[ 10, 20, 30 ]
console.log(arr2); //[ 10, 20, 30 ]

arr1.push(46);
arr2.pop();
console.log("Arr1 ",arr1);  //Arr1  [ 10, 20, 30, 46 ] added thing wont change in duplicat copy
console.log("Arr2 ",arr2); //Arr2  [ 10, 20 ] */


/* we are creating duplicate copy of arr1 and creating it as arr2 if made changes in arr2 it wont reflect in arr1 it Is called immutablitiy */
/* let arr1=[20,30,40];
let arr2=[...arr1];
//console.log(arr1);
//console.log(arr2);

arr2.push(50); //add end
arr2.unshift(10);//add first
console.log(arr1);
console.log(arr2); */


/* let arr1=[10,20,30,40,50,60,70,80,90,100];
//indexs start from 0 to 9 if I want to remove 40 its index is 3 how many no needed give that like 2
arr1.splice(3,4);   //to remove 40and50,60,70(4 elements);//[ 10, 20, 30, 80, 90, 100 ]
console.log(arr1);  //[ 10, 20, 30, 80, 90, 100 ]
arr1.splice(5,1);  
console.log(arr1);  //[ 10, 20, 30, 80, 90 ]

arr1.splice(3,0,40,50);     //we can add by using splice 3->index,0->we are not deleting so 0,40 and 50 we are adding
console.log(arr1);  //[10, 20, 30, 40, 50, 80, 90]
arr1.splice(0,1,5,6,7); //0 index to add,1 no.of items are deleted i.e 10,567 are added
console.log(arr1);      //[5,  6,  7, 20, 30,40, 50, 80, 90]
arr1.splice(9,0,100);
console.log(arr1);
 */

/* let arr1=[0,1,2,3,4,5,6,7,8,9]
arr1.splice(0,1);
console.log(arr1);
arr1.splice(8,1);
console.log(arr1);  //[1, 2, 3, 4, 5, 6, 7, 8]
arr1.splice(3,1);   //rem upto 3 it will be and after 3 i.e 4th place it will delete
console.log(arr1);  //[1, 2, 3, 5, 6, 7, 8]

arr1.splice(7,0,9); //at 7th place we need add and 0 no need to delete and add 7
console.log(arr1);  //[1, 2, 3, 5, 6, 7, 8, 9]

arr1.splice(0,0,0);  //[0, 1, 2, 3, 5, 6, 7, 8, 9]
console.log(arr1);

arr1.splice(4,0,4);
console.log(arr1);  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] */



/*
//map()
//used to manipulate each element
console.log(
    [1,2,3,4,5].map((ele,index)=>{
        return ele*100;
    })  //[ 100, 200, 300, 400, 500 ]
)

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return [element];   //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]
    })
)

console.log(
    [1,2,3,4,5].map((ele,index)=>{
        return [ele,index]; //[ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 4, 3 ], [ 5, 4 ] ]
    })
)


//rem here {[i]:e} where[] is mandatory rem 
console.log(
    [1,2,3,4,5].map((e,i)=>{
        return {[i]:e};         //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
    })
)

console.log(
    [1,2,3,4,5].filter((ele,index)=>{
        return ele>=3;
    }).map((ele,ind)=>{     //index is not mandatory
        return ele*100; //[ 300, 400, 500 ]
    })
)

console.log(
    [{"e_id":111,"e_name":"Nikhil","e_sal":1000},
    {"e_id":222,"e_name":"Kiran","e_sal":2000},
    {"e_id":333,"e_name":"vamshi","e_sal":3000},
    {"e_id":444,"e_name":"Ajay","e_sal":4000},
    {"e_id":555,"e_name":"Venkat","e_sal":5000}].filter((ele,ind)=>{
        return ele.e_sal>=3000;
    }).map((ele,ind)=>{
        return ele.e_name==="Ajay" ? {"e_id":444,"e_name":"Suresh","e_sal":4000}:ele;
    })
)
*/

//reduce()
//it is used to make the array values to single digit like sum of array values
//The process is first 1 will store in firstEle, and 2 will store in accu 1+2=3, 3 will store in firstEle, 3+3(next ele)=6,again stored in firstEle,6+4=10,10+5=15
/* console.log(
    [1,2,3,4,5].reduce((firstElement,accumlator)=>{     //any thing can be written not only firstElement,accumilator
        return firstElement+accumlator;
    })  //15
)


console.log(
    [100,200,300,400,500].reduce((firstElement,accumlator)=>{     //any thing can be written not only firstElement,accumilator
        return firstElement+accumlator;
    })  //1500
)
 */

/* console.log(
    [1,2,3,4,5].map((ele,ind)=>{
        return ele*100;
    }).filter((ele,i)=>{
        return ele>=100;
    }).reduce((firstele,accu)=>{
        return firstele+accu;
    })
) */   //1500

/* console.log(
    ["javascript","to","welcome"].reduceRight((firstele,acc)=>{
        return firstele+" "+acc;
    })      
) */


//REM: splice and slice both are different slice cut directly but splice will print after that elements also
//slice means give only that elements but splice means gives remaining elements
//index will be negative also -1,-2,-3,... from backside i.e from 100
//100=-1,90=-2,80=-3
/* let arr1=[10,20,30,40,50,60,70,80,90,100];
console.log(arr1.slice(4,6))   //[ 50, 60 ] //4 included and 6 exclued in index
console.log(arr1.slice(7,9));   //[80,90] //7 means 80 included and 8 means 90 included but 9 is not included i.e 100
console.log(arr1.slice(0,1));   //[10]
console.log(arr1.slice(9,10));  //[100]
console.log(arr1.slice((1,4))); //[20,30,40]
console.log(arr1.slice(-6,-4)); //[50,60] -from backside
console.log(arr1.slice(-10,-9));  //[10]
console.log(arr1.slice(-1));    //100
console.log(arr1.slice(-4,-1));//70,80,90 */


//if [[]] is used then only use flat(1), if more than one use flat(Infinity) 
/* console.log(
    [[1],[2],[3]].flat(1)
) // Output: [1, 2, 3]

let result = [
    [[[[[[[[1]]]]]]]],
    [[[[[[[[2]]]]]]]],
    [[[[[[[[[[[[3]]]]]]]]]]]]
].flat(Infinity);

console.log(result);  */// Output: [1, 2, 3]


//imp
/* let arr1=[1,2,3]
let arr2=["one","two","three"]
console.log(
    arr1.map((ele,ind)=>{
        return [ele,arr2[ind]];      
    })  //[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
) */


//here we are making it individual array
/* let arr1=[1,2,3]
let arr2=["one","two","three"]
console.log(
    arr1.map((ele,ind)=>{
        return[ele,arr2[ind]];
    }).flat(Infinity)   //[ 1, 'one', 2, 'two', 3, 'three' ]
) */

//instead of using two function like map and flat use flatMap()
/* let arr11=[1,2,3]
let arr22=["one","two","three"]
console.log(
    arr1.flatMap((ele,ind)=>{
        return[ele,arr2[ind]];
    })   //[ 1, 'one', 2, 'two', 3, 'three' ]
) */

//part-4


//findIndex()
//start
/* console.log(
    [1,2,3,4,5].findIndex((ele,ind)=>{
        return ele==4;  //3
    })
)


console.log(
    [10,20,30,40,50,60,70,80,90,100].findIndex((elem,inde)=>{
        return elem==60 //5
    })
)

//if element is not there then it will be -1
console.log(
    [10,20,30,40,50,60,70,80,90,100].findIndex((elem,inde)=>{
        return elem==5 //-1
    })
)


let arr1=[10,20,30,40,50];
//arr1.splice(2,1);
//console.log(arr1);  //[ 10, 20, 40, 50 ]
arr1.splice(arr1.findIndex((ele,ind)=>{
    return ele==30; 
}),1);  //[ 10, 20, 40, 50 ]  rem here 1 is also req this used when index no is unknown
console.log(arr1);



let arr2=[10,100,1000,10000,20,200,2000,20000];
//arr2.splice(4,1);
//console.log(arr2);
arr2.splice(arr2.findIndex((ele,ind)=>{
    return ele==20
}),1);
console.log(arr2);  //[10,100,1000,10000,200,2000,20000];


let arr3=[
    {"eid":111,"ename":"eone","esal":1000},
    {"eid":222,"ename":"etwo","esal":2000},
    {"eid":333,"ename":"ethree","esal":3000},
    {"eid":444,"ename":"efour","esal":4000},
    {"eid":555,"ename":"efive","esal":5000}]
arr3.splice(arr3.findIndex((ele,index)=>{
    return ele.eid==333;
}),1)   //rem ,1
console.log(arr3);  //o/p expect 3000 every thing will print
 */
//End


//some()
//if atleast one element also it finds then it give true as o/p if not found any one it gives false
/* console.log(
    [1,2,3,4,5].some((ele,ind)=>{
        return ele<=1;
    })  //true
)

console.log(
    [1,2,3,4,5].some((ele,ind)=>{
        return ele>=1;
    })  //true  here also atleast one is satisfied then gives true
) */



//every()
//In every every element has satify the condition then only it is going to give true
/* console.log(
    [1,2,3,4,5].every((ele,ind)=>{
        return ele<=5;
    })  //true
)

console.log(
    [1,2,3,4,5].every((ele,ind)=>{
        return ele<=2;
    })  //false here only 1,2 is satifying so it is giving false  
) */


//find()
//If element is present then it return the same ele if not undefined
/* console.log(
    [1,2,3,4,5].find((ele,ind)=>{
        return ele==3;  
    })  //3
)


console.log(
    [1,2,3,4,5].find((ele,ind)=>{
        return ele==35;
    })
)   //undefined */



//fill()
//It will replace all the elements with selected item like 100
//(200,1) replace all elements by 200 from index 1 to end
/* let arr1=[1,2,3,4,5];   
console.log(arr1.fill(100));    //[ 100, 100, 100, 100, 100 ]
console.log(arr1.fill(200,1));  //[ 100, 200, 200, 200, 200 ]
console.log(arr1.fill(300,2));  //[ 100, 200, 300, 300, 300 ]
console.log(arr1.fill(400,3));  //[ 100, 200, 300, 400, 400 ]
console.log(arr1.fill(500,4));  //[ 100, 200, 300, 400, 500 ]
console.log(arr1.fill(600,1,3));   //[ 100, 600, 600, 400, 500 ]    here 1 index and 3 is excluded 
 */


//Important
//indexOf()
//It repeat the index of elements of whose values are duplicated
//It is used to remove the duplicate from array
//[1,2,2,1,3,4,5]-->Array
//[0,1,1,0,5,6,7]-->Index of above array
let arr1=[10,20,30,10,40,10,20,50];
arr1.forEach((ele,ind)=>{
    console.log(arr1.indexOf(ele),ind);
    console.log("---------------------");
})  //0,1,2,0,4,0,1,7   //repeated elements index repeated

//o/p
/* 0 0
---------------------
1 1
---------------------
2 2
---------------------
0 3
---------------------
4 4
---------------------
0 5
---------------------
1 6
---------------------
7 7
--------------------- */

let arr2=[10,20,30,10,20,30];
arr2.forEach((ele,ind)=>{
    console.log(arr2.indexOf(ele),ind);
})  
/* o/p
0 0
1 1
2 2
0 3
1 4
2 5 */



//Important
let arr3=[100,200,300,100,200,300];
console.log(
arr3.filter((ele,ind)=>{
    return arr3.indexOf(ele)==ind;
})
);  //[ 100, 200, 300 ] by this we can remove duplicates




let numbers = [5, 3, 8, 1, 9];
numbers.sort((a, b) => a - b);  // Ascending order
console.log(numbers);  // [1, 3, 5, 8, 9]


let numbers2 = [5, 3, 8, 1, 9];
console.log(numbers2.sort((a, b) => a - b)[1]); //3


let numbers1 = [5, 3, 8, 1, 9];
numbers1.sort((a, b) => b - a);  // Descending
console.log(numbers1);  // [9, 8, 5, 3, 1]




let fruits = ["banana", "apple", "mango", "cherry"];
fruits.sort();  // Alphabetical
console.log(fruits);  // ["apple", "banana", "cherry", "mango"]


let users = [
  { name: "John", age: 30 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 25 }
];

users.sort((a, b) => a.age - b.age);
console.log(users);
// [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 25 },
//   { name: "John", age: 30 }
// ]
