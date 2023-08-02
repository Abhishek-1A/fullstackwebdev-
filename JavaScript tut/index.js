// varible constant and comment 

//var score=23;
var score=56;  /// redeclare
//console.log(score);

// let points = 567;
// constant 
// const abhi=12;
//console.log(abhi)

// STRINGS
// console.log("Hello coders");
// let firstName = "Abhishek";
// let lastName = "kumar";
//console.log(firstName,lastName); //  generate bydefault a space bet f n l

// STRING CONCATINATION

// METHOD 1 USING + OPERTOR
//let fullName = firstName + " " + lastName;
//console.log(fullName);

// METHOD 2 USING TEMPLATE LITRALS
//let fullName = `i am good ${firstName} ${lastName}`
//console.log(fullName);

// GETING STRING CHARACTER
//console.log(firstName.toUpperCase());

// let hobbies = "   i like to  play cricket";
// trim method - clear all the space 
// console.log(hobbies.trim()); 
// indexOf
//console.log(hobbies.indexOf("play"));

// inclde method
//console.log(hobbies.includes("play"));

// // slice methode
// let fullnaam = "abhishekkumar";
// console.log(fullnaam.slice(0,5));



// JAVASCRIPT BY TECH GUN

// if- elsecondition


/*let age =15;
let hasvotercard= 'no';
if(age>12 && hasvotercard=='yes') {
    alert("you can vote");
} else{
    alert("you can not vote");
 }   */

//  TERNARY OPERATOR

let isLoggedin =1;
/*
if(isLoggedin==0) {
    document.write('login');
} else{
    document.write("logut");
}  */

// let option = isLoggedin == 1 ? "Logout" : "Login";  //  ternary operator
// document.write(option);

// LOOPS

// let counter=1;
// while(counter<=10) {
//     document.write('techgun');
//     counter++;
// }

// let counter=1;
// let sum=0;
// while(counter<=100) {
//     if(counter % 2 == 0) {
//         sum = sum+counter;
//     }
//     counter++;
// }
// document.write(sum);

// break continue and nested

// let counter=1;
// for(let counter=1; counter<=10; counter++) {
//     if(counter==5) {
//         continue;
//     }
//     document.write(counter);
//     document.write('<br>');
//     for(counter2=1; counter2<3; counter2++) {
//         document.write('hello abhi');
//         document.write('<br>');
//     }
// }

// alert prompt confirm

// let age = prompt('Enter your age', 20);   // this is bydefault 
// if(age != null) {
//     document.write(`your age is ${age}`);
// }
// else {
//     document.write('Age field was blank');54

// }

// let response = confirm('Are you sure, you want to Delete');
// if(response){
//     document.write('deleted');
// }
// else{
//     document.write('not deleted');
// }

// TYPE CONVERSION
// 1  String()
// 2  Number()
// 3  Boolean()

// let type = 4;
// console.log(typeof type);

// let newtype = String(type);
// console.log(typeof newtype);


// STRING MANPULATION
// let str = "Abhishek \\ kumar";
// console.log(str);

// Array

let book = ["maths", "chem", "bio", "physics", "hindi"];
// let book=new Array ["maths", "chem", "bio", "physics", "hindi"]

//book.push("environment");
// book.unshift("environment");
// book.pop()

// book.shift();

// book.splice(1, 1);
// console.log(Array.isArray(book));


// FUNCTIONS

// function multable(num) {
//     for(i=1; i<=10; i++) {
//         document.write(`${num} x ${i} = ${num*i}`);
//         document.write("<br>");
//     }
//     document.write("<br><br>");
// }
// multable(3);
// document.write("Hello boss <br>");

// multable(5);

// argument object
// function add(){
//     if(arguments.length==0) {
//         console.log("No parameter passed !");

//     } else {
//         let sum=0;
//         for(let i=0; i< arguments.length; i++) {
//             sum += arguments[i];
//         }
//         console.log(sum);
//     }
    
// }
// add(5,7,10);

// local variable - define under the fuction
// global variable- define outside the function


// let car = "Audi";  // global var

// function add(){
//     let result= 87;    //local var
    
// }
// add();


// object properties
// let person = {
//     firstname: 'Abhishek',
//     lastname:'kumar'
// };
// person.age='20';
// person.firstname='Abhi';
// delete person.lastname;
// console.log(person);
// console.log('age' in person);

// itrate over all the key of abject

// for(let key in person){
//     console.log(key + ": " + person[key]);
// }


// let person = {
//     firstname: 'Abhishek',
//     lastname:'kumar',
//     sayHello () {
//         console.log("Hello ! i am "+this.firstname +" and i have a "+ car.brand +" car");
//     }
// };

// let car={
// brand: 'tata',
// model:'safari'
// }

// person.sayHello();

// generate random number

// let x=Math.floor(Math.random() * 10);  // it generate 1 to betw 10
// console.log(x);

// SET DATE AND TIME

// let x = new Date("October 13, 2018 11:12:33");
// console.log(x);
// METHODS OF DATE AND TIME
// we can get date time mnth we can check by using get method

// console.log(x.getFullYear());

// SET METHODE
// x.setFullYear(2020);
// x.setMonth(5);
// console.log(x);

// set date after some extended date

// let x = new Date("October 13, 2018 11:12:33");
// let y = new Date("October 13, 2018 11:12:33");

// y.setDate(x.getDate() + 50);
// console.log(x);
// console.log(y);

// COMPARE DATE OBJECT

// let x = new Date("October 13, 2018 11:12:33");
// let y= new Date("October 13, 2003 11:12:33");

// if(x  > y) {
//     console.log("x is past Day");
// } else if(y > x) {
//     console.log("x is future Date");
// } else {
//     console.log("x is same Date");
// }

// NE KEYWORD OBJECT DECLARATION
// var person= new Object();
// person.Name = "Abhishek kumar";
// person.Age= "20";
// person.education ="B-tech";

// console.log(person.education);


// GETTER AND SETTER METHOD

// var person= {
// name: "Abhishek kumar",
// Age: " 20",

//  get getname() {
//   return this.name.toUpperCase();
//   }
// };

// console.log(person.getname);

// setter method
// var person= {
//     name: "Abhishek kumar",
//     Age: " 20",
    
//      set setname(n){
//        this.name=n.toUpperCase();
//       }
//     };
//     this.setname="mohinikkhj";
//     console.log(person);
    
    
// OBJECT CONSTRUCTURE FUNCTION

// var student = {
//     firstname="Abhishek",
//     lastname="kumar",
//     age: 20,
//     class: 12
// }

// function student(first, last, age, cls){
// this.firstname=first;
// this.lastname=last;
// this.age=age;
// this.class=cls;
// }

// prototype method

// IF WE WANT TO ADD SOMETHING IN CONSTRUCTURE THEN WE HAVE TO USE PROTOPTYPE 


//   student.prototype.nationality="indian";

// var student1 = new student("Abhishek", "kumar", 20, 45);

// var student2 = new student("mohini", "kumari", 22, 20);
// // student1.natioality="indian"
// console.log(student2.nationality);   // this will add but not show


// NESTED OBJECT IN JS

// var user = {
//     id:101, 
//     email: "kua77663@gmail.com",
//     personalInfo: {
//         name: "Abhishek",
//         adress: {
//        villge: "Mardapur",
//        city: "siwan",
//        country: "india",
//         }
//     }
// };
// console.log(user.personalInfo.adress.country);



// hoisting
// ye declaration ko upper lekr jata hai
x=45;
console.log(x);

var x;




