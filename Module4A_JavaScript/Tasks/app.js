
// const Subject = 'JavaMyth'
// console.log(Subject);

// //Task 3
// const dayOfTheWeek = 'Tuesday';
// const position = 3;
// const output = 'Today is ' + dayOfTheWeek  +'.'  + ' It is the ' + position + 'rd' + ' day of the week.';
// console.log(output);

// const firstName = 'John';
// const lastName = 'Friend';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //const age = 16;
// //if (age >= 18) {
//    // console.log('You are an adult and eligible to vote.');
// //} else {
// //    console.log('You are not an adult and not eligible to vote.');
// //}

// // const age = 100;
// // if (age>=25) {
// //     console.log('You are eligible to rent a car.');
// // } else if (age>=57) {
// //     console.log('You are not eligible to rent a car.')
// // }  else {
// //     console.log('You are too young to rent a car.');
// // }

// const age = 59;
// // if (age>=25 && age<=57) {
// //     console.log('You are eligible to rent a car.');
// // } else if (age>=57) {
// //     console.log('You are not eligible to rent a car.')
// // }  else {
// //     console.log('You are too young to rent a car.');
// // }

// const day = 'Monday';
// // if (day === 'Thursday') {
// //     console.log('Throwback Thursday');
// // } else if (day === 'Monday') {
// //     console.log('Monday again!!');
// //     } else if (day === 'Saturday') {
// //         console.log('Happy Saturday!');
// //     } else {
// //         console.log('Just Go work for your money');
// //     }

// switch (day) { 
//     case 'Thursday':
//         console.log('Throwback Thursday');
//         break;
//     case 'Monday':
//         console.log('Monday again!!');
//         break;
//     case 'Saturday':
//         console.log('Happy Saturday!');
//         break;
//     default:
//         console.log('Just Go work for your money');
// }

// // let star = 1;
// // while(star <=20000){
// //     if (star === 1) {
// //         console.log(star + ' star');
// //     } else {
// //     console.log(star + ' stars');
// //     }
// //     star = star + 1
// // }

// for (let star = 1; star <= 30; star = star + 1) {
//     if (star === 1) {
//         console.log(star + ' star');
//    } else {
// console.log(star + ' stars');
//     } //star = star + 1
// }

// for (let number =1; number <=51; number = number + 1) {
//     if (number % 2 === 0) {
//         console.log(number + ' is even');
//     } else {
//         console.log(number + ' is odd');
//     }
// }

// // function MyOwn() { //function declaration
// //     console.log("This is my own function");
// // }
// // MyOwn(); //function call

// // function Greetings(name) {
// //     console.log("Hello, " + name + "!");
// // }
// // Greetings("Amarachi");

// function calculateArea(radius) {
//     const area = Math.PI * radius * radius;
//     return area;
// }
// const radius = 5;
// const area = calculateArea(radius);
// console.log("The area of the circle with radius " + radius + " is: " + area);
// calculateArea(10);

// function addNumbers(firstNumber, secondNumber) {
//     const sum = firstNumber + secondNumber;
//     console.log (sum);
// }
// addNumbers(81, 914 );

// function calculateAreaOfRectangle(length, width) {
//     const area = length * width;
//     console.log("The area of the rectangle with length " + length + " and width " + width + " is: " + area);
// }
// calculateAreaOfRectangle(5.2, 10.9);

// function converter(dollars) {
//     //conversion ratefrom dollars to naira is 1415
//     const nairaValue = dollars * 1415;
//     return nairaValue;
// }
// const nairaValue = converter(310);
// console.log(nairaValue);

// // const myBaby = 'Lulu'; // global variable

// // function greetings(){
// //     console.log("Hello, " + myBaby);
// //     function beninGreetings(){
// //         console.log("Obowa, " + myBaby);
// //     }
// //     beninGreetings();
// // }
// // greetings();

//  // global variable

// // function greetings(){
// //     const myBaby = 'Ilulu';
// //     console.log("Hello, " + myBaby);
// // }
// //     function beninGreetings(){
// //         console.log("Obowa, " + myBaby);
// //     }
// //     beninGreetings();

// //     console.log(myBaby); //accessing the variable declared in the parent function
// // greetings();

// sing("Jesus You Love Me Too Much");
// function sing(MercyChinwo) {
//     console.log("I will sing " + MercyChinwo + " all day long!");
// }

// const mysong = function (song) {
//     console.log("I will sing " + song + " while alive!");
// };
// mysong("Oshimiri Atata");

// const myArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// console.log(myArray);

// const numberArray = [100, 85, 70, 55, 40, 25, 10];
// console.log(numberArray);

// const emptyArray = [];
// console.log(emptyArray.length);

// const myArray2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const seventhElement = myArray2[12];
// myArray2[6] = 'NewMonth';
// console.log(myArray2);

// const emptyArray2 = [];
// emptyArray2[0] = 'First Element';
// emptyArray2[1] = 'Second Element';
// emptyArray2[6] = 'Seventh Element';
// console.log(emptyArray2.length);

// const emptyArray = [];
// emptyArray[0] = 'First Love';
// console.log(emptyArray)

// const notemptyArray = [];
// notemptyArray.push('First Man, God created Adam, he ate an apply according to the Bible');
// notemptyArray.push('Second Man, God created Eve, she was made from Adam\'s rib according to the Bible');
// console.log(notemptyArray);

// const notemptyArray = ['Year', 'Month', 'Day', 'Hour', 'Minute', 'Second'];
// for (let start = 0; start <=notemptyArray.length; start+1) {
//     notemptyArray.pop()
// }
// console.log(notemptyArray);

// const companyArray = ['Telco A', 'Banking B', 'Fintech C', 'Healthcare D', 'Education E', 'Entertainment F', 'Agriculture G', 'Logistics H', 'Manufacturing I', 'Real Estate J'];
// companyArray.unshift ('Energy K');
// console.log(companyArray);

// const companyArray = ['Telco A', 'Banking B', 'Fintech C', 'Healthcare D', 'Education E', 'Entertainment F', 'Agriculture G', 'Logistics H', 'Manufacturing I', 'Real Estate J'];
// companyArray.shift ();
// companyArray.shift ();
// // console.log(companyArray);

// const companyArray = ['Telco A', 'Banking B', 'Fintech C', 'Healthcare D', 'Education E', 'Entertainment F', 'Agriculture G', 'Logistics H', 'Manufacturing I', 'Real Estate J'];
// companyArray.slice (3,7);
// console.log(companyArray.slice (3,7));
// console.log(companyArray);

// const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'March', 'August', 'September', 'October', 'November', 'December'];
// //monthArray.splice (8,3);
// //console.log(monthArray.slice (3,7));
//remove January till March
//console.log(monthArray, monthArray.splice (4,2,));
// console.log(monthArray.indexOf('September'));
// console.log(monthArray.indexOf('March'));
// console.log(monthArray.lastIndexOf('March'));

const myDesire = {
    name:'Prado Jeep',
    color:'Emerald Green',
    price: 150000000,
    year: 2026,
}

const brand = {
    isToyota: true,
    tyre:'dunlop',
    seater: 8,
    reverseCamera: true,
    toggleToyota: function() {
        if (brand.isToyota === true) {
            brand.isToyota = false;
        } else {
            brand.isToyota = true;
        }
    }
};

console.log(myDesire.name);
brand.toggleToyota();
console.log(brand['isToyota']);