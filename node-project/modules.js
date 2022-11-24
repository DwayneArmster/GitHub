const xyz = require('./people'); 
/* for destructuring, if retrieving a lot of data 
const {people, ages} = require('./people');

console.log(people, ages);
*/

console.log(xyz);   //empty object, unless import file updates it

const os = require('os');

console.log(os.platform(), os.homedir());