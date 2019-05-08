'use strict'
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if (!countryName.length) countryName = 'Poland';

  fetch(url + countryName)
    .then(function(resp) {
      return resp.json();
    })
    .then(showCountriesList);
}

function showCountriesList(resp) {
  countriesList.innerHTML = '';
  resp.forEach(function(item) {
    var countryContainer = document.createElement('ul');
    countryContainer.setAttribute('class', 'country-container');
    countriesList.appendChild(countryContainer)

    var countryFlag = document.createElement('img');
    countryFlag.setAttribute('src', item.flag);

    var countryFlagContainer = document.createElement('li');
    var countryName = document.createElement('li');
    var countryCapital = document.createElement('li');
    var countryRegion = document.createElement('li');
    var countryPopulation = document.createElement('li');

    countryName.innerHTML = 'Nazwa państwa: ' + item.name;
    countryCapital.innerHTML = 'Stolica: ' + item.capital;
    countryRegion.innerHTML = 'Region: ' + item.region;
    countryPopulation.innerHTML = 'Populacja: ' + item.population;

    countryContainer.appendChild(countryFlagContainer);
    countryFlagContainer.innerHTML = countryFlag;
    countryContainer.appendChild(countryName);
    countryContainer.appendChild(countryCapital);
    countryContainer.appendChild(countryRegion);
    countryContainer.appendChild(countryPopulation);

  });
}
