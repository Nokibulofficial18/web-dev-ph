// to get the donation amounts in number format
function getInputFieldValById(id){
    const inputVal = Number(document.getElementById(id).value);
    return inputVal;
}

// to get the initial field value in number format

function getTextFieldValById(id){
    const textVal = Number(document.getElementById(id).innerText);
    return textVal
}

// to set the text field value by removing initial field
function setTextFieldValById(id, amount){
    document.getElementById(id).innerText = amount;
}

function showDonationModal(){
    document.getElementById('successful-donation-modal').showModal();
}


// function to set attributes and inner text of newly donate records to help to make history part

function historyMakeHelper(newHis, idName, serialNum, innerContent){
    let val = newHis.querySelector(`#${idName}`);
    val.setAttribute('id',`${idName}-${serialNum}`);
    if(innerContent !== ''){
        newHis.querySelector(`#${idName}-${serialNum}`).innerText = innerContent;
    }
}
