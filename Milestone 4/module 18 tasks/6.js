let age = 85;
let is_student= true;
if(age<10){
    console.log("Its a children \nBus Fare is free.")
}
else if(is_student){
    console.log("Student half fare.\nfare is 400tk");
}
else if(age>=60){
    console.log("Senior Citizen.\nFare is 680tk");
}
else{
    console.log("Regular ticket fare 800tk");
}