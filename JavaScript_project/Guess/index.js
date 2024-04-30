let input = document.getElementById('input')
let btn=document.getElementById('btn');
let wrng=document.getElementById('wrng')
let gues =document.getElementById("guesses");
let numGuesess=0;

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);

btn.addEventListener("click", ()=>{
    guesssesNumber();
})
function guesssesNumber() {
    if(input.value<1 || input.value > 100 || isNaN(input.value))
    wrng.innerHTML = "Enter between 1 to 100";
else {
    numGuesess++;
    guesssesNumber.innerHTML= "No of Guess : " + numGuesess;
    if(input.value>answer) {
        wrng.innerHTML="You Guessed too High !";
        input.value="";
    } 
    else if(input.value<answer){
    wrng.innerHTML="You Guessed too low !"
    input.value="";
    } else {
        wrng.innerHTML="You Guessed the correct answer !";
        
    }
}
}