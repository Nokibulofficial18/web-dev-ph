document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault() // to stop the refresh
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if(phoneNumber ==='01234567891' && pinNumber==='1234'){
        console.log('You are looged in');
        window.location.href = './home.html';
    }
    else{
        alert('Wrong phone number or pin')
    }
})