age = prompt("How old are you?");
function ageVerification (age) {
    if (age <= 0 || age >= 120) {
        alert("You entered wrong age!");
    } else if (age > 99) {
        alert("You are older then 99");
    } else if (age >= 18) {
        alert("You are older then 18");
    } else if (age < 18) {
        alert("You are under 18")
    }
}

let ageVerification1 = function (age) {
    if (age <= 0 || age >= 120) {
        alert("You entered wrong age!");
    } else if (age > 99) {
        alert("You are older then 99");
    } else if (age >= 18) {
        alert("You are older then 18");
    } else if (age < 18) {
        alert("You are under 18")
    }
}
ageVerification1(age);