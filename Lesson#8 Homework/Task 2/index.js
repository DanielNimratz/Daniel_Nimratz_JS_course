let num = prompt("Введіть число від 1 до 100")

let decade = num - (num % 10);
let unit = num % 10;
// "&" - остача від ділення 

let condition_1 = 2 <= unit && unit <= 4;
let condition_2 = decade !== 1;

if (num == 1) {
    console.log(num, "стіл");
} else if (condition_1 && condition_2) {
    console.log(num, "столи");
} else {
    console.log(num, "столів");
}