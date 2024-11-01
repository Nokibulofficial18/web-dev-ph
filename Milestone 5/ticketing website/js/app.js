const menuBtn = document.getElementById("menu-btn");
const mobileMenuEl = document.getElementById("mobileMenu");
const selectedSeatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const cupponInputEl = document.getElementById("cuppon-field");
const cupponBtnEl = document.getElementById("cuppon-btn");
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl= document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn')
//menu icon
menuBtn.addEventListener("click", function () {
  menuBtn.children[0].classList.toggle("hidden");
  const menuCloseBtn = document.getElementById("close-icon");
  menuCloseBtn.classList.toggle("hidden");
  mobileMenuEl.classList.toggle("hidden");
  mobileMenuEl.classList.toggle("flex");
});

let selectedSeat = [];
let totalprice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;
  if (selectedSeat.includes(value)) {
    return alert("Seat already Booked");
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-primary");
    event.classList.add("text-white");

    selectedSeat.push(event.innerText);

    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatValue = Number(availableSeatEl.innerText);
    const newAvaiableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvaiableSeatValue;
    
    defaultTextEl.classList.add('hidden');

    selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
    <span>${event.innerText}</span>
    <span>Economy</span>
    <span>550</span>
    </li>`;

    totalprice += 550;
    totalPriceEl.innerText = totalprice.toFixed(2);

    if (selectedSeat.length > 3) {
      cupponBtnEl.removeAttribute("disabled");
      cupponInputEl.removeAttribute("disabled");
    }
  } else {
    return alert("maximum seat booked")
  }

  //console.log(event.innerText)
}

// cupon btn function 
cupponBtnEl.addEventListener('click',function(){
    const cuponInputValue = cupponInputEl.value;
    let cuponSave = 0;

    if(cuponInputValue !== "NEW50" && cuponInputValue !== "Couple 20"){
        return alert("You provided a wrong cupon")
    }
    
    if(cuponInputValue === "NEW50"){
        cuponSave = totalprice * .15;
    }else if(cuponInputValue === "Couple 20"){
        cuponSave = totalprice * .20;
    }

    const showCuponPriceEl = document.getElementById("show-cupon-price");
    showCuponPriceEl.innerHTML = 
    `
    <p>Discount</p>
    <p>
        <span>-BDT: </span>
        <span id="total-price">${ cuponSave.toFixed(2) }</span>
    </p>
    `
    const grandTotalValue = totalPrice - cuponSave;
    grandFinal = document.getElementById('grand-final');
    grandFinal.innerHTML = `
    <p>Grand Price</p>
    <p>
        <span>BDT: </span>
        <span id="total-price">${ grandTotalValue.toFixed(2) }</span>
    </p>
    `
})

phoneNumberEl.addEventListener('input', function(e){
    const inputValue = e.target.value;
    if(inputValue.length == 11){
        nextBtnEl.removeAttribute("disabled");
    }
})

document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
})