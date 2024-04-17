function calcdivide(a,b){
try{
    if(b==0){
        throw new Error("cannot devide by 0");
    } 
    else{
        console.log(a/b);
    }
} catch(err) {
    console.log(err.message);
   }  
}

calcdivide(10,0);