//Ejercicio #0
function unique(arr) {
    var narr = [];
    for (var r of arr) {
        const rsvalue = narr.find(item => item === r);
        if (rsvalue) {
        } else {
            narr.push(r);
        }
    }

    return narr;
}
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log("==========Resultado Ejercicio #0==========")
console.log(unique(values)); // Hare, Krishna, :-O
alert(unique(values)); // Hare, Krishna, :-O
//Ejercicio #1
function aclean(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let sorted = arr[i].toLowerCase().split("").sort().join("");
        obj[sorted] = arr[i];
    }
    return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log("==========Resultado Ejercicio #1==========")
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
//Ejercicio #2
let map = new Map();
map.set("name", "John");
let keys = map.keys();// Error: keys.push is not a function keys.push("more");
console.log("==========Resultado Ejercicio #2==========")
let keys2 = Array.from(map.keys());
keys2.push("more");
console.log(keys2);
//Ejercicio #3
let i = 3;
while (i) {
    //alert(i--); 
    console.log(i--);
}
console.log("==========Resultado Ejercicio #3==========")
console.log("va a realizar un bucle hasa que i sea igual a 0");
//Ejercicio #4
//La forma de prefijo ++ i:
let i1 = 0; while (++i1 < 5) console.log(i1);
//La forma sufijo i ++
let i2 = 0; while (i2++ < 5) console.log(i2);
console.log("==========Resultado Ejercicio #4==========")
console.log("los resultados otbenidos de los array son distintos debido '++i1' y 'i2++'");
//Ejercicio #5
var ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}
ask(
    "Do you agree?",
    () => {
        alert("You agreed.");
    },
    () => {
        alert("You canceled the execution.");
    }
);
console.log("==========Resultado Ejercicio #5==========")
console.log("var functionflecha = (params) => {}")
//Ejercicio #6
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;
    return counter;
}
console.log("==========Resultado Ejercicio #6==========")
let counter = makeCounter();
counter.set = 10;
console.log(counter.set);
//Ejercicio #7
console.log("==========Resultado Ejercicio #7==========")
const bucle2 = () => {
    const prm = prompt('Enter any number or `Cancelar` for end');
    if (prm == 'Cancelar' || prm == '' || prm == null || prm == undefined) {

    } else if (prm > 100) {

    } else {
        bucle2();
    }
};
bucle2();
//Ejercicio #8
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
console.log("==========Resultado Ejercicio #8==========")
console.log(list);
function fn1(list) {
    console.log(list.value);
    if (list.next) {
        fn1(list.next);
    }
}

var fn2 = (list) => { console.log(list.value); if (list.next) { fn1(list.next); } }

fn1(list);
fn2(list);
