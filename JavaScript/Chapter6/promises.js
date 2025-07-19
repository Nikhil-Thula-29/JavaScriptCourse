//Promises
//Def: It is an object that represents completion or failure of an asynchronous operation
//promises are proper communication between "producer" and "consumer" 
//producer will generate the promises
//consumers will create promises by using promise  class
//consumer consumes in two ways
//1. then() and 2. async and await



/*
//producer
let promise1=new Promise((resolve,reject)=>{
    resolve("Yes, It is working");  //positive result
});

//consumer
promise1.then((posRes)=>{
    console.log(posRes);    //Yes, It is working
},(errRes)=>{
    console.log(errRes);
});
*/


/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("It is working in setTimeout");
    },5000);
})

promise1.then((posRes)=>{
    console.log(posRes);    //It is working in setTimeout
},(errRes)=>{   
    console.log(errRes);    
}) */


/*
//create 3 promises for every promise create consumer
let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello2");
    },10000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});


//create 3 consumers for 3 produced promises
promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});

promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});

promise3.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/



//In above code we are writing same code for 3 times in consumer which not correct so use Promise.all()
/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello2");
    },10000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);    
}) */
//o/p: [ 'Hello1', 'Hello2', 'Hello3' ]
//promise1 result will store into 0-index,promise2 will store in 1-index,...
//We can only see the result after (max Time)15 sec which is maximum setTimeout until that we cannt see other results also in Promise.all()


//To know which promise execute first will get to know by Promise.race()
/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello2");
    },10000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});

Promise.race([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});  */     //Hello1


//Here Promise.all() shows only rejected promise it will leave all the resolved promises so that's why o/p is Error
/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error");
    },10000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});

Promise.all([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
})  */     //Error



//Here Promise.allSetteled() will give the positive results like opp to all()
/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error");
    },10000);
});

let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});

Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
}); */

/* o/p
[
  { status: 'fulfilled', value: 'Hello1' },
  { status: 'rejected', reason: 'Error' },
  { status: 'fulfilled', value: 'Hello3' }
] */


//day2
/* let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },0);
});

//this is having more priority bcz of setTimeout function
let promise2=new Promise((resolve,reject)=>{
   resolve("Hello2");
});

promise1.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});



promise2.then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});  */     //Hello2     Hello1


//Old approach using .then latest is async and await
//async and await makes it's easier to read, write, debug, and understand, compared to .then it is complex to read.
//async returns promise
//async is used before a function to make it return a Promise automatically.
//await is used inside an async function to pause the code until a Promise is resolved.
//await makes only inside the async function, and doesn’t block the rest of the program.
//here remaining function outside the function will execute only that function will await

/* let promise1=new Promise((resolve,reject)=>{
    resolve("Hello");
});

async function my_fun(){
    let result=await promise1;
    console.log(result);
}
my_fun(); */   //Hello



//callback hell
/* let add=(num,callback)=>{
    return callback(num+5,false);
}
let sub=(num,callback)=>{
    return callback(num-3,false);
}
let mul=(num,callback)=>{
    return callback(num*2,false);
}
let div=(num,callback)=>{
    return callback(num/2,false);
}
add(5,(addRes,error)=>{
    if(!error){
       sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        })
                    }
                })
            }
       })
    }
}) */

//To overcome the callback hell we will use promises
/* let add=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
};

let sub=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num-3)
    })
};

let mul=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
};

let div=(num)=>{
    return new Promise((resolve,reject)=>{
        resolve(num/2+3);
    })
}


//using async and await
async function calc(){
    let addRes=await add(5);
    let subRes=await sub(addRes);
    let mulRes=await mul(subRes);
    let divRes=await div(mulRes);
    console.log(addRes,subRes,mulRes,divRes);
}
calc();


//using .then()
add(5).then((posRes)=>{
    sub(posRes).then((posRes)=>{
        mul(posRes).then((posRes)=>{
            div(posRes).then((posRes)=>{
                console.log(posRes);
            },(errRes)=>{

            })
        },(errRes)=>{

        })
    },(errRes)=>{

    })
},(errRes)=>{

}) */


//There are two types of Network calls
//1. Synchronous    2.Asynchronous
//Synchrous: Executing the nework calls one by one is called synchronous   (ex: checking tickets)
//Asynchronous/Ajax calls: Executing the networks calls multiple at time is called asynchronous(ex:leaving hall after movie)
//create ajax.html file
//IMP: to make asynchronous/ajax calls we need to use jquery library or cdn 
//i.e we have used jquery cdn in ajax.html to use ajax calls