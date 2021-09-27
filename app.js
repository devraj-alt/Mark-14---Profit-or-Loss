var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stock-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-Btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var cur = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, cur);
}



function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        showOutput(`You have  incurred ${lossPercentage}% loss worth Rs.${loss} `);
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        showOutput(`You have gained  ${profitPercentage}% profit worth Rs.${profit}`);
    } else {
        showOutput('Break-Even');

    }
}

function showOutput(message) {

    outputBox.innerHTML = message;
}