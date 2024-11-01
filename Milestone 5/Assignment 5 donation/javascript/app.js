// to add donation balance and subtracting the total balance of a user

function addDonationAmount(inputFieldId,donationId,donationType){
    let remainBalance = getTextFieldValById('initial-money');
    let donateBalance = getTextFieldValById(donationId);
    
    let inputAmount = getInputFieldValById(inputFieldId);

    if(inputAmount === 0){
        return alert("Please Enter an amount");
    }

    if(isNaN(inputAmount) || inputAmount<0){
        return alert("***Please Enter a valid amount***")
    }
    if(inputAmount>remainBalance){
        return alert("Opps! You don't have sufficient balance!!!!")
    }
    console.log(remainBalance-inputAmount);
    setTextFieldValById('initial-money', remainBalance-inputAmount);
    setTextFieldValById(donationId, donateBalance+inputAmount);
    showDonationModal();
    makeDonationHistory(donationType,inputAmount);
}
// show and hide history and donation section
donationBtn = document.getElementById('donation-btn')
historyBtn = document.getElementById('history-btn')
donationBtn.addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donation-btn').style.backgroundColor ='#B4F461';
    document.getElementById('history-btn').style.backgroundColor='transparent';
})

document.getElementById('history-btn').addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-btn').style.backgroundColor ='transparent';
    document.getElementById('history-btn').style.backgroundColor='#B4F461';
})