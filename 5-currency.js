// (5) Print the country which uses US Dollars as currency

// Code:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all"); 
request.send();
request.onload = function()
{
   var result = JSON.parse(request.response)
   const countryWithUSD = result.find(country => country.currencies.USD);
    console.log(`The country that uses US Dollars as its currency is ${countryWithUSD.name.common}`);
} 