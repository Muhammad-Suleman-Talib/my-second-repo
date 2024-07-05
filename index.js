// Quetion no : 1 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @ts-ignore
var person = 'Suleman';
console.log("Hello ".concat(person, " would you like to learn some TypeScript today?"));
// Question no : 2 
var myName = 'Suleman';
console.log(myName.toLocaleLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(0).toLocaleUpperCase() + myName.slice(1));
// Question no : 3
var Quotes = ' Quaid-e-Azam once said . "Pakistan is proud of her youth, particularly the students who have always been in the forefront in the hour of trial and need. You are the nation-builders of tomorrow, and you must fully equip yourself by discipline, education, and training for the arduous task lying ahead of you."';
console.log(Quotes);
// Question no : 4
var famousPersor = 'Quaid-e-Azam';
var Quotes2 = '"Pakistan is proud of her youth, particularly the students who have always been in the forefront in the hour of trial and need. You are the nation-builders of tomorrow, and you must fully equip yourself by discipline, education, and training for the arduous task lying ahead of you."';
console.log(famousPersor + Quotes2);
// Question no : 5 ;
var Name1 = 'Muhammad \nSuleman';
var Name2 = 'Muhammad \tSuleman';
console.log(Name1);
console.log(Name2);
// Question no : 6
var a = 8;
var b = 2;
console.log(a * b - a);
console.log(a + b - b);
console.log(a - b + b);
console.log(a / b * b);
// Question no : 7
console.log(5 + 3);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2);
// Question no: 8
var favNum = 150;
console.log("Suleman your favourate number is ".concat(favNum, "."));
//  Question no : 9 
// skip
// Question no 10 
var Nmaes = ['Muhammad', 'Hussnain', 'Taha', 'Suleman', 'Aqib'];
console.log(Nmaes);
// Question : 11
var nameList = ["Grace", "Helen", "Isabel", "Jack", "Kathy"];
console.log(nameList);
// Question : 12
var nameArray = ["Liam", "Mia", "Noah", "Olivia"];
var msg = "is a wonderful person";
for (var _i = 0, nameArray_1 = nameArray; _i < nameArray_1.length; _i++) {
    var val = nameArray_1[_i];
    console.log("".concat(val, " ").concat(msg));
}
// Question : 13
var transportation = ["car", "motorcycle", "bicycle", "scooter"];
transportation.map(function (item) {
    return console.log("I would like to own a ".concat(item, "."));
});
// Question : 14
var guestArr = ["Paul", "Quinn", "Rachel"];
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are invited for a dinner."));
});
// Question : 15
var guests = ["Sophie", "Tom", "Uma"];
guests.splice(0, 1, "Vera");
guests.map(function (item) {
    return console.log("Dear ".concat(item, ", you are invited for a dinner."));
});
// Question : 16
var newGuestArr = ["Vera", "Tom", "Uma"];
newGuestArr.splice(3, 0, "Will", "Xander", "Yara");
newGuestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", I found a bigger dinner table so I am inviting more people."));
});
// Task 2
newGuestArr.unshift("Zane");
console.log(newGuestArr);
// Task 3
newGuestArr.splice(3, 0, "Alice");
console.log(newGuestArr);
// Task 4
newGuestArr.push("Bob");
console.log(newGuestArr);
// Task 5
newGuestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are invited to the more extensive dinner list."));
});
// Question : 17
var limitedGuestList = ["Carl", "Dana", "Eli", "Faye"];
console.log("Due to limited space, only two people can be invited for dinner.");
var limitedVal = limitedGuestList.splice(0, 2);
console.log(limitedGuestList);
console.log("".concat(limitedGuestList, " sorry, you can't invite them to dinner."));
limitedGuestList.forEach(function (guest) {
    return console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
var removed = limitedGuestList.splice(0, 2);
console.log(limitedGuestList);
// Question : 18
var places = ["Sweden", "Norway", "Finland", "Denmark", "Iceland"];
console.log("Original order =", places);
var alphabet = __spreadArray([], places, true).sort();
console.log("Alphabetic order =", alphabet);
console.log("Original array after sorting =", places);
console.log("Reverse alphabetical order =", __spreadArray([], alphabet, true).reverse());
console.log("Original order after reverse sorting =", places);
console.log("Reversed order =", __spreadArray([], places, true).reverse());
console.log("Original order again =", __spreadArray([], places, true).reverse());
console.log("Sorted in alphabetical order =", places.sort());
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order =", places);
// Question : 19
var invitation = ["Gina", "Henry"];
var countInvitation = invitation.length;
console.log("".concat(countInvitation, " people will come to the dinner."));
// Question : 20
var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
console.log("List of cities:", cities);
// Question : 21
var student = {
    name: "Chris Evans",
    cgpa: 3.8,
    age: 21,
    isPass: true,
};
console.log(student);
// Question : 22
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(days[6]);
// Question : 23
var x = 5;
var y = 2;
console.log("5 == 2", x == y);
console.log("5 < 2", x < y);
console.log("5 <= 2", x <= y);
console.log("5 === 2", x === y);
console.log("5 == 2", x == y);
var p = 7;
var q = 3;
console.log("7 !== 3", p !== q);
console.log("7 != 3", p != q);
console.log("7 > 3", p > q);
console.log("7 >= 3", p >= q);
console.log("7 != 3", p != q);
// Question : 24
var condition_1 = 20;
var condition_2 = 10;
console.log(condition_1 == condition_2);
console.log(condition_1 != condition_2);
// Task 1
var cond_1 = "Emma";
var cond_2 = "emma watson";
if (cond_1 == cond_2) {
    console.log("Conditions are equal");
}
else {
    console.log("Conditions are not equal");
}
if (cond_1 != cond_2) {
    console.log("Conditions are not equal");
}
// Task 2
var age = 18;
if (age == 18) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
if (age == 15) {
    console.log("You can vote");
}
else {
    console.log("You can't vote");
}
var score = 85; // Assuming this is the entered score
if (score >= 90 && score <= 100) {
    console.log("Grade A");
}
else if (score >= 70 && score <= 89) {
    console.log("Grade B");
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C");
}
else if (score >= 50 && score <= 59) {
    console.log("Grade D");
}
else {
    console.log("Failed");
}
var citiesArr = ["Karachi", "Lahore", "Islamabad"];
if (citiesArr.includes("Karachi")) {
    console.log("Karachi is in the cities array");
}
if (citiesArr.includes("Peshawar")) {
    console.log("Peshawar is in the cities array");
}
// Question : 25
var alienColor = "green";
if (alienColor == "green") {
    console.log("You earn 5 points");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("No output");
}
// Question : 26
alienColor = "green";
if (alienColor == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
alienColor = "red";
if (alienColor == "green") {
    console.log("Player just earned 5 points for shooting the alien");
}
else {
    console.log("Player just earned 10 points");
}
// Question : 27
alienColor = "yellow";
if (alienColor == "green") {
    console.log("5 points");
}
else if (alienColor == "red") {
    console.log("10 points");
}
else if (alienColor == "yellow") {
    console.log("15 points");
}
else {
    console.log("Don't match this alien color");
}
// Question : 28
var personAge = 25; // Assuming this is the entered age
if (personAge < 2) {
    console.log("Baby");
}
else if (personAge >= 2 && personAge < 4) {
    console.log("Todd");
}
//              Question : 29
var fruit = ["Apple", "Mango", "Litchi"];
var selectedFruit = prompt("Enter a fruit:");
if (fruit.includes(selectedFruit)) {
    console.log(selectedFruit);
}
else {
    console.log("you really like banana");
}
//               Question : 30
var userName = ["admin", "Imran", "kamram", "usama", "uzaifa"];
for (var _a = 0, userName_1 = userName; _a < userName_1.length; _a++) {
    var i = userName_1[_a];
    if (i === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(i, ", thank you for logging in again."));
    }
}
//              Question : 31
var userName2 = ["admin", "Imran", "kamran", "usama", "uzaifa"];
if (userName2.length === 0) {
    console.log("we need to find some users!");
}
else {
    console.log(userName2);
}
//           Question : 32
var current_user = ["Admin", "Imran", "Kamran", "Usama", "Uzaifa"];
var new_user = ["admin", "imran", "kamran", "usama", "uzaifa"];
var lcCurrent_user = current_user.map(function (user) { return user.toLowerCase(); });
for (var _b = 0, new_user_1 = new_user; _b < new_user_1.length; _b++) {
    var newUser = new_user_1[_b];
    if (lcCurrent_user.includes(newUser.toLowerCase())) {
        console.log("Username \"".concat(newUser, "\" is already taken. Please enter a new username"));
    }
    else {
        console.log("Username \"".concat(newUser, "\" is available"));
    }
}
//              Question :33
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _c = 0, num_1 = num; _c < num_1.length; _c++) {
    var i = num_1[_c];
    var ordinal = void 0;
    if (i === 1) {
        ordinal = "st";
    }
    else if (i === 2) {
        ordinal = "nd";
    }
    else if (i === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(i).concat(ordinal));
}
//              Question : 34
var pizza = ["fajita", "pepperoni", "BBQ pizza"];
for (var _d = 0, pizza_1 = pizza; _d < pizza_1.length; _d++) {
    var p_1 = pizza_1[_d];
    console.log("My favorite pizzas are: ".concat(p_1));
}
for (var _e = 0, pizza_2 = pizza; _e < pizza_2.length; _e++) {
    var p_2 = pizza_2[_e];
    console.log("\nI like this pizza: ".concat(p_2));
}
console.log("I really love pizza!");
//               Question :35
var animal = ["cat", "dog", "goat"];
console.log("List of animals:");
for (var _f = 0, animal_1 = animal; _f < animal_1.length; _f++) {
    var a_1 = animal_1[_f];
    console.log("".concat(a_1));
}
console.log("Statement about each animal:");
for (var _g = 0, animal_2 = animal; _g < animal_2.length; _g++) {
    var a_2 = animal_2[_g];
    if (a_2 === "cat") {
        console.log("".concat(a_2, " is a great pet"));
    }
    else if (a_2 === "dog") {
        console.log("".concat(a_2, " would be a good companion at home."));
    }
    else if (a_2 === "goat") {
        console.log("".concat(a_2, " is an adorable pet that also gives us milk"));
    }
}
console.log("What these animals have in common:\n\n Any of these animals could be a great pet");
//            Question : 36
var shirt = function (size, message) {
    return console.log("Size: ".concat(size, "\nMessage: '").concat(message, "'"));
};
shirt("medium", "this size is medium");
shirt("Large", "this size is large");
//              Question :37
shirt("small", "this size is small");
//           Question : 38
function cities1(city, country) {
    if (country === void 0) { country = "unknown country"; }
    console.log("".concat(city, " is in ").concat(country));
}
cities1("Karachi", "Pakistan");
cities1("New York");
cities1("Mumbai", "India");
//           Question : 39
function country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(country("Islamabad", "Pakistan"));
console.log(country("New York", "America"));
console.log(country("Pune", "India"));
//              Question : 41
var magicianName = ["Criss Angel", "David Blaine", "Derren Brown", "Harry Houdini"];
function show_Magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
show_Magicians(magicianName);
//             Question : 42
console.log(magicianName);
for (var i = 0; i < magicianName.length; i++) {
    console.log("Pharas great ".concat(magicianName[i], " "));
}
//              Question : 43
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the great ".concat(magician); });
}
var greatMagiciansNames = make_great(magicianName);
console.log("Original magicians:");
show_magicians(magicianName);
console.log("Great magicians:");
show_magicians(greatMagiciansNames);
//               Question : 44
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You ordered an empty sandwich, please add some items");
    }
    else {
        console.log("Sandwich summary:");
        items.forEach(function (item, index) { return console.log("".concat(index + 1, ". ").concat(item)); });
        console.log("\n");
    }
}
makeSandwich("turkey", "cucumber", "tomato", "mayonnaise");
makeSandwich("hen", "cheese");
makeSandwich("peanut butter", "jelly", "banana", "honey");
//            Question : 45
var createCar = function (manufactured, model, color) {
    return {
        manufactured: manufactured,
        model: model,
        color: color
    };
};
var car = createCar("Turkey", "Corolla", "Red");
console.log(car);
