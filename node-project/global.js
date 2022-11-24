// Global object

// console.log(global);
// global object is implied , so set Timeout doesn't need global. in front

// setTimeout(() => {
//  console.log('in the timeout');
//  clearInterval(int); // added to stop interval after set time  
// }, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

// console.log(__dirname);
// console.log(__filename);

