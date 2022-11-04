let  weight = 70;
console.log(typeof(weight));

let name = "Valdeni"
let age = 26
let stars = 2.6
let isSubscribed = true

let student = {
    name: "Valdeni",
    age: 26,
    stars: 2.6,
    isSubscribed: true
};
console.log(typeof(student));

console.log(`${student.name} de idade ${student.age} pesa ${weight}kg`);

let students = [student]
console.log(students[0]);


let student2 = {
    name: "John",
    age: 36,
    stars: 5.6,
    isSubscribed: false
};

students.push(student2);

console.log(students[1]);
console.log(students)