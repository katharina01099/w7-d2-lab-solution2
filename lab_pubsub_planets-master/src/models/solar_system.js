const PubSub = require('../helpers/pub_sub.js')
const Planets = require('../data/planets.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};


SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:click', (event) => {
    const selectedIndex = event.detail;
    this.publishSolarSystemDetail(selectedIndex);
  });
};

SolarSystem.prototype.publishSolarSystemDetail = function (planetIndex) {
  const selectedPlanet = this.planets[planetIndex];
  PubSub.publish('SolarSystem:clicked-planet', selectedPlanet);
};


module.exports = SolarSystem;
