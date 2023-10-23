//final page

window.addEventListener('DOMContentLoaded', function() {
    // Generate a random transaction number
    var transactionNumber = Math.floor(Math.random() * 1000000) + 1;
  
    // Get the current date and time
    var currentDate = new Date().toLocaleString();
  
    // Display the transaction number and current date and time
    var transactionNumberElement = document.getElementById('transaction-number');
    transactionNumberElement.textContent = transactionNumber;
  
    var currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = currentDate;
  });