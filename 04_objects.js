const person = {
 name: 'Katja',
 age: 42,
 isYoutuber: false, 
 languages: [ 'ru','de', 'en', 'it'],
 adress:{
  city: 'New York',
  street: 'Nevsky'
 },
 'complex key': 'complex value',
 [1 + 3]: 'computed value',
 [new Date().getTime()]: 'computed value2',
 ['key_' + 21*2 ]: 'computed value',
 greet(){
  console.log('greet from person');
 },
arrow: ()=> {
  console.log('arrow from person'); // this we cant use, arrow f dont make the contex
},
info(){
 console.log('Person name', this.name);// this we can use,  make the contex
 
}
}
console.log(person.adress);
console.log(person['adress']);
person.greet()
person.arrow()

person.age++
console.log(person.age);
delete person.languages
console.log(person);

// Destructoring
// const age = person.age 
// const name = person.name 
// const isYoutuber= person.isYoutuber


//short form
const {age, name: firstName= 'test', isYoutuber} = person

console.log(isYoutuber, age, firstName);


for(let key in person)
  //console.log(key);
  if(person.hasOwnProperty(key)){  //you need check  it ! becouse of prototype
    console.log(person[key]);
  }


  const keys = Object.keys(person)
  console.log(keys);
  keys.forEach(key => {
    console.log(person[key]); 
    
  })
  

  const logger = {
    keys(){
      console.log('Object.keys:', Object.keys(this));
    },

    keysAndValues(){
      Object.keys(this).forEach((key)=>{
        console.log('Key:', key);
        console.log('Value:', this[key]);
      })
    },
  }

  logger.keys.bind(person)()
  // logger.keys.call(person, false,  , , , , ) // so much parameters as you want
  logger.keys.apply(person , [false]) //  only two parameters and the second parameter ist  in[]


class Human { 
  /*static*/ isHuman=true; //  if you use static , then its belongs only to class Human, not to its  prototypes
  humanGreet(){
    console.log('Hello from human', this.name);
  }}


class PersonClass extends Human{
  constructor(name, age){
    super()// f calls parants constructor
    this.name= name ?? 'Undefinded name'
    this.age = age ?? 'Undefinded age'
    
  }

    sayHello () {
      console.log('Hello from', this.name);
      
    }
}

const person1 =new PersonClass( 'Katja', 45)
const person2 =new PersonClass( 'Elena', 94)
person1.sayHello()
person2.sayHello()
person2.humanGreet()


  /*
const person = {
  name: 'Vladilen',
  age: 29,
  isYoutuber: true,
  languages: ['ru', 'en'],
  address: {
    city: 'Saint-Petersburg',
    street: 'Nesvky',
  },
  'complex key': 'complex value',
  ['key_' + 21 * 2]: 'computed value',
  greet() {
    console.log('Greet from person', this)
  },
  arrow: () => {
    console.log('Person Arrow', this)
  },
  info() {
    console.log('Person name', this.name)
  },
}

// console.log(person.address)
// const addressKey = 'address'
// console.log(person[addressKey])
// console.log(person['complex key'])
// person.age++
// person.languages.push('de')
// console.log(person.languages)
// person.address = undefined
// delete person.address
// console.log(person)

// Destructoring
// const age = person.age
// const name = person.name
// const languages = person.languages

// const name = 'Petr'

// const { age, name: firstName = 'TEST', languages } = person

// console.log(languages, age, firstName)

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     console.log(person[key])
//   }
// }

// Object.keys(person).forEach((key) => {
//   console.log(person[key])
// })

const logger = {
  keys(withText = true) {
    if (withText) {
      console.log('Object keys:', Object.keys(this))
    } else {
      console.log(Object.keys(this))
    }
  },

  keysAndValues() {
    Object.keys(this).forEach((key) => {
      console.log('Key:', key)
      console.log('Value:', this[key])
    })
  },
}

// const bound = logger.keys.bind(person)
// bound(false)
// logger.keys.call(person, false)
// logger.keys.apply(person, [false])

class Human {
  static isHuman = true

  humanGreet() {
    console.log('greet from human')
  }

  toString() {
    console.log('to string')
  }
}

class Person extends Human {
  constructor(name, age) {
    super()
    this.name = name ?? 'Undefined name'
    this.age = age ?? 'Undefined age'
  }

  sayHello() {
    console.log('Hello from ', this.name)
  }
}

const person1 = new Person('Vladilen', 30)
const person2 = new Person('Elena', 21)

// console.log(Person.isHuman)
*/