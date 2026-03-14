// Initialize side lengths
let side1 = 5;
let side2 = 7;
let side3 = 9;
// Check triangle type
if (side1 === side2 && side2 === side3) {
    console.log("Equilateral triangle");
} else if (side1 === side2 || side1 === side3 || side2 === side3) {
    console.log("Isosceles triangle");
} else {
    console.log("Scalene triangle");
}
