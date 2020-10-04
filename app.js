const form = document.querySelector('#spending-form');
const date = document.querySelector('#date');
const cost = document.querySelector('#cost');
const product = document.querySelector('#product');
const expenseType = document.querySelectorAll('input[name="expense-type"]');
const paymentMedium = 
  document.querySelectorAll('input[name="payment-medium"]');
const paypal = document.querySelector('#paypal');
const tableBody = document.querySelector('#table-body');
const totalExpenses = document.querySelector('#total');

form.addEventListener("submit", function(event) {
  event.preventDefault();

  for (let radio of expenseType) {
    radio.checked ? checkedExpenseType = radio.value : false;
  }

  for (let radio of paymentMedium) {
    radio.checked ? checkedPaymentMedium = radio.value : false;
  }

  paypal.checked ? paypalText = 'PayPal' : paypalText = '';

  let price = parseFloat(cost.value).toFixed(2);
  price = parseFloat(price);

  newTr = document.createElement('tr');
  const arr = [date.value, `$${price}`, product.value, checkedExpenseType, checkedPaymentMedium, paypalText, 'DELETE'];

  for (let el of arr) {
    newTr.innerHTML += `<td>${el}</td>`;
  }  

  tableBody.append(newTr);

  let totalFloat = parseFloat(totalExpenses.innerText.slice(2));
  totalFloat += price;
  totalExpenses.innerText = `$ ${totalFloat}`;
  form.reset();
});

tableBody.addEventListener('click', function(event) {
  if (event.target.cellIndex === 6) {
    console.log(event.target);
  
    const cost = event.target.parentNode.childNodes[1].innerText.slice(1);
    console.log(event.target.parentNode.childNodes[1]);
    console.log('cost', cost, typeof cost);
  
    let price = parseFloat(cost);
    console.log('price', price, typeof price);
  
    let totalFloat = parseFloat(totalExpenses.innerText.slice(2));
    totalFloat -= price;
    totalExpenses.innerText = `$ ${totalFloat}`;
    event.target.parentElement.remove();
  }
});