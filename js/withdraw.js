document.getElementById('withdraw-button').addEventListener('click', function () {
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawInputString = withdrawInput.value;
  const newWithdrawAmount = parseFloat(withdrawInputString);
  withdrawInput.value = '';
  if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
    alert('Please input a valid Amount');
    return;
  }

  const PreviousWithdrawBalance = document.getElementById('withdraw-balance');
  const PreviousWithdrawBalanceString = PreviousWithdrawBalance.innerText;
  const previousTotalWithdrawBalance = parseFloat(PreviousWithdrawBalanceString);
  const newTotalWithdrawBalance = previousTotalWithdrawBalance + newWithdrawAmount;
  PreviousWithdrawBalance.innerText = newTotalWithdrawBalance;
  // ----------------------------------------------------------

  const previousTotalBalance = document.getElementById('total-balance');
  const previousTotalBalanceString = previousTotalBalance.innerText;
  const currentTotalBalance = parseFloat(previousTotalBalanceString);
  if (newWithdrawAmount > currentTotalBalance) {
    alert("Sorry!! You don't have sufficient balance");
    return;
  }
  previousTotalBalance.innerText = currentTotalBalance - newWithdrawAmount;

})