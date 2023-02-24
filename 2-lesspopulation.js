// (2) Get all the countries with a population of less than 2 lakhs using Filter function

// Code:

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all"); 
request.send();
request.onload = function()
{
   var result = JSON.parse(request.response)
   var Countries = result.filter(country => country.population < 200000);
   var CountryNames = Countries.map(country => country.name.common);
   console.log(CountryNames);
} 