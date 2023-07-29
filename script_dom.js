const increaseBtn = document.querySelectorAll(".increment");
const decreaseBtn = document.querySelectorAll(".decrement");
const quantity = document.querySelectorAll(".quantity");
const totalPrice = document.querySelector(".cart-total")
let newTotalPrice = document.querySelectorAll(".product-price");
let cartTotal = document.querySelectorAll(".cart-total");



let decrementSinglePrice; 
decreaseBtn.forEach((button, i) =>{
button.addEventListener("click", function () {
  if(quantity[i].textContent > 0)
  quantity[i].textContent = Number(quantity[i].textContent) - 1
  if (!decrementSinglePrice)
  decrementSinglePrice = newTotalPrice[i].textContent;
let total = Number(quantity[i].textContent) * decrementSinglePrice;
newTotalPrice[i].textContent = total;
let sumArr = [...newTotalPrice];
    let sum = sumArr.reduce((acc, button) => acc + Number(button.textContent), 0);
    cartTotal.textContent = sum;
});
});

let total = 0;
let allPrice = document.querySelectorAll(',')
allPrice.forEach((value) => (total += value));
let incrementSinglePrice;
increaseBtn.forEach((button, i) =>{
  button.addEventListener("click", function () {
    if (!incrementSinglePrice)
    incrementSinglePrice = newTotalPrice[i].textContent;
  quantity[i].textContent = Number(quantity[i].textContent) + 1;
  let total = Number(quantity[i].textContent) * incrementSinglePrice;
    newTotalPrice[i].textContent = total;
    let sumArr = [...newTotalPrice];
    let sum = sumArr.reduce((acc, button) => acc + Number(button.textContent), 0);
    cartTotal.textContent = sum;
});
});

allPrice.forEach( (button)=>(total += button));