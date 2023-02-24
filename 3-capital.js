// (3) Print the following details name, capital, flag using forEach function

// Code:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all"); 
request.send();
request.onload = function()
{
   var result = JSON.parse(request.response)
   result.forEach(country => {
    var name = country.name.common;
    var capital = country.capital[0];
    var flag = country.flags.svg;
    console.log(`${name}, Capital: ${capital}, Flag: ${flag}`);
  });
} 