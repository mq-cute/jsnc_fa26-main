console.log("Hello, World!");

// Bài 1 – Khai báo biến
let name = "Nguyen Van A";
const email = "a@gmail";

console.log("Ten toi la: " + name);
console.log("Email: " + email);


// Bài 2 – Thay đổi giá trị biến

let age = 20;

console.log(age);

age = 21;

console.log(age);


// Bài 3 – Tính toán với biến
const a = 10;
const b = 5;

console.log("Tổng:", a + b);
console.log("Hiệu:", a - b);
console.log("Tích:", a * b);
console.log("Thương:", a / b);


// Bài 4 – Hàm sayHello
function sayHello(name) {
    console.log("Xin chào " + name);
}

sayHello("An");
sayHello("Minh");
sayHello("Quân");


// Bài 5 – Hàm tính tổng
function sum(a, b) {
    return a + b;
}

let result = sum(10, 20);
console.log(result);


// Bài 6 – Hàm tính tiền
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(10, 5);
console.log(total);


// Bài 7 – Hàm tính điểm trung bình
function calculateAverage(math, english, javascript) {
    return (math + english + javascript) / 3;
}

let average = calculateAverage(8, 7, 9);
console.log(average);