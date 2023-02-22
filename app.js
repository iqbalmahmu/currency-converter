const handleClick = document.getElementById("handleClick");

function convert() {
  // Get input values
  var amount = document.getElementById("amount").value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  // Define conversion rates
  var rates = {
    USD: 1,
    EUR: 0.82,
    GBP: 0.72,
    MYR: 4.33,
  };

  // Calculate conversion
  var result = (amount / rates[from]) * rates[to];

  // Display result
  document.getElementById("result").innerHTML =
    amount + " " + from + " = " + result.toFixed(2) + " " + to;
}

// add event listners functionality...

// const handleClick = document.getElementById("handleClick");

handleClick.addEventListener("click", convert);
