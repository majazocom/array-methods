let firstArray = [23, 45, 62, 1, 21, 3, 54];

let secondArray = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    },
]

//Del 1
//Sortera första listan efter nummerordning minst -> störst
firstArray.sort((a,b)=>a-b);

// firstArray.sort(function(a, b) {
//     return a-b;
// })

//Del 2
//Skriv ut alla siffror som är över 5 från första listan

// for(let i = 0; i < firstArray.length; i++) {
//     if (firstArray[i] > 5) {
//         //console.log(firstArray[i]);
//     }
// }

// for(let number of firstArray) {
//     if (number > 5) {
//         //console.log(number)
//     }
// }

let overFive = (x) => {
    return x > 5
}

let newFirstArray = firstArray.filter(overFive);
console.log(newFirstArray);

//Del 3
//Skriv ut alla namn som är över eller är 18 från andra listan

let newSecondArray = [];

for(let person of secondArray) {
    if (person.age >= 18) {
        newSecondArray.push(person.name);
    }
}

console.log(newSecondArray);

// let ageCheck = (person) => {
//     return person.age >= 18;
// }

//let newSecondArray = secondArray.filter(ageCheck);


//Del 4
//Skriv ut alla som är under 18 från andra listan

let underAged = [];

for(let person of secondArray) {
    if (person.age < 18) {
        underAged.push(person.name);
    }
}

console.log(underAged);

//Del 5
//Sortera objekten efter ålder från andra listan, yngst först
firstArray.sort((a,b)=>a-b);

// firstArray.sort(function(a, b) {
//     return a-b;
// })

console.log(secondArray.sort((a,b) => a.age - b.age));

//Del 6
//Sortera objekten efter ålder från andra listan, äldst först

console.log(secondArray.sort((a,b) => b.age - a.age));

//Del 7
//Sortera objekten i bokstavsordning efter deras namn från andra listan
