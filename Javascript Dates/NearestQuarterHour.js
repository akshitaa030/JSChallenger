// Write a function that takes a Date instance as argument. It should return the next nearest quarter hour in minutes.
//  For example, if the given date has the time 10:01 the function should return 15
function myFunction(a) {
  return Math.ceil(a.getMinutes() / 15) * 15;
}

console.log(myFunction(new Date("2000/01/01 08:00:00"))); //0
console.log(myFunction(new Date("2000/01/01 08:20:00"))); //30
console.log(myFunction(new Date("2000/01/01 08:50:00"))); //60
