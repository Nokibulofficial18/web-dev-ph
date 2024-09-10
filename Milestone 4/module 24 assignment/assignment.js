function calculateTax(income, expenses) {
    if(income<0 || expenses<0 || expenses>income){
        return "Invalid Input";
    }
    else{
        let diff = income-expenses;
        let tax = diff * .2;
        return tax;
    }
}

function sendNotification(email) {
    let isPresent=false;
    for(let i=0; i<email.length; i++){
        if(email[i]==='@'){
            isPresent = true;
            break;
        }
    }
    if(isPresent){
        let dom = email.split("@")
        return `${dom[0]} sent you an email from ${dom[1]}`
    }
    else{
        return "Invalid Email";
    }
}

function checkDigitsInName(name) {
    if(typeof name === 'string'){
        let isPresent = false;
        for(let i=0; i<name.length; i++){
            if(name[i]>= '0' && name[i]<='9'){
                isPresent = true;
            }
        }
        
        return isPresent
    }
    else{
        return "Invalid Input";
    }
}

function calculateFinalScore(obj) {
    if(typeof obj === 'object'){
        if(obj['testScore']>50 || obj['schoolGrade']>30){
            return "Invalid Input";
        }
        else{
            let total = obj['testScore'] + obj['schoolGrade'];
            if(obj['isFFamily']){
                total += 20;
            }

            if(total>=80){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return "Invalid Input";
    }
}

function  waitingTime(waitingTimes  , serialNumber) {
    if(!(Array.isArray(waitingTimes)) || typeof serialNumber !== 'number'){
        return "Invalid Input";
    }
    else{
        let totalTime = 0;
        for(let i=0; i<waitingTimes.length; i++){
            totalTime += waitingTimes[i];
        }
        if(waitingTimes.length > serialNumber){
            return "Invalid Input";
        }
        else{
            let avgTime = totalTime / waitingTimes.length;
            avgTime = Math.round(avgTime);
            let waitTime = (serialNumber - waitingTimes.length - 1) * avgTime;
            return waitTime;
        }
    }
}

