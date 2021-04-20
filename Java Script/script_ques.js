//1
with (function(x, undefined){}) length;

//2
(function(x, f = () => x) { var x; var y = x; x = 2; return [x, y, f()]; })(1)


//3
(function() { return (() => this.x).bind({ x: 'inner' })(), (() => this.x)() }).call({ x: 'outer' });


//4
typeof (function* f() { yield f })().next().next()


//5
(function() { if (false) { let f = { g() => 1 }; } return typeof f; })()

//6
function constfuncs() { var funcs = []; for(var i = 0; i < 10; i++) funcs[i] = function() { return i; }; return funcs; } var funcs = constfuncs(); funcs[5]()
//concept of closures


//7
(function(){ return typeof arguments; })();


//8
var f = function g(){ return 23; }; typeof g();


//9
(function f(f){ return typeof f(); })(function(){ return 1; });

//we get error in argument

//10
var foo = { bar: function() { return this.baz; }, baz: 1 }; (function(){ return typeof arguments[0](); })(foo.bar);

//11
var foo = { bar: function(){ return this.baz; }, baz: 1 } typeof (f = foo.bar)();

//13
var f = (function f(){ return "1"; }, function g(){ return 2; })(); typeof f;


//14
function f(){

return f;

}

new f() instanceof f;

//What is the output?

//15
var y = 1, x = y = typeof x; x;

//16
var x = [typeof x, typeof y][1]; typeof typeof x;


//17
(function() { let f = this ? class g { } : class h { }; return [ typeof f, typeof h ]; })();

//18
typeof ${{Object}}.prototype


//19
var a = []; a.unshift(1); a.unshift(22); a.shift(); a.unshift(3,[4,5]); a.shift(); a.shift(); a.shift(); 
//The final output for the shift() is

//20
//The reduce and reduceRight methods follow a common operation called

//21
var x = [typeof x, typeof y][1]; typeof typeof x;

//22
(function(x, f = () => x) { var x; var y = x; x = 2; return [x, y, f()]; })(1)

//23
let arr = [ ]; for (let { x = 2, y } of [{ x: 1 }, 2, { y }]) { arr.push(x, y); } arr;

//24
//Consider the code snippet given below

var count = [1,,3];
//What is the observation made?

//25
//Consider the following code snippet

var a1 = [,,,]; var a2 = new Array(3); 0 in a1 0 in a2 
//The result would be

//26
//What will happen if reverse() and join() methods are used simultaneously ?

//27
//Consider the following code snippet :

var a = [1,2,3,4,5]; a.slice(0,3); 
//What is the possible output for the above code snippet ?


//28
function job() { return new Promise((resolve, reject)=>reject()); } let promise = job(); promise .then(()=> console.log('S1')) .then(()=> console.log('S2')) .then(()=> console.log('S3')) .catch(()=> console.log('E1')) .then(()=> console.log('S4'));

//29
(function timer() { for (var i=0; i<=5; i++) { setTimeout(function clog() {console.log(i)}, i*1000); } })();

//30
(function timer() { for (let i=0; i<=5; i++) { setTimeout(function clog() {console.log(i)}, i*1000); } })();

//31
What is the native function to run code asynchronously in JavaScript ?

//32
let fs = require('fs');

console.log('1');

fs.readFile('test.txt', 'utf8', function(error, data) { if (error) { throw error; }

console.log('2');
});

console.log('3');

What will be the output?

//33
What is the function to stop an interval timer?

//34
(function() { let f = this ? class g { } : class h { }; return [ typeof f, typeof h ]; })();


//35
typeof (new (class F extends (String, Array) { })).substring

//36
typeof (new class f() { [f]() { }, f: { } })[${f}]

//37
function job() { return new Promise((resolve, reject)=>reject()); } let promise = job(); promise .then(()=> console.log('S1')) .then(()=> console.log('S2')) .then(()=> console.log('S3')) .catch(()=> console.log('E1')) .then(()=> console.log('S4'));

//38
How to create a constructor function?

//39
function f(){

return f;

}

new f() instanceof f;

What is the output?

//40
(typeof (new (class { class () {} })))

What is the output?

//41







