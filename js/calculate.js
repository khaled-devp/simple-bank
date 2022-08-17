document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldValueString = depositField.value;
    const depositFieldValue = parseFloat(depositFieldValueString);
    // form validation
    if(isNaN(depositFieldValue)){
        alert('Input a valid number');
        return;
    }
    // console.log(typeof depositFieldValue);
    // console.log(depositFieldValue);
    const depositElement = document.getElementById('deposit-amount');
    const depositTotalString = depositElement.innerText;
    const depositTotal = parseFloat(depositTotalString);
    depositElement.innerText= depositFieldValue+depositTotal;
    depositField.value= '';
    const balaceElement = document.getElementById('balance-amount');
    const balanceTotalString = balaceElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    balaceElement.innerText = depositFieldValue+balanceTotal;
})

// for withdraw
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldValue = parseFloat(withdrawFieldString);
    if(isNaN(withdrawFieldValue)){
        alert('Input a valid number');
        return;
    }
    const withdrawElement = document.getElementById('withdraw-amount');
    const withdrawElementString = withdrawElement.innerText;
    const withdrawTotal = parseFloat(withdrawElementString);
    
    const balaceElement = document.getElementById('balance-amount');
    const balanceTotalString = balaceElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    withdrawField.value = '';
    if(withdrawFieldValue > balanceTotal ){
        alert('You dont have enough money!!');
        return;
    }
    const newWithdrawAmount = withdrawFieldValue + withdrawTotal;
    withdrawElement.innerText = newWithdrawAmount;
    const newBalaceAmount = balanceTotal - withdrawFieldValue;
    balaceElement.innerText = newBalaceAmount;  
    
})