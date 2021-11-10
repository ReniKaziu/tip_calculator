// Calculate tip

function calculateTip () {
  var billAmount = Number(document.getElementById('billAmount').value);
  var serviceQual = document.getElementById('serviceQual').value;
  var peopleAmount = document.getElementById('peopleAmount').value;

  // validate input
  if (billAmount === '' || serviceQual == 0) {
    alert('Please enter values');
    return;
  }
  // Check to see if this input is empty or less than or equal to 1
  if (peopleAmount === '' || peopleAmount <= 1) {
    peopleAmount = 1;

    document.getElementById('each').style.display = 'none';
  } else {
    document.getElementById('each').style.display = 'block';
  }

  var tipAmount = (billAmount * serviceQual) ;
  tipAmount = Math.round(tipAmount * 100) / 100;
  tipAmount = tipAmount.toFixed(2);

  //Calculate total tip
  var totalTip = (billAmount * serviceQual) / peopleAmount;
  // round to decimal
  totalTip = Math.round(totalTip * 100) / 100;
  // always two digits after decimal point
  totalTip = totalTip.toFixed(2);

  // Display the tip

  document.getElementById('totalTip').style.display = 'block';
  document.getElementById('tip').innerHTML = totalTip;

  // Calculate total bill
  var totalBill = (parseFloat(billAmount) + parseFloat(tipAmount)) / peopleAmount;
  // round to decimal
  totalBill = Math.round(totalBill * 100) / 100;
  // two digits after decimal point
  totalBill = totalBill.toFixed(2);

  // Display the bill
  document.getElementById('totalBill').style.display = 'block';
  document.getElementById('bill').innerHTML = totalBill;

}



// Hide tip amount on load
document.getElementById('totalTip').style.display = 'none';
document.getElementById('each').style.display = 'none';

// Hide total bill on load
document.getElementById('totalBill').style.display = 'none';
document.getElementById('each').style.display = 'none';

// click to call funtion
document.getElementById('calculate').onclick = function () {
  calculateTip();
};