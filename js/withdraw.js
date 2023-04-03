document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmountField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(newWithdrawAmountField.value);
    
    const previousWithdrawElement = document.getElementById('withdraw-panel');
    const previousWithdrawAmount = parseFloat(previousWithdrawElement.innerText);
    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-panel');
    const balanceTotalAmount = parseFloat(balanceTotalElement.innerText);
    const currentBalanceAmount = balanceTotalAmount - newWithdrawAmount; 
    balanceTotalElement.innerText = currentBalanceAmount;
    console.log(currentBalanceAmount);
    newWithdrawAmountField.value = '';
})