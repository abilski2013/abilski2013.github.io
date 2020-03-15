var today = new Date();
var curHr = today.getHours();

console.log(`current hour of day: ${curHr}`);

if (curHr < 12) {
  console.log('good morning');
  d3.select('.greeter').text("Good Morning");
} else if (curHr < 18) {
  console.log('good afternoon');
  d3.select('.greeter').text("Good Afternoon");
} else {
  console.log('good evening');
  d3.select('.greeter').text("Good Evening");
}