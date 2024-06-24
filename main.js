"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var student1;
(function (student1) {
    student1[student1["madiha"] = 0] = "madiha";
    student1[student1["almas"] = 1] = "almas";
    student1[student1["areeb"] = 2] = "areeb";
    student1[student1["fatima"] = 3] = "fatima";
})(student1 || (student1 = {}));
const std1 = student1.fatima;
console.log(std1);
var student2;
(function (student2) {
    student2[student2["madiha"] = 10] = "madiha";
    student2[student2["almas"] = 11] = "almas";
    student2[student2["areeb"] = 12] = "areeb";
    student2[student2["fatima"] = 13] = "fatima";
})(student2 || (student2 = {}));
console.log(student2.almas);
var student3;
(function (student3) {
    student3["madiha"] = "madiha";
    student3["almas"] = "almas";
    student3["areeb"] = "areeb";
    student3["fatima"] = "fatima";
})(student3 || (student3 = {}));
console.log(student3.madiha);
function std2(GIAIC) {
    // console.log("work hard")
    return GIAIC;
}
console.log(std2(student1.madiha));
function std3(goodStudent) {
    switch (goodStudent) {
        case student1.madiha:
            return "madiha";
        case student1.almas:
            return "almas";
        case student1.areeb:
            return "areeb";
        case student1.fatima:
            return "fatima";
        default:
            return "normal student need hard worlk";
    }
}
console.log(std3(student1.madiha));
console.log(std3(student1.almas));
console.log(std3(student1.areeb));
console.log(std3(student1.fatima));
console.log(std3);
