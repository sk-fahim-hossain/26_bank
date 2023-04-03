document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountStr = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountStr);

    
    const depositTotalElement = document.getElementById('deposit-panel');
   const previousDepositTotal = depositTotalElement.innerText;
    
   
   
    const currentDepositTotal = parseFloat(previousDepositTotal) + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-panel');
    const balanceTotalAmount = parseFloat(balanceTotalElement.innerText);
    const newBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    console.log(newBalanceTotal)
    depositField.value = '';
})