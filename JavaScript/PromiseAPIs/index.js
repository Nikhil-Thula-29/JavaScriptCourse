const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P1 Sucess");
    },3000);
}); 

const p2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("P2 Sucess");
        //reject("p2 fail");
    },1000);
});


const p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        //resolve("P3 Sucess");
        reject("p3 fail");
    },2000);
});


//1.Promise.all
 Promise.all([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
});


//2.Promise.allSettled
Promise.allSettled([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
});

//3.Promise.race
Promise.race([p1,p2,p3]).then(res=>{
    console.log(res);
})
.catch(function(err){
    console.error(err);
});