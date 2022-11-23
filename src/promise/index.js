const promise = new Promise(function (resolve, reject){
  resolve("Hey!")
});

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
  if(cows > 10){
    resolve(`We have ${cows} cows on the farm`)
  } else {
    reject("There is no cows")
  }
})

countCows.then((result) => {
  console.log(result)
}).catch((e) => console.log(e)).finally(()=> console.log("finnaly"))