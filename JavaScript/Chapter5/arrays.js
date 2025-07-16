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