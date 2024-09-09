let myMark = 89;
let friendMark = 78;

if(myMark>80){
    if(friendMark>80){
        console.log("Go for a lunch")
    }
    else if(friendMark<80 && friendMark>=60){
        console.log("Good luck next time");
    }
    else if(friendMark<60 && friendMark<=40){
        console.log("Keep message unseen");
    }
    else{
        console.log("Block account");
    }
}
else{
    console.log("Go to home and sleep");
}