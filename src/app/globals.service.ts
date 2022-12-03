import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {

    locations = [{name: "Philaldelphia,PA", avgTemp: 56, annualRainInches: 20.42, avgHumidity: 64, beaches: 1, shopping: 5, hiking: 3, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 2, amusParks: 1, clubsBars: 5, casinos: 5, sightSeeing: 5, boardwalk: 1, concerts: 5, proSports: 5, cost: 3, accom: "Hotel,Airbnb", coordsN: 39.9, coordsE: -75.1}
                ,{name: "Pittsburgh,PA", avgTemp: 52, annualRainInches: 20.9, avgHumidity: 67, beaches: 1, shopping: 5, hiking: 3, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 2, amusParks: 3, clubsBars: 5, casinos: 5, sightSeeing: 3, boardwalk: 1, concerts: 5, proSports: 5, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.4, coordsE: -79.9}
                ,{name: "Erie,PA", avgTemp: 50, annualRainInches: 24.9, avgHumidity: 71, beaches: 4, shopping: 3, hiking: 2, camping: 1, outdoorSports: 3, winterSports: 1,
                waterSports: 4, amusParks: 4, clubsBars: 5, casinos: 3, sightSeeing: 3, boardwalk: 3, concerts: 3, proSports: 1, cost: 2, accom: "Hotel,Airbnb,Beach House", coordsN: 42.1, coordsE: -80.1}
                ,{name: "Lancaster,PA", avgTemp: 53, annualRainInches: 12.2, avgHumidity: 67, beaches: 1, shopping: 3, hiking: 2, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 2, clubsBars: 4, casinos: 2, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.0, coordsE: -76.3}
                ,{name: "Allentown,PA", avgTemp: 52, annualRainInches: 22.8, avgHumidity: 67, beaches: 1, shopping: 4, hiking: 3, camping: 1, outdoorSports: 2, winterSports: 2,
                waterSports: 1, amusParks: 5, clubsBars: 5, casinos: 3, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.6, coordsE: -75.4}                         
                ,{name: "Gettysburg,PA", avgTemp: 53, annualRainInches: 20.5, avgHumidity: 69, beaches: 1, shopping: 2, hiking: 3, camping: 1, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 4, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 39.8, coordsE: -77.2}
                ,{name: "Mt Pocono,PA", avgTemp: 48, annualRainInches: 43.7, avgHumidity: 70, beaches: 1, shopping: 2, hiking: 4, camping: 3, outdoorSports: 2, winterSports: 5,
                waterSports: 1, amusParks: 3, clubsBars: 3, casinos: 5, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel,Airbnb,Cabin", coordsN: 41.1, coordsE: -75.3}
                ,{name: "Scranton,PA", avgTemp: 50, annualRainInches: 20.1, avgHumidity: 67, beaches: 1, shopping: 2, hiking: 4, camping: 3, outdoorSports: 3, winterSports: 5,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 2, proSports: 1, cost: 2, accom: "Hotel,Airbnb,Cabin", coordsN: 41.4, coordsE: -75.6}
                ,{name: "King of Prussia,PA", avgTemp: 56, annualRainInches: 20.4, avgHumidity: 64, beaches: 1, shopping: 5, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 5, sightSeeing: 3, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.1, coordsE: -75.3}
                ,{name: "Hershey,PA", avgTemp: 55, annualRainInches: 38.8, avgHumidity: 64, beaches: 1, shopping: 2, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 5, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.2, coordsE: -76.6}                         
                ,{name: "Altoona,PA", avgTemp: 50, annualRainInches: 19.4, avgHumidity: 70, beaches: 1, shopping: 3, hiking: 2, camping: 2, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.5, coordsE: -78.4}
                ,{name: "Punxsutawney,PA", avgTemp: 48, annualRainInches: 21.8, avgHumidity: 72, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.9, coordsE: -78.9}
                ,{name: "State College,PA", avgTemp: 50, annualRainInches: 4.4, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 5, proSports: 4, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.7, coordsE: -77.8}
                ,{name: "Grove City,PA", avgTemp: 53, annualRainInches: 12.5, avgHumidity: 65, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 41.1, coordsE: -80.1}
                ,{name: "Uniontown,PA", avgTemp: 53, annualRainInches: 12.5, avgHumidity: 65, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 39.8, coordsE: -79.7}
                ,{name: "York,PA", avgTemp: 53, annualRainInches:20.5 , avgHumidity: 69, beaches: 1, shopping: 2, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 5, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 39.9, coordsE: -76.7}
                ,{name: "Williamsport,PA", avgTemp: 50, annualRainInches: 4.4, avgHumidity: 67, beaches: 1, shopping: 2, hiking: 2, camping: 2, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 2, cost: 2, accom: "Hotel,Airbnb", coordsN: 41.2, coordsE: -77.0}
                ,{name: "Somerset,PA", avgTemp: 48, annualRainInches: 43.3, avgHumidity: 83, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.0, coordsE: -79.0}
                ,{name: "Indiana,PA", avgTemp: 48, annualRainInches: 21.8, avgHumidity: 72, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.6, coordsE: -79.1}
                ,{name: "Jim Thorpe,PA", avgTemp: 52, annualRainInches: 22.8, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 3, camping: 3, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.8, coordsE: -75.7}
                ,{name: "Mansfield,PA", avgTemp: 50, annualRainInches: 20.1, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 2, camping: 2, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 41.8, coordsE: -77.1}
                ,{name: "Cherry Springs State Park,PA", avgTemp: 47, annualRainInches: 37.1, avgHumidity: 69, beaches: 1, shopping: 1, hiking: 5, camping: 5, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Cabin,Airbnb", coordsN: 41.6, coordsE: -77.8}                         
                ,{name: "Seven Springs,PA", avgTemp: 52, annualRainInches: 20.9, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 3, camping: 3, outdoorSports: 3, winterSports: 5,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel", coordsN: 40.0, coordsE: -79.3}
                ,{name: "Ohiopyle,PA", avgTemp: 53, annualRainInches: 25.2, avgHumidity: 68, beaches: 1, shopping: 1, hiking: 5, camping: 3, outdoorSports: 3, winterSports: 1,
                waterSports: 2, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Airbnb,Cabin", coordsN: 39.8, coordsE: -79.5}
                ,{name: "Delaware Water Gap,PA", avgTemp: 50, annualRainInches: 22.5, avgHumidity: 66, beaches: 1, shopping: 1, hiking: 5, camping: 3, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb,Cabin", coordsN: 40.9, coordsE: -75.1}
                ,{name: "Hickory Run State Park,PA", avgTemp: 48, annualRainInches: 43.7, avgHumidity: 70, beaches: 1, shopping: 1, hiking: 5, camping: 5, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Airbnb,Cabin", coordsN: 41.0, coordsE: -75.4}];

    matchingLocs: MatchingLoc[] = [];

    prefs = {warm_weather: 1, cold_weather: 1, rain: 1, humidity: 1, dry_climates: 1, beach: 1, shopping: 1, hiking: 1, camping: 1, outdoor_sports: 1, winter_sports: 1, water_sports: 1, amusement_parks: 1, 
            clubs_and_bars: 1, casinos: 1, sightseeing_tours: 1, boardwalk_attractions: 1, concerts: 1, professional_sports: 1, price: 1, distance: 1, hotel_resort: 1, airbnb: 1, beach_house: 1, cabin: 1,
            home: ""};
  
    constructor() { }

    getMatchingLocs(): MatchingLoc[]
    {
      return this.matchingLocs;
    }
}

export class MatchingLoc 
{
    public name: string;
    public matchingPercent: number;
    constructor(name: string, matchPer: number)
    {
        this.name = name;
        this.matchingPercent = matchPer;
    }
}
