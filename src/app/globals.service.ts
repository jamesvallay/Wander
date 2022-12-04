import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {

    locations = [{name: "Philaldelphia,PA", avgTemp: 56, annualRainInches: 20.42, avgHumidity: 64, beaches: 1, shopping: 5, hiking: 3, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 2, amusParks: 1, clubsBars: 5, casinos: 5, sightSeeing: 5, boardwalk: 1, concerts: 5, proSports: 5, cost: 3, accom: "Hotel,Airbnb", coordsN: 39.9526, coordsE: -75.1652}
                ,{name: "Pittsburgh,PA", avgTemp: 52, annualRainInches: 20.9, avgHumidity: 67, beaches: 1, shopping: 5, hiking: 3, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 2, amusParks: 3, clubsBars: 5, casinos: 5, sightSeeing: 3, boardwalk: 1, concerts: 5, proSports: 5, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.4406, coordsE: -79.9959}
                ,{name: "Erie,PA", avgTemp: 50, annualRainInches: 24.9, avgHumidity: 71, beaches: 4, shopping: 3, hiking: 2, camping: 1, outdoorSports: 3, winterSports: 1,
                waterSports: 4, amusParks: 4, clubsBars: 5, casinos: 3, sightSeeing: 3, boardwalk: 3, concerts: 3, proSports: 1, cost: 2, accom: "Hotel,Airbnb,Beach House", coordsN: 42.1292, coordsE: -80.0851}
                ,{name: "Lancaster,PA", avgTemp: 53, annualRainInches: 12.2, avgHumidity: 67, beaches: 1, shopping: 3, hiking: 2, camping: 1, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 2, clubsBars: 4, casinos: 2, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.0379, coordsE: -76.3055}
                ,{name: "Allentown,PA", avgTemp: 52, annualRainInches: 22.8, avgHumidity: 67, beaches: 1, shopping: 4, hiking: 3, camping: 1, outdoorSports: 2, winterSports: 2,
                waterSports: 1, amusParks: 5, clubsBars: 5, casinos: 3, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.6023, coordsE: -75.4714}                         
                ,{name: "Gettysburg,PA", avgTemp: 53, annualRainInches: 20.5, avgHumidity: 69, beaches: 1, shopping: 2, hiking: 3, camping: 3, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 4, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 39.8309, coordsE: -77.2311}
                ,{name: "Mt Pocono,PA", avgTemp: 48, annualRainInches: 43.7, avgHumidity: 70, beaches: 1, shopping: 2, hiking: 4, camping: 3, outdoorSports: 2, winterSports: 5,
                waterSports: 1, amusParks: 5, clubsBars: 3, casinos: 5, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel,Airbnb,Cabin", coordsN: 41.1220, coordsE: -75.3646}
                ,{name: "Scranton,PA", avgTemp: 50, annualRainInches: 20.1, avgHumidity: 67, beaches: 1, shopping: 2, hiking: 4, camping: 3, outdoorSports: 3, winterSports: 5,
                waterSports: 1, amusParks: 3, clubsBars: 3, casinos: 1, sightSeeing: 5, boardwalk: 1, concerts: 2, proSports: 1, cost: 2, accom: "Hotel,Airbnb,Cabin", coordsN: 41.4090, coordsE: -75.6624}
                ,{name: "King of Prussia,PA", avgTemp: 56, annualRainInches: 20.4, avgHumidity: 64, beaches: 1, shopping: 5, hiking: 3, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 5, sightSeeing: 3, boardwalk: 1, concerts: 1, proSports: 1, cost: 2, accom: "Hotel,Airbnb", coordsN: 40.1013, coordsE: -75.3836}
                ,{name: "Hershey,PA", avgTemp: 55, annualRainInches: 38.8, avgHumidity: 64, beaches: 1, shopping: 2, hiking: 1, camping: 4, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 5, clubsBars: 2, casinos: 1, sightSeeing: 3, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.2859, coordsE: -76.6502}                         
                ,{name: "Altoona,PA", avgTemp: 50, annualRainInches: 19.4, avgHumidity: 70, beaches: 1, shopping: 3, hiking: 3, camping: 2, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 3, clubsBars: 2, casinos: 1, sightSeeing: 4, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.5187, coordsE: -78.3947}
                ,{name: "Punxsutawney,PA", avgTemp: 48, annualRainInches: 21.8, avgHumidity: 72, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 3, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.9437, coordsE: -78.9709}
                ,{name: "State College,PA", avgTemp: 50, annualRainInches: 4.4, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 5, proSports: 4, cost: 3, accom: "Hotel,Airbnb", coordsN: 40.7934, coordsE: -77.8600}
                ,{name: "Grove City,PA", avgTemp: 53, annualRainInches: 12.5, avgHumidity: 65, beaches: 1, shopping: 3, hiking: 2, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 41.1578, coordsE: -80.0887}
                ,{name: "Uniontown,PA", avgTemp: 53, annualRainInches: 12.5, avgHumidity: 65, beaches: 1, shopping: 2, hiking: 1, camping: 1, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 39.9001, coordsE: -79.7164}
                ,{name: "York,PA", avgTemp: 53, annualRainInches:20.5 , avgHumidity: 69, beaches: 1, shopping: 2, hiking: 1, camping: 1, outdoorSports: 1, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 5, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 3, cost: 1, accom: "Hotel,Airbnb", coordsN: 39.9626, coordsE: -76.7277}
                ,{name: "Williamsport,PA", avgTemp: 50, annualRainInches: 4.4, avgHumidity: 67, beaches: 1, shopping: 2, hiking: 2, camping: 2, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 4, boardwalk: 1, concerts: 1, proSports: 2, cost: 2, accom: "Hotel,Airbnb", coordsN: 41.2412, coordsE: -77.0011}
                ,{name: "Somerset,PA", avgTemp: 48, annualRainInches: 43.3, avgHumidity: 83, beaches: 1, shopping: 1, hiking: 4, camping: 5, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 2, casinos: 1, sightSeeing: 3, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.0084, coordsE: -79.0781}
                ,{name: "Indiana,PA", avgTemp: 48, annualRainInches: 21.8, avgHumidity: 72, beaches: 1, shopping: 1, hiking: 4, camping: 2, outdoorSports: 4, winterSports: 2,
                waterSports: 1, amusParks: 1, clubsBars: 3, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.6215, coordsE: -79.1525}
                ,{name: "Jim Thorpe,PA", avgTemp: 52, annualRainInches: 22.8, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 5, camping: 3, outdoorSports: 5, winterSports: 4,
                waterSports: 4, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 3, boardwalk: 1, concerts: 3, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 40.8759, coordsE: -75.7324}
                ,{name: "Mansfield,PA", avgTemp: 50, annualRainInches: 20.1, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 2, camping: 1, outdoorSports: 2, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb", coordsN: 41.8073, coordsE: -77.0775}
                ,{name: "Cherry Springs State Park,PA", avgTemp: 47, annualRainInches: 37.1, avgHumidity: 69, beaches: 2, shopping: 1, hiking: 5, camping: 5, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Cabin,Airbnb", coordsN: 41.6632, coordsE: -77.8234}                         
                ,{name: "Seven Springs,PA", avgTemp: 52, annualRainInches: 20.9, avgHumidity: 67, beaches: 1, shopping: 1, hiking: 3, camping: 2, outdoorSports: 3, winterSports: 5,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 3, accom: "Hotel", coordsN: 40.0230, coordsE: -79.2977}
                ,{name: "Ohiopyle,PA", avgTemp: 53, annualRainInches: 25.2, avgHumidity: 68, beaches: 1, shopping: 1, hiking: 5, camping: 2, outdoorSports: 3, winterSports: 1,
                waterSports: 3, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Airbnb,Cabin", coordsN: 39.8717, coordsE: -79.4923}
                ,{name: "Delaware Water Gap,PA", avgTemp: 50, annualRainInches: 22.5, avgHumidity: 66, beaches: 1, shopping: 1, hiking: 5, camping: 3, outdoorSports: 3, winterSports: 1,
                waterSports: 3, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 2, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Hotel,Airbnb,Cabin", coordsN: 40.9793, coordsE: -75.1430}
                ,{name: "Hickory Run State Park,PA", avgTemp: 48, annualRainInches: 43.7, avgHumidity: 70, beaches: 1, shopping: 1, hiking: 5, camping: 5, outdoorSports: 3, winterSports: 1,
                waterSports: 1, amusParks: 1, clubsBars: 1, casinos: 1, sightSeeing: 1, boardwalk: 1, concerts: 1, proSports: 1, cost: 1, accom: "Airbnb,Cabin", coordsN: 41.0247, coordsE: -75.7095}];

    locs_attracs = [{location: "Philaldelphia,PA", attracs: [{name:"The Fashion District", categories:["shopping"]}
                                                            ,{name:"Rivers Casino", categories:["casinos"]}
                                                            ,{name:"The Filmore Philadelphia", categories:["concerts"]}
                                                            ,{name:"Lincoln Financial Field", categories:["proSports"]}
                                                            ,{name:"The Liberty Bell", categories:["sightSeeing"]}]}
                   ,{location: "Pittsburgh,PA", attracs: [{name:"Tequila Cowboy", categories:["clubsBars"]}
                                                         ,{name:"Rivers Casino", categories:["casinos"]}
                                                         ,{name:"Stage AE", categories:["concerts"]}
                                                         ,{name:"Acrisure Stadium", categories:["proSports"]}
                                                         ,{name:"Point State Park", categories:["sightSeeing"]}]}
                   ,{location: "Erie,PA", attracs: [{name:"Beach 6", categories:["beaches"]}
                                                   ,{name:"Waldameer & Water World", categories:["amusParks"]}
                                                   ,{name:"Lawrence Park Golf Club", categories:["outdoorSports"]}
                                                   ,{name:"Presque Isle Downs & Casino", categories:["casinos"]}
                                                   ,{name:"Bicentennial Tower", categories:["sightSeeing"]}]}
                   ,{location: "Lancaster,PA", attracs: [{name:"The Exchange", categories:["clubsBars"]}
                                                        ,{name:"Dutch Wonderland", categories:["amusParks"]}
                                                        ,{name:"Lancaster Country Club", categories:["outdoorSports"]}
                                                        ,{name:"Riverfront Park", categories:["hiking"]}
                                                        ,{name:"Lancaster Science Factory", categories:["sightSeeing"]}]}
                   ,{location: "Allentown,PA", attracs: [{name:"Lehigh Valley Mall", categories:["shopping"]}
                                                        ,{name:"Dorney Park", categories:["amusParks"]}
                                                        ,{name:"Fegley's Allentown Brew Works", categories:["clubsBars"]}
                                                        ,{name:"Lehigh Mountain Park", categories:["hiking"]}
                                                        ,{name:"Lights in the Parkway", categories:["sightSeeing"]}]}
                   ,{location: "Gettysburg,PA", attracs: [{name:"Gettysburg Campground", categories:["camping"]}
                                                         ,{name:"Reid's Winery Tasting Room and Cider House", categories:["clubsBars"]}
                                                         ,{name:"Appalachian Brewing Company of Gettysburg", categories:["clubsBars"]}
                                                         ,{name:"Gettysburg National Military Park", categories:["sightSeeing", "hiking"]}
                                                         ,{name:"Gettysburg Museum of History", categories:["sightSeeing"]}]}
                   ,{location: "Mt Pocono,PA", attracs: [{name:"Mt Airy Casino Resort", categories:["casinos"]}
                                                        ,{name:"Kalahari Indoor Waterpark", categories:["amusParks"]}
                                                        ,{name:"Camelback Ski Resort", categories:["amusParks", "winterSports"]}
                                                        ,{name:"Pocono Brewery Company", categories:["clubsBars"]}
                                                        ,{name:"Tobyhanna State Game Lands Shooting Range", categories:["outdoorSports"]}]}
                   ,{location: "Scranton,PA", attracs: [{name:"Electric City Aquarium & Reptile Den", categories:["sightSeeing"]}
                                                       ,{name:"Steamtown National Historic Site", categories:["sightSeeing"]}
                                                       ,{name:"Montage Mountain Resorts", categories:["amusParks", "winterSports"]}
                                                       ,{name:"Glenmaura National Golf Club", categories:["outdoorSports"]}
                                                       ,{name:"Campbell's Ledge Lookout Trail", categories:["hiking"]}]}
                   ,{location: "King of Prussia,PA", attracs: [{name:"King of Prussia Mall", categories:["shopping"]}
                                                              ,{name:"Valley Forge Casino Resort", categories:["casinos"]}
                                                              ,{name:"Valley Forge National Historical Park", categories:["hiking", "sightSeeing"]}]}
                   ,{location: "Hershey,PA", attracs: [{name:"ZooAmerica", categories:["sightSeeing"]}
                                                      ,{name:"Hershey Park", categories:["amusParks"]}
                                                      ,{name:"Hershey's Chocolate World", categories:["sightSeeing"]}
                                                      ,{name:"Hersheypark Camping Resort", categories:["camping"]}]}
                   ,{location: "Altoona,PA", attracs: [{name:"Wopsononock Lookout", categories:["hiking"]}
                                                      ,{name:"Horseshoe Curve National Historic Landmark", categories:["sightSeeing"]}
                                                      ,{name:"Railroaders Memorial Museum", categories:["sightSeeing"]}
                                                      ,{name:"Urban Air Trampoline and Adventure Park", categories:["amusParks"]}]}
                   ,{location: "Punxsutawney,PA", attracs: [{name:"Punxsutawney Weather Discovery Center", categories:["sightSeeing"]}
                                                           ,{name:"Phil's Burrow", categories:["sightSeeing"]}]}
                   ,{location: "State College,PA", attracs: [{name:"Palmer Museum of Art", categories:["sightSeeing"]}
                                                            ,{name:"Old Main", categories:["sightSeeing"]}
                                                            ,{name:"Cafe 210 West", categories:["clubsBars"]}
                                                            ,{name:"Beaver Stadium", categories:["proSports"]}
                                                            ,{name:"The Brewery", categories:["clubsBars"]}]}
                   ,{location: "Grove City,PA", attracs: [{name:"Koehler Brewing Company", categories:["clubsBars"]}
                                                         ,{name:"Keystone Safari", categories:["sightSeeing"]}
                                                         ,{name:"Premium Outlets", categories:["shopping"]}
                                                         ,{name:"Emmet's Orchard", categories:["shopping", "hiking"]}
                                                         ,{name:"Broad Street Grille", categories:["clubsBars"]}]}
                   ,{location: "Uniontown,PA", attracs: [{name:"Uniontown Country Club", categories:["outdoorSports"]}
                                                        ,{name:"Summers Nightclub", categories:["clubsBars"]}
                                                        ,{name:"O'Gillies Pub & Restaurant", categories:["clubsBars"]}
                                                        ,{name:"Antique & Craft Mall", categories:["shopping"]}]}
                   ,{location: "York,PA", attracs: [{name:"Hollywood Casino York", categories:["casinos"]}
                                                   ,{name:"York Central Market House", categories:["shopping"]}
                                                   ,{name:"King George Speakeasy", categories:["clubsBars"]}
                                                   ,{name:"Holy Hound Taproom", categories:["clubsBars"]}
                                                   ,{name:"Grandfalloons Tavern", categories:["clubsBars"]}
                                                   ,{name:"PeoplesBank Park", categories:["proSports"]}]}
                   ,{location: "Williamsport,PA", attracs: [{name:"Susquehanna State Park", categories:["hiking", "outdoorSports", "camping"]}
                                                           ,{name:"World of Little League Museum", categories:["sightSeeing", "outdoorSports"]}
                                                           ,{name:"Taber Museum", categories:["sightSeeing"]}
                                                           ,{name:"Nomad Distilling Co.", categories:["clubsBars"]}
                                                           ,{name:"Otto Book Store", categories:["shopping"]}]}
                   ,{location: "Somerset,PA", attracs: [{name:"Laurel Hill State Park", categories:["hiking", "camping", "outdoorSports"]}
                                                       ,{name:"Quecreek Mine Rescue Site", categories:["sightSeeing"]}
                                                       ,{name:"Glades Pike Winery", categories:["clubsBars"]}
                                                       ,{name:"Kooser State Park", categories:["camping", "hiking", "outdoorSports"]}
                                                       ,{name:"Laurel Summit State Park", categories:["camping", "hiking", "outdoorSports"]}]}
                   ,{location: "Indiana,PA", attracs: [{name:"S&T Bank Arena", categories:["winterSports", "proSports"]}
                                                      ,{name:"The Jimmy Stewart Museum", categories:["sightSeeing"]}
                                                      ,{name:"Indiana Country Club", categories:["outdoorSports"]}
                                                      ,{name:"Two Lick Creek Reservoir", categories:["outdoorSports", "waterSports"]}
                                                      ,{name:"IUP Co-op Park", categories:["outdoorSports", "hiking"]}
                                                      ,{name:"Brunzies", categories:["clubsBars"]}
                                                      ,{name:"Wolfies", categories:["clubsBars"]}]}
                   ,{location: "Jim Thorpe,PA", attracs: [{name:"Penn's Peak", categories:["concerts"]}
                                                         ,{name:"Blue Mountain Resort", categories:["winterSports", "hiking", "outdoorSports"]}
                                                         ,{name:"Flagstaff Mountain", categories:["sightSeeing", "hiking", "outdoorSports"]}
                                                         ,{name:"Old Jail Museum", categories:["sightSeeing"]}
                                                         ,{name:"Whitewater Rafting Adventures", categories:["outdoorSports", "waterSports"]}
                                                         ,{name:"The Mauch Chunk Opera House", categories:["concerts"]}
                                                         ,{name:"Bear Mountain Butterfly Sanctuary", categories:["sightSeeing"]}]}
                   ,{location: "Mansfield,PA", attracs: [{name:"Hills Creek State Park", categories:["hiking", "outdoorSports"]}
                                                        ,{name:"Lamb's Creek Bike and Hike Trail", categories:["hiking", "outdoorSports"]}]}
                   ,{location: "Cherry Springs State Park,PA", attracs: [{name:"Cherry Springs State Park", categories:["hiking", "outdoorSports", "camping"]}
                                                                        ,{name:"Patterson State Park", categories:["camping", "hiking", "waterSports", "outdoorSports"]}
                                                                        ,{name:"Proutry Place State Park", categories:["hiking", "outdoorSports", "camping"]}
                                                                        ,{name:"Lyman Run State Park", categories:["camping", "hiking", "waterSports", "outdoorSports", "beaches"]}]}
                   ,{location: "Seven Springs,PA", attracs: [{name:"Seven Springs Mountain Resort", categories:["outdoorSports", "winterSports", "hiking"]}
                                                            ,{name:"Highlands Golf Club", categories:["outdoorSports"]}
                                                            ,{name:"Red Oak / Beltz Trail", categories:["hiking", "outdoorSports"]}
                                                            ,{name:"Swiss Mountain Trail", categories:["hiking"]}]}
                   ,{location: "Ohiopyle,PA", attracs: [{name:"Ohiopyle State Park", categories:["hiking", "sightSeeing", "outdoorSports"]}
                                                       ,{name:"Ferncliff Peninsula Natural Area", categories:["hiking", "waterSports"]}
                                                       ,{name:"Wilderness Voyageurs", categories:["waterSports", "outdoorSports"]}]}
                   ,{location: "Delaware Water Gap,PA", attracs: [{name:"Blue Mountain Lakes", categories:["waterSports", "hiking", "outdoorSports"]}
                                                                 ,{name:"River Bend Campsite", categories:["camping"]}
                                                                 ,{name:"Delware Water Gap National Rec. Area", categories:["sightSeeing", "hiking", "camping", "outdoorSports", "waterSports"]}]}
                   ,{location: "Hickory Run State Park,PA", attracs: [{name:"Hickory Run State Park", categories:["hiking", "camping", "outdoorSports"]}
                                                                     ,{name:"Hickory Run Disc Golf", categories:["outdoorSports"]}
                                                                     ,{name:"Fireline Trail", categories:["hiking", "outdoorSports"]}
                                                                     ,{name:"Camptel Poconos", categories:["camping"]}
                                                                     ,{name:"Hawk Falls", categories:["hiking", "sightSeeing"]}]}]

    matchingLocs: MatchingLoc[] = [];

    prefs = {warm_weather: 3, cold_weather: 3, rain: 3, humidity: 3, dry_climates: 3, beach: 3, shopping: 3, hiking: 3, camping: 3, outdoor_sports: 3, winter_sports: 3, water_sports: 3, amusement_parks: 3, 
            clubs_and_bars: 3, casinos: 3, sightseeing_tours: 3, boardwalk_attractions: 3, concerts: 3, professional_sports: 3, price: 3, distance: 3, hotel_resort: 3, airbnb: 3, beach_house: 3, cabin: 3,
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
    public attracs: Attraction[];
    public coordsN: number;
    public coordsE: number;
    constructor(name: string, matchPer: number, attracs: Attraction[], cN: number, cE: number)
    {
        this.name = name;
        this.matchingPercent = matchPer;
        this.attracs = attracs;
        this.coordsN = cN;
        this.coordsE = cE;
    }
}

export class Attraction
{
  public name: string;
  public categories: string[];
  constructor(name: string, cat: string[])
  {
    this.name = name;
    this.categories = cat;
  }
}
