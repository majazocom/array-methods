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

// let ascending = [];

// ascending = secondArray.sort((a,b) => a.age - b.age);

// console.log(ascending);

//Del 6
//Sortera objekten efter ålder från andra listan, äldst först

// let storstForst = [];

// storstForst = secondArray.sort((a,b) => b.age - a.age);

// console.log(storstForst);
// let nameList = [];

// for(let person of storstForst) {
//     nameList.push(person.name);
// }
// console.log(nameList);

//Del 7
//Sortera objekten i bokstavsordning efter deras namn från andra listan

let fruits = ["banana", "pear", "pineapple", "apple", "orange"];

fruits.sort();
console.log(fruits);


let alphaNumeric = [];
//alphaNumeric = secondArray.sort((a, b) => a.name < b.name ? -1 : 1 );

// alphaNumeric = secondArray.sort(function(a,b) {
//     let name1 = a.name;
//     let name2 = b.name;

//     if(name1 < name2) {
//         //if name1 is greater than name2
//         return -1;
//     } else if (name1 > name2) {
//         //if name2 is greater than name1
//         return 1;
//     }
// })

alphaNumeric = secondArray.sort((a,b) => a.name.localeCompare(b.name));

console.log(alphaNumeric);