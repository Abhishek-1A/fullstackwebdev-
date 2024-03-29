// console.log("iam forst synchronous js");
// console.log("iam second");

// // asynchronous in js

// setTimeout(() =>{
//     console.log("ASync JS");
// }, 4000);

// console.log("am");/


// callback

// function getData(dataId, getnextData) {
//     // 2s delay
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getnextData){
//             getnextData();
//         }
//     }, 2000);
// }

// // this is callback hell
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3, ()=>{
//             getData(4, ()=> {

//             });
//         });
//     });
// });




// function printHello(){
//     console.log("Hello Ninjas!");
// }

// function printMessage(){
//     console.log("I'm a pro coder!")
// }

// function helper(callback){

//     // Calling the callback() function
//     callback();
// }

// // First call
// helper(printHello);

// // Second call
// helper(printMessage);


// promise

// let promise= new Promise((resolve, reject) =>{
//     console.log("I am promis");
//     reject("some error occured")
// });

// function getData(dataId, getnextData) {
//     return new Prommise((resole, reject) =>{
//         setTimeout(()=>{
//                     console.log("data",dataId);
//                     resole("success");
//                     if(getnextData){
//                         getnextData();
//                     }
//                 }, 5000);
//     });
// }



// promise example  :--> user ask for a num betw 0 to 9 if num is below 5 or above 5

//  var ans= new Promise((resolve, reject) => {
//     var n= Math.floor(Math.random( ) * 10);

//     if(n<5) {
//         return resolve();
//     } else {
//         return reject();
//     }
//  })
//  ans.then(()=> {
//     console.log("below");
//  })
//  .catch(() =>{
//     console.log("Above");
//  })

// permorming promise chaining 

function asycFun1() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
       console.log("data1");
       resolve("success")
        }, 4000)
    })
}

function asyncfun2(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("data2");
       resolve("success")
        }, 4000);
    })
};

   console.log("fetching data1....");
   asycFun1().then((res)=>{
    console.log("fetching data2");
    asyncfun2().then((res) =>{})
    });
   

   