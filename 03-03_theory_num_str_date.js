// Date and time app ---

let mode='time'
const output1 = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')


function bindMode(name){
    return function(){
        mode= name
        update()
    }
}

fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')


// this functions are better via function bindMode
// fullBtn.onclick =function(){
//     mode ='full'
//     update()
// }
// dateBtn.onclick =function(){
//     mode ='date'
//     update()
// }
// timeBtn.onclick =function(){
//     mode ='time'
//     update()
// }


update()
setInterval(()=> update(), 1000)

function update () {
    output1.textContent =format(mode)
}
//Pure Function
function format(formatMode){
    const now= new Date()
switch (formatMode){
    case 'time': return now.toLocaleTimeString();
    case 'date': return now.toLocaleDateString();
    case 'full': return now.toLocaleDateString() + ' ' +now.toLocaleTimeString();
    default: return now.toLocaleTimeString()
}
}

///--Date
console.log(new Date());
const nowDate =new Date();
const start =new Date(); //01.01.1970 start
const start2 =new Date(1000*60*60*24*365); //01.01.1971
console.log(start);
console.log(start2);
console.log(nowDate.getFullYear())
console.log(nowDate.getMonth()) //begin by 0,1,2...
const dateNeeded= new Date(1983, 4, 18, 9, 0, 0)
console.log(dateNeeded);

console.log(nowDate.toDateString());
console.log(nowDate.toTimeString());
console.log(nowDate.toLocaleDateString());
console.log(nowDate.toLocaleTimeString());






// Num ----

const pow= 10e3
const big = 1_000_000// separate with _ 
console.log(pow);

console.log(big);

console.dir(Number)
console.log(Number.MAX_SAFE_INTEGER);
console.log(Math.pow(2, 53)-1);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.isFinite(1 / 0));
console.log(typeof Number(1 / undefined)); // 'number' // type of NaN  in JS - Number
console.log(Number.isNaN(1 / 0));

const strInt = 41
const strFloat = 41.41
console.log(Number(strInt))
console.log(Number(strFloat))

console.log(parseInt(strInt))
console.log(parseInt(strFloat))
console.log(parseFloat(strFloat))
console.log(+strInt, +strFloat) //string to number

const fixed = (0.1 + 0.2).toFixed(10)
console.log(parseFloat(fixed)); //toFixed teturns always string  , we need + at first


//BigInt - kant be float, only Int
console.log(BigInt(Number.MAX_SAFE_INTEGER)+ 9595994n); //make "n" for typ BigInt
console.log(-43n);
console.log(parseInt(10n) - 4)
console.log(10n - BigInt(4));
console.log(5n /2n); // 2, weil not float, only int


//Math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.sqrt(25));
console.log(Math.pow(2, 3));
console.log(Math.abs(-12));
console.log(Math.max (2, 3, 200, 100, 300));
console.log(Math.min(2, 3, 200, 100, 300));
console.log(Math.floor(4.9));// always to smaller
console.log(Math.ceil(4.1));// always to bigger
console.log(Math.round(4.1));// round normal
console.log(Math.trunc(4.1));// rreturns always only integer part
console.log(Math.random());// 

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const num =getRandomNumber(10,100)
console.log(num);



// Sting -------

const firstName ='Katja'
const age = 17


function  getAge(){
    return age
}
const output =`
hallo 
my name is 
${firstName}. I am ${getAge()} years old!
${getAge() > 18 ? `I can drive` : `I can't drive`}
`
console.log(output);

console.log(firstName.length);
console.log(firstName.toUpperCase()); // only returns new string, dont change the initial sting
console.log(firstName.toLowerCase()); // only returns new string, dont change the initial sting
console.log(firstName.charAt(2));
console.log(firstName.indexOf('a'));
console.log(firstName.indexOf('f')); //-1
console.log(firstName.startsWith('ka')); //false
console.log(firstName.toLowerCase().startsWith('ka')); //true
console.log(firstName.endsWith('ja')); //true
console.log(firstName.repeat(10)); 

const password ='    my supper pass'

console.log(password.trim())


// Function declaration----- we can at first  use () it and then declarieren
greet('Katja')
function  greet(name) {
    console.log('Hallo ' + name);
}


//Function Expression  --- at first we have to  declarieren it and the use()

const greet2 =function (name){
    console.log('2 Hallo ' + name);
}
greet2('Katja')

console.dir(greet2)

// ----- setTimeout
setTimeout(function() {
    greet('Katja setTimeout')    
}, 1500)


// ----- setInterval
let counter = 0
 const interval = setInterval(function() {
 
  if(counter === 5) {
    clearInterval(interval)
  } else 
  console.log(++counter + 'setInterval')
}, 1500)


// Arrow Function
// const arrow =(name, age) => {
//     console.log('Hallo ' + name, age +' from arrow function');
// }
const arrow = (name, age)=> console.log('Hallo ' + name, age +' from arrow function short line');
arrow('Katja', '3 ')


// N2
function pow138(num, exp) {
    return Math.pow(num, exp)
}
console.log(pow138(2, 3));

// short form of array function:
const pow144 = (num, exp)  => Math.pow(num, exp)
console.log(pow144(2, 5));


// ---- Default Parameters
 const sum =(a=40, b=a/2 ) => a+b
 console.log(sum(3, 2));
 console.log(sum(10));

 function sumAll(... numbers) {  //makes an array and put there all what you give  by  console.log(sumAll(1, 2, 3, 4, 5,6,7,8));
// let res = 0
// for( let num of numbers)
//     res+=num
//     return res
// modern short form:
  return numbers.reduce((acc, cur) => (acc +=cur), 0)
 }
 console.log(sumAll(1, 2, 3, 4));


 // Closures - замыкания /function with one function 
  function createPerson(name) {
    return function(lastname){
        console.log(name + '  ' + lastname);
    }
  }
const addListName= createPerson("Olenka")
addListName("Mnina")
addListName("Petrova")


 
