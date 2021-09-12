function  doSomething() {
    console.log('hello coder')
}

console.log(333);

setTimeout(doSomething, 10000)
console.log(2222);
setInterval(() => {
    console.log('do something agaain')
}, 5000);
