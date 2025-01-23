//Write a function that takes as argument a date instance (a) and a number (b).
//  It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.

function myFunction(a, b) {
  a.setDate(a.getDate() + b);
  return a.getDate();
}

console.log(myFunction(new Date("2000/01/01"), 2));
