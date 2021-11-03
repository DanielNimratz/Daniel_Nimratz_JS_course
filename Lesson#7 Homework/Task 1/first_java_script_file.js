console.log("First part")
var a = 1;
var b = 'b';
var c = true;
var d = null;
var e = undefined;
var f = {letter: 'f'};
var g = Symbol('foo');
var h = 873698134566148375687346;

let a1 = 1;
let b1 = 'b';
let c1 = true;
let d1 = null;
let e1 = undefined;
let f1 = {
    letter: 'f'
};
let g1 = Symbol('foo');
let h1 = 873698134566148375687346;

const a2 = 1;
const b2 = 'b';
const c2 = true;
const d2 = null;
const e2 = undefined;
const f2 = {
    letter: 'f'
};
const g2 = Symbol('foo');
const h2 = 873698134566148375687346;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
console.log(f1);
console.log(g1);
console.log(h1);

console.log(a2);
console.log(b2);
console.log(c2);
console.log(d2);
console.log(e2);
console.log(f2);
console.log(g2);
console.log(h2);

console.log("-----")
console.log("Second part")
console.log("-----")
let a3 = 1;
// ways to convert Number a3 to String:
let b3 = String(a);
let c3 = a.toString();
let d3 = "" + a;
let e3 = a + "";
let f3 = a.toString(2); // binary convertization

console.log(typeof (b3));
console.log(typeof (c3));
console.log(typeof (d3));
console.log(typeof (e3));
console.log(typeof (f3));

console.log("-----")
console.log("Third part")
console.log("-----")
let a4 = "1";
// ways to convert String a4 to Number:
let b4 = Number(a4);
let c4 = parseInt(a4, 10)
let d4 = +a4;
let e4 = Math.floor(a4)
let f4 = Math.round(a4)

console.log(b4)
console.log(c4)
console.log(d4)
console.log(e4)
console.log(f4)
