var containerEle = document.body.querySelector(".container");
                                               
var num1=Number(prompt("What is your bill?"));                             

var Tax = num1*(".07");

var bill= num1+Tax;

var Tip = bill*(".05");

var Total = bill+Tip;

document.write('Your Total is $' + Total);