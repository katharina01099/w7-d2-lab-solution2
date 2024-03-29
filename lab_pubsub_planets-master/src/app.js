const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const SelectView = require('./views/select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const selectElement = document.querySelector('nav.planets-menu');
  // console.log(selectElement);
  const planetNav = new SelectView(selectElement);
  planetNav.bindEvents();

  const solar_systemDataSource = new SolarSystem();
  solar_systemDataSource.bindEvents();

});
