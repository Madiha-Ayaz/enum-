
// ----------------enum-----------------------------------


enum student1{
    madiha,almas,areeb,fatima
}
const std1:student1=student1.fatima
console.log(std1)




enum student2{
    madiha=10,almas,areeb,fatima
}
console.log(student2.almas)




enum student3{
    madiha="madiha",almas="almas",areeb="areeb",fatima="fatima"
}
console.log(student3.madiha)




function std2(GIAIC:student1){
   // console.log("work hard")
   return GIAIC
}
 console.log(std2(student1.madiha));






 function std3(goodStudent:student1):string{
    switch(goodStudent){
        case student1.madiha:
        return "madiha";
        case student1.almas:
        return "almas";
        case student1.areeb:
        return "areeb";
        case student1.fatima:
        return "fatima";
        default:
            return "Unknown";
    }
}
console.log(std3(student1.madiha));
console.log(std3(student1.almas));
console.log(std3(student1.areeb));
console.log(std3(student1.fatima));





 