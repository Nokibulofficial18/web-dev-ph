// add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('add-money-btn').
    addEventListener('click',function(event){
        //prevent page reload after form submit
        event.preventDefault();
        // step-1: get money to be added to the account
        const addMoneyInput = Number(document.getElementById('input-add-money').value);

        //get the provided pin number
        const pinNumber = document.getElementById('input-pin-number').value;
        // verify the pin 
        if(pinNumber==='1234'){
            //get the current balance
            const accountBalance = Number(document.getElementById('account-balance').innerText);
            //add money input with the balance
            const newBalacnce = accountBalance + addMoneyInput;
            //
            document.getElementById('account-balance').innerText = newBalacnce;
        }
        else{
            alert('Failed to add money!! please recheck the pin.')
        }
});


document.getElementById('cashout-btn').
    addEventListener('click',function(event){
        event.preventDefault();

        const cashOutMoney = Number(document.getElementById('input-cash-out').value);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        if(pinNumber === '1234'){
            const accountBalance = Number(document.getElementById('account-balance').innerText);
            if(accountBalance<cashOutMoney){
                alert('Not Sufficient Balance');
            }
            else{
                const newBalacnce = accountBalance - cashOutMoney;
                document.getElementById('account-balance').innerText = newBalacnce;
            }
        }
        else{
            alert('Failed to cashout money!! please recheck the pin.')
        }
    })