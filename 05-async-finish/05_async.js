
// Event loop

const timeout= setTimeout(() => {
console.log('after 2 sec');

}, 2000)

//clearTimeout(timeout) for cleaning of timeout

setTimeout(() => {
  console.log('after 3 sec');
  
  }, 3000)


// let count= 0
//   setInterval(()=> {
// console.log('tick', ++count);

//   }, 1000)



// function delay(callback, time=1000) {
//   setTimeout(callback, time)
  
// }
// delay(()=>{
//   console.log('timeout');
  
// }, 2000)



// better use  PROMISE
const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve([1, 2, 3]);
      reject(('Error in delay')) // Вызов resolve после задержки
    }, time); // Установить задержку на время, указанное в параметре time
  });
  return promise; // Вернуть созданный промис
};

// Пример использования
delay(4000)
  .then((data) => {
    console.log('Timeout  4sec', data)
    return data.map((x) => x ** 2)
})
.then((data) => {
    console.log(data);
  
})
.catch((err)=> {
  console.log(err);
  
})
.finally(() => console.log('Finally'))

const getData =() => new Promise((resolve )=> resolve([1, 2, 3]))
getData().then((array)=> console.log(array));


async function asyncExample(){
  try {  
    await delay(3000)
const data = await getData()
  } catch(err) {
console.log(err)
  } finally {
    console.log('Finally')
  }
}
asyncExample()
/*

// Event Loop

// const timeout = setTimeout(() => {
//   console.log('after 2 seconds')
// }, 2000)

// clearTimeout(timeout)

// setTimeout(() => {
//   console.log('after 3 seconds')
// }, 3000)
// let count = 0
// setInterval(() => {
//   console.log('tick', ++count)
// }, 1000)

// function delay(callback, time = 1000) {
//   setTimeout(callback, time)
// }

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3])
      // reject('Error in delay')
    }, time)
  })
  return promise
}

// delay(2500)
//   .then((data) => {
//     console.log('Timeout', data)
//     return data.map((x) => x ** 2)
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => console.log('Finally'))

const getData = () => new Promise((resolve) => resolve([1, 2, 3]))

async function asyncExample() {
  try {
    await delay(3000)
    const data = await getData()
    console.log(data)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Finally')
  }
}

asyncExample()
*/