var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];


//function that takes in one employee array as argument and returns another array
function bonusArray(employee) {
  var totalComp = parseInt(employee[2]) + (bonusPercentage(employee)*parseInt(employee[2]))
  return [employee[0], (bonusPercentage(employee)*100) +"%", "$" + totalComp, "$" + Math.round(totalComp)];
}



function bonusPercentage(employee) {
  var bonusPercentage = 0;
  if (employee[3] <= 2) {
    bonusPercentage = 0;
  } else if (employee[3] == 3) {
    bonusPercentage = .04
  } else if (employee[3] == 4) {
    bonusPercentage = .06;
  } else if (employee[3] == 5) {
    bonusPercentage = .1;
  } //if employee rating meets above conditions, do that math...

  if (employee[1].length == 4) {
    bonusPercentage += .05
  } //if employee # is 4 digits long, add 5%

  if (parseInt(employee[2]) > 65000) {
    bonusPercentage -= .01;
  } //if income > 65000, subtract 5%

  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  } //if bonus > 13%, change to 13%

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  } //if bonus < 0%, change to 0%
  return bonusPercentage;
}

for (var i = 0; i < employees.length; i++) {
  console.log(bonusArray(employees[i]));
}
