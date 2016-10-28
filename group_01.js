/********
Give Data
********/
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

function Person([name, id, salary, rating]) {
  this.name = name;
  this.id = id;
  this.salary = parseInt(salary);
  this.rating = rating;
}

var employees = [atticus, jem, boo, scout, robert, mayella];

for (var i = 0; i < employees.length; i++) {
  employees[i] = new Person(employees[i]);
}

/******************************************************************************
function that takes in one employee array as argument and returns another array
******************************************************************************/
function bonusArray(employee) {
  var percentBonus = bonusPercentage(employee.rating, employee.id, employee.salary);

  var bonus = percentBonus * employee.salary;
  var totalComp = employee.salary + bonus;
  var localeOpts = {
    style: 'currency',
    currency: 'USD'
  };

  return [
    employee.name,
    percentBonus.toLocaleString(false, {style: 'percent'}),
    totalComp.toLocaleString('en-US', localeOpts),
    Math.round(bonus).toLocaleString('en-US', localeOpts)
  ];
}

/*************************
Calculate bonus percentage
*************************/
function bonusPercentage(rating, id, salary) {
  return limitBonus(performanceBonus(rating) + longevityBonus(id) - salaryDeduction(salary));
}

 // Integer (0-5) -> Float
 // Return bonus based on performance rating as a float representation of percentage of salary
function performanceBonus(rating) {
  switch(rating) {
    case 3:
      return .04;
    case 4:
      return .06;
    case 5:
      return .1;
    default:
      return 0;
  }
}

// String -> Float
// Return bonus based on longevity of employment as a float representation of percentage of salary
function longevityBonus(id) {
  if (id.length == 4) {
    return .05;
  } else {
    return 0;
  }
}

// Integer -> Float
// Return bonus decrement based on salary limit as a float representation of a percentage of salary
function salaryDeduction(salary) {
  if (salary > 65000) {
    return .01;
  } else {
    return 0;
  }
}

// Float -> Float
// Return bonus percentage limited by max and min bonus
function limitBonus(bonus) {
  return Math.max(Math.min(bonus, .13), 0);
}

var arrayList = document.getElementById("arrayList");

for (var i = 0; i < employees.length; i++) {
  var resultArray = (bonusArray(employees[i])) //create var and assign bonus array to
  var tr = document.createElement("TR"); //create trable row variable for <tr> element in html
  for (var j = 0; j < resultArray.length; j++) { //loop through each index of result array and:
    var td = document.createElement("TD"); //create table data variable for <td> element in html
    var textnode = document.createTextNode(resultArray[j]); //create textnode var and make an html text node
    td.appendChild(textnode); //append textnode to <td>
    tr.appendChild(td); //append table date to <tr>
  }
  arrayList.appendChild(tr); //append table row as a child of html element with ID arrayList
  console.log(resultArray);
}
