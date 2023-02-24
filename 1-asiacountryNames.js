// (1) Get all the countries from the Asia continent /region using the Filter function

// Code:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all"); 
request.send();
request.onload = function()
{
   var result = JSON.parse(request.response)
   var asiaCountries = result.filter(country => country.region.includes("Asia"));
   var asiaCountryNames = asiaCountries.map(country => country.name.common);
   console.log(asiaCountryNames)
} 