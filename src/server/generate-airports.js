const airportsBefore = require('./airports');
const fs =require('fs');
let airportsAfter = [];

for (let i in airportsBefore) {
    const airport = airportsBefore[i];
    delete(airport.elevation);
    if (airport.iata != ''){
        airportsAfter.push(airport);
    }
}

fs.writeFileSync('./airports-alain.json', JSON.stringify(airportsAfter));
