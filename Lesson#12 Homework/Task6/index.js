// 1
let a1 = [1, 2, 3];
let b = [4, 5, 6];
let c = a1.concat(b);
console.log("1. " + c);

// 2
let a2 = [1, 2, 3];
a2.reverse()
console.log("2. " + a2);

// 3
let a3 = [1, 2, 3];
a3.push(4, 5, 6);
console.log("3. " + a3);

// 4
let a4 = [3, 2, 1];
a4.unshift(4, 5, 6);
console.log("4. " + a4)

// 5
let a5 = ['js', 'css', 'jq'];
let b5 = a5.shift();
console.log("5. " + b5);

// 6
let a6 = ['js', 'css', 'jq'];
let b6 = a6.pop();
console.log("6. " + b6);

// 7
let a7 = [1, 2, 3, 4, 5];
let b7 = a7.slice(0, 3);
console.log("7. " + b7);

// 8
let a8 = [1, 2, 3, 4, 5];
let b8 = a8.slice(3, 5);
console.log("8. " + b8);

// 9
let a9 = [1, 2, 3, 4, 5];
let b9 = a9.splice(1, 2);
console.log("9. " + a9);

// 10
let a10 = [1, 2, 3, 4, 5];
let b10 = a10.splice(1, 3);
console.log("10. " + b10);

// 11
let a11 = [1, 2, 3, 4, 5];
let b11 = a11.splice(2,1,3,'a','b','c');
console.log("11. " + a11)

// 12
let a12 = [1,2,3,4,5]
let b12 = a12.splice(0,1,1,'a','b');
b12 = a12.splice(5,1,4,'c')
b12 = a12.splice(7,1,5,'e');
console.log("12. " + a12);

// 13 
let a13 = [3, 4, 1, 2, 7];
let b13 = a13.sort();
console.log("13. " + b13);

// 14 
let a14 = {js:'test', jq: 'hello', css: 'world'};
let b14 = Object.keys(a14);
console.log("14. " + b14)