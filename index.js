function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || income < expenses) {
      return "Invalid Input";
  }
  let difference = income - expenses;
  let tax = difference * 0.20;
  return tax;
}



function sendNotification(email){
    if(email.indexOf("@")===-1){
        return "Invalid Email" ;
    }
    let parts =email.split("@");
    let username = parts[0];
    let domainName = parts[1];
    return `${username} sent you an email from ${domainName}`
}



function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
  for(let char of name){
    if(char>='0' && char <='9'){
      return true;
    }
  }
  return false;
}



function calculateFinalScore(obj) {
  if (typeof obj !== 'object' || 
      typeof obj.name !== 'string' || 
      typeof obj.testScore !== 'number' || obj.testScore > 50 || 
      typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 || 
      typeof obj.isFFamily !== 'boolean') {
      return "Invalid Input";
  }
  let finalScore = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily) {
      finalScore += 20;
  }
  return finalScore >= 80;
}



function  waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
    return "Invalid Input";
}
  let totalTime = 0;
  for(let i=0; i <waitingTimes.length; i++){
    totalTime = totalTime + waitingTimes[i];
  }
  const averageTime = Math.round(totalTime / waitingTimes.length);
  let remainingPeople = (serialNumber- 1) - waitingTimes.length;
  if (remainingPeople < 0) remainingPeople = 0;
  let isratWaitingTime = remainingPeople * averageTime;
  return isratWaitingTime;
}
