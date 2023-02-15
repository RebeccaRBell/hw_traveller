const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const start_locations = this.journeys.map((journey) => {
      return journey.startLocation;
    })
    return start_locations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end_locations = this.journeys.map((journey) => {
    return journey.endLocation;
  })
  return end_locations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  journeys = this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  journeys = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
  return journeys;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((totalDistance, journey) => {
    return totalDistance + journey.distance;
  }, 0)
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique_transport = this.journeys.forEach((journey) => {
    return journey.transport !== journey.transport
  })
};


module.exports = Traveller;
