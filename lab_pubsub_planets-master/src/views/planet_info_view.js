const PubSub = require('../helpers/pub_sub.js');
const Planets = require('../data/planets.js');

const PlanetInfoView = function () {


};


PlanetInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SolarSystem:clicked-planet', (event) => {
    const planet = event.detail;
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function (planet) {
  const planetInfo = document.createElement('p');
  planetInfo.textContent = `The ${planet.name}, has an orbit of '${planet.orbit},
  a day of ${planet.day},
  a surface Area of ${planet.surfaceArea},
  a volume of ${planet.volume},
  a day of ${planet.gravity},
  ${planet.moons} and looks like this ${planet.image}.`;
  this.container.innerHTML = '';
  this.container.appendChild(planetInfo);
};

module.exports = PlanetInfoView;
