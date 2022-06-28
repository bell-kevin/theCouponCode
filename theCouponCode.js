function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let date = new Date(currentDate);
  let expDate = new Date(expirationDate);

//don't need getTime() actually since we have date object already or can do Date.parse(string)

  if (date.getTime() - expDate.getTime() > 0) return false;   
  if (enteredCode !== correctCode) return false;
  return true;
} 
