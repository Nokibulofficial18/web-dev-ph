// show the cash out form
document.getElementById('show-cashout-btn').addEventListener('click',function(){

    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

document.getElementById('show-add-money-btn').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');
});