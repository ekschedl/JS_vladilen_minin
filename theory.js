const num4 = 42;
const num2 = "42";
console.log(num4 == num2);
console.log(num4 === num2);

/**Array Theory */


//-------------- push  - shift - unshift - pop
const names = ["Katja", "Kostja", "Petja", "Oxi", "Petra", "Sveta", "Kolja", "Kira"];
names.push("Alena");
console.log("Names: ", names);
//names.unshift("Polina"); //  !!! it will be the first ELement, index change
//names.shift();//take away the first element, not delete!
//names.pop();//take away the last element, not delete!
const shift= names.shift();
const pop =names.pop()

console.log("Names: ", names, shift); 
console.log("Names: ", names, pop);


//-------------- to Reversed - reverse
console.log(names.toReversed());// dont change the initial array!
console.log(names);
console.log(names.reverse()); // change the initial array!
console.log(names);


//-------------- toSorted - sort
const abc =["d", "e", "c", "b", "a"]
console.log(abc.toSorted(), abc);// dont change the initial array!
console.log(abc.sort(), abc); // change the initial array!

console.log(names);

//-------------- toSpliced - splice
console.log(names.toSpliced(2, 2)) // dont change the initial array!
console.log(names.splice(2, 2))// change the initial array!
console.log(names);



//-------------- indexOf
const greateWoman = "Kostja" //if the answer by console '-1'  - there is not such const in array
const  index= names.indexOf(greateWoman)
console.log(names[index]);

//-------------- with
const newNamesWithGreate = names.with(2, "Oxi Greate") //dont change the initial array
console.log(newNamesWithGreate); //
console.log(names);

names[index]="Kostja Greate" // change the initial array!
console.log(names[index]); // 
console.log(names);

//-------------- map - includes
const capitalExclamationNames = names.map(function(name) { //dont change the initial array, omly  returns the changed array
    const newName =name.toUpperCase() + "!" // toLowerCase() - opposite
    return newName
})
console.log(capitalExclamationNames);
console.log(names.includes("Kira")); // true or false
console.log(names.indexOf("Kira"));
console.log(names.indexOf("Kira") !==-1);// if indexOf is not  -1 


const people = [
    { name: "Katja", budget: 4200},
    { name: "Petja", budget: 13200},
    { name: "Petra", budget: 300},
    { name: "Kolja", budget: 1200}
    ];




// let findePerson
// for (let person of people) {
//     if (person.budget===13200){
//         findePerson=person}
// }
//console.log(findePerson);

//-------------- find

const findedPerson= people.find(function (person) {
    return person.budget === 13200
    // if (person.budget === 13200){
    //     return true
    // }
}
)
console.log(findedPerson);

//-------------- find  -----  or стрелочная функция people.find((p) => *by default -return-* p.budget === 300)
const finded = people.find((p) => p.budget === 300)
console.log(finded);

//-------------- findIndex
const findedIndex = people.findIndex((p) => p.budget === 300)
console.log(findedIndex);
console.log(people[findedIndex]);

//-------------- filter
let sumBudget= 0
const filtred = people.filter(function(person) {
    return person.budget > 4000}
)
console.log(filtred);
filtred.forEach(function(p){
    sumBudget += p.budget    
})
console.log(sumBudget);

// or other solution:
const sumBudget2= people
    .filter((p) => p. budget >4000)
    .map((p)=> p.budget)
    .reduce((acc, p) => acc + p, 0)
console.log(sumBudget2);


const string = "hi , how are you?"
const reversed =string.split('').toReversed().join('') // split(''). to make string to array
console.log(reversed);
