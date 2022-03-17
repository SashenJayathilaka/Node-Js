// Global object

console.log(global);

global.setTimeout(() => {
   console.log('in the time out') 
   clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval')
}, 1000);

console.log(__dirname);
console.log(__filename);

console.log(document.querySelector);