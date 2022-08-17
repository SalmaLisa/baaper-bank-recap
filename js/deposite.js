document.getElementById('deposite-button').addEventListener('click', function () {
  const depositeInput = document.getElementById('deposite-input');
  const depositeInputString = depositeInput.value;
  const depositeInputAmount = parseFloat(depositeInputString);
  depositeInput.value = '';
  if (isNaN(depositeInputAmount) || depositeInputAmount<0) {
    alert('Please input a valid Amount');
    return;
  }
  
  const previousDepositeTotal = document.getElementById('deposite-balance');
  const previousDepositeTotalString = previousDepositeTotal.innerText;
  const previousDepositeBalance = parseFloat(previousDepositeTotalString);
  const totalDepositeBalance = previousDepositeBalance + depositeInputAmount;
  previousDepositeTotal.innerText = totalDepositeBalance;
  // --------------------------------------------------------------
  const totalBalance = document.getElementById('total-balance');
  const totalBalanceString = totalBalance.innerText;
  const currentTotalBalance = parseFloat(totalBalanceString);
  const newTotalBalance = currentTotalBalance + depositeInputAmount;
  totalBalance.innerText = newTotalBalance;
})