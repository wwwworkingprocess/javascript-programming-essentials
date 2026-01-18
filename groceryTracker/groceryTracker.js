let amount1;
let amount2;
let amount3;

function calculateTotalAmount() {
    let amount1 = parseFloat(document.getElementById('amount1').value);
    let amount2 = parseFloat(document.getElementById('amount2').value);
    let amount3 = parseFloat(document.getElementById('amount3').value);
   
    let total = amount1 + amount2 + amount3;

    document.getElementById('result').innerText = `The total amount is: ${total}`;
   }