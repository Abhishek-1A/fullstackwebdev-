// console.log("iam forst synchronous js");
// console.log("iam second");

// // asynchronous in js

// setTimeout(() =>{
//     console.log("ASync JS");
// }, 4000);

// console.log("am");/


// callback

function getData(dataId, getnextData) {
    // 2s delay
    setTimeout(()=>{
        console.log("data",dataId);
        if(getnextData){
            getnextData();
        }
    }, 2000);
}

// this is callback hell
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4, ()=> {

            });
        });
    });
});