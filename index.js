/**
 * const numbers= [34,87,56,28,76];
 * const number = numbers.find(function(number,index){
   console.log(index)
   if (number===56)
   return number
});

console.log(number);


const number2= numbers.find((number)=>number===87);
console.log(number2);
 */


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ];

  function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    if (winRecord !== undefined) {
      return winRecord.year;
    } else {
      return undefined;
    }
  } 
  const yearOfWin = superbowlWin(record);
if (yearOfWin !== undefined) {
  console.log(`The Denver Broncos won the Superbowl in ${yearOfWin}.`);
} else {
  console.log("The Denver Broncos have not won the Superbowl.");
}