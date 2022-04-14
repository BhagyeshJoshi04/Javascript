// starting js
// var let const
// variable declaration 
var a; //int string float dont need 
// variable initialization
a=10;
console.log(typeof a);
console.log(a);

a="hello"; //re initialize of variable a
console.log(a);
// typeof operator -> it tells us the type of data stored in a variable
console.log(typeof a);

a=true;
console.log(a);
console.log(typeof a);

a=null;
console.log(a);
console.log(typeof a);

// number
var num=10;
console.log(num);
var float=2.4;
console.log(float);

//boolean
var t=true;
var f=false;
console.log(t);
console.log(f);

//string 
// ' '," ",` `
// single quotes,double quotes,backtick
var str='a';
console.log(typeof str);

str="How you doin ?\n i am fine. how about you ?"
console.log(str);
// backslash n(\n) is used for new line

var b=`hello guys 
i hope you all are fine`
console.log(b);
// in backtick no need to use backslash n 

var num=50;
console.log(`half of ${num} is ${num/2}`);

// var has some problem

// 1) redeclaration is allowed
var r="hello"
console.log(r);

var r=100;
console.log(r)

// overcome karne ke liye 
// let keyword is used 

let l= 100;
console.log(l)

// let l="hi"  //SyntaxError: Identifier 'l' has already been declared
// console.log(l)

// we can reinitialize but we can not redeclare it
l=300
console.log(l)

// na hi redeclare na re initialize 
const x=2
console.log(x)
//const x ="hello"
// x=8 //TypeError: Assignment to constant variable.


// loops in js

var num=10;

for(var i=0;i<num;i++)
{
    if(i%2==0)
    {
        console.log("num is even");
    }
}

