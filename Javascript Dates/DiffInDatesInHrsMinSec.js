// Write a function that takes two date instances as arguments.
// It should return an object with the properties 'hrs', 'min', and 'sec'.
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds.

function myFunction(a, b) {
  const hrs = Math.abs(a.getHours() - b.getHours());
  const min = Math.abs(a.getMinutes() - b.getMinutes());
  const sec = Math.abs(a.getSeconds() - b.getSeconds());
  return { hrs, min, sec };
}

console.log(
  myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 09:00:00")) //{ hrs: 1, min: 45, sec: 0 }
);
console.log(
  myFunction(new Date("2000/01/01 08:45:00"), new Date("2000/01/01 08:59:00")) //{ hrs: 0, min: 14, sec: 0 }
);
