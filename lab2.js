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

// for 
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// object
const student = {
    name: "Nguyen Van A",
    age: 20,
    email: "a@gmail"
};
console.log(student.name); // Nguyen Van A
console.log(student.age); // 20
console.log(student.email); // a@gmail

// array object 
const myStudents = [
    {
        name: "Nguyen Van A",
        age: 20,
        email: "a@gmail"
    },
    {
        name: "Nguyen Van B",
        age: 21,
        email: "b@gmail"
    },
    {
        name: "Nguyen Van C",
        age: 22,
        email: "c@gmail"
    }
];


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


// Bài 3 – Object Student
const std = {
  id: 1,
  name: "Nguyễn Văn An",
  age: 20,
  email: "an@gmail.com",
  major: "CNTT",
};

console.log("ID: " + std.id); // 1
console.log("Name: " + std.name); // Nguyễn Văn An
console.log("Age: " + std.age); // 20
console.log("Email: " + std.email); // an@gmail.com
console.log("Major: " + std.major); // CNTT

std.age = 21; // Cập nhật tuổi
console.log("Tuổi sau khi cập nhật: " + std.age); // 21 

std.phone = "0123456789"; // Thêm thuộc tính mới
console.log("Số điện thoại: " + std.phone); // 0123456789


// Bài 4 – Array Object
const stu = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    age: 20,
  },
  {
    id: 2,
    name: "Trần Văn Bình",
    age: 21,
  },
  {
    id: 3,
    name: "Lê Văn Nam",
    age: 20,
  },
];

console.log(stu);

console.log("Sinh viên thứ 1: " + stu[0].name); // Nguyễn Văn An

console.log("Tuổi sinh viên thứ 2: " + stu[1].age); // 21

for (let i = 0; i < stu.length; i++) {
    console.log(stu[i]);
}

for (let i = 0; i < stu.length; i++) {
    console.log(stu[i].name);
}

