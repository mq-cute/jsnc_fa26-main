// array [] 
const student1 = "Nguyen Van A";
const student2 = "Nguyen Van B";
const student3 = "Nguyen Van C";

const students = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van C"];
const ids = [1, 2, 3];

// index : 0, 1, 2
console.log(students[0]); // Nguyen Van A
console.log(students[1]); // Nguyen Van B
console.log(students[2]); // Nguyen Van C
//...


// Bài 1 : Array cơ bản
const names = ["An", "Bình", "Nam", "Hòa", "Lan"];

console.log(names[0]); // An

console.log("Phần tử đầu tiên: " + names[0]); // An

console.log("Phần tử cuối cùng: " + names[names.length - 1]); // Lan

console.log("Số lượng phần tử: " + names.length); // 5

names.push("Thiện"); // Thêm phần tử vào cuối mảng
console.log("Sau khi thêm phần tử: " + names); // ["An", "Bình", "Nam", "Hòa", "Lan", "Thiện"]

names.pop(); // Xóa phần tử cuối cùng
console.log("Sau khi xóa phần tử cuối: " + names); // ["An", "Bình", "Nam", "Hòa", "Lan"]


// Bài 2 : Duyệt Array
for(let i = 0; i < names.length; i++) {
    console.log("Phần tử thứ " + i + ": " + names[i]);
}