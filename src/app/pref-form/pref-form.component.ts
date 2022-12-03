import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { GlobalsService, MatchingLoc } from 'src/app/globals.service';

@Component({
  selector: 'app-pref-form',
  templateUrl: './pref-form.component.html',
  styleUrls: ['./pref-form.component.css']
})
export class PrefFormComponent implements OnInit {
  
  locations;
  matchingLocs: MatchingLoc[] = [];
  prefs;
  
  constructor(private router: Router, private route: ActivatedRoute, private globals: GlobalsService) 
  { 
    this.locations = this.globals.locations;
    this.matchingLocs = this.globals.getMatchingLocs();
    this.prefs = this.globals.prefs;
    
    this.route.queryParams.subscribe(params =>
    {
      if (params['setSliders'] === 'true' && (document.getElementById("warm_weather")) as HTMLSelectElement != null) 
      {
        this.initSliders();
      }

      console.log("matchingLocs.length = "+this.globals.getMatchingLocs().length);
    });
  }
  
  ngOnInit(): void
  {
    this.initSliders();
  }

  public initSliders()
  {
    //console.log("prefs.warm_weather = "+(prefs.warm_weather+""));

    ((document.getElementById("warm_weather")) as HTMLSelectElement)!.value = this.prefs.warm_weather+"";
    document.getElementById("warm_weather_value")!.textContent = "Value = "+this.prefs.warm_weather;

    ((document.getElementById("cold_weather")) as HTMLSelectElement)!.value = this.prefs.cold_weather+"";
    document.getElementById("cold_weather_value")!.textContent = "Value = "+this.prefs.cold_weather;

    ((document.getElementById("rain")) as HTMLSelectElement)!.value = this.prefs.rain+"";
    document.getElementById("rain_value")!.textContent = "Value = "+this.prefs.rain;

    ((document.getElementById("humitidy")) as HTMLSelectElement)!.value = this.prefs.humidity+"";
    document.getElementById("humitidy_value")!.textContent = "Value = "+this.prefs.humidity;

    ((document.getElementById("dry_climates")) as HTMLSelectElement)!.value = this.prefs.dry_climates+"";
    document.getElementById("dry_climates_value")!.textContent = "Value = "+this.prefs.dry_climates;

    ((document.getElementById("beach")) as HTMLSelectElement)!.value = this.prefs.beach+"";
    document.getElementById("beach_value")!.textContent = "Value = "+this.prefs.beach;

    ((document.getElementById("shopping")) as HTMLSelectElement)!.value = this.prefs.shopping+"";
    document.getElementById("shopping_value")!.textContent = "Value = "+this.prefs.shopping;

    ((document.getElementById("hiking")) as HTMLSelectElement)!.value = this.prefs.hiking+"";
    document.getElementById("hiking_value")!.textContent = "Value = "+this.prefs.hiking;

    ((document.getElementById("camping")) as HTMLSelectElement)!.value = this.prefs.camping+"";
    document.getElementById("camping_value")!.textContent = "Value = "+this.prefs.camping;

    ((document.getElementById("outdoor_sports")) as HTMLSelectElement)!.value = this.prefs.outdoor_sports+"";
    document.getElementById("outdoor_sports_value")!.textContent = "Value = "+this.prefs.outdoor_sports;

    ((document.getElementById("winter_sports")) as HTMLSelectElement)!.value = this.prefs.winter_sports+"";
    document.getElementById("winter_sports_value")!.textContent = "Value = "+this.prefs.winter_sports;

    ((document.getElementById("water_sports")) as HTMLSelectElement)!.value = this.prefs.water_sports+"";
    document.getElementById("water_sports_value")!.textContent = "Value = "+this.prefs.water_sports;

    ((document.getElementById("amusement_parks")) as HTMLSelectElement)!.value = this.prefs.amusement_parks+"";
    document.getElementById("amusement_parks_value")!.textContent = "Value = "+this.prefs.amusement_parks;

    ((document.getElementById("clubs_and_bars")) as HTMLSelectElement)!.value = this.prefs.clubs_and_bars+"";
    document.getElementById("clubs_and_bars_value")!.textContent = "Value = "+this.prefs.clubs_and_bars;

    ((document.getElementById("casinos")) as HTMLSelectElement)!.value = this.prefs.casinos+"";
    document.getElementById("casinos_value")!.textContent = "Value = "+this.prefs.casinos;

    ((document.getElementById("sightseeing_tours")) as HTMLSelectElement)!.value = this.prefs.sightseeing_tours+"";
    document.getElementById("sightseeing_tours_value")!.textContent = "Value = "+this.prefs.sightseeing_tours;

    ((document.getElementById("boardwalk_attractions")) as HTMLSelectElement)!.value = this.prefs.boardwalk_attractions+"";
    document.getElementById("boardwalk_attractions_value")!.textContent = "Value = "+this.prefs.boardwalk_attractions;

    ((document.getElementById("concerts")) as HTMLSelectElement)!.value = this.prefs.concerts+"";
    document.getElementById("concerts_value")!.textContent = "Value = "+this.prefs.concerts;

    ((document.getElementById("professional_sports")) as HTMLSelectElement)!.value = this.prefs.professional_sports+"";
    document.getElementById("professional_sports_value")!.textContent = "Value = "+this.prefs.professional_sports;

    ((document.getElementById("price")) as HTMLSelectElement)!.value = this.prefs.price+"";
    document.getElementById("price_value")!.textContent = "Value = "+this.prefs.price;

    ((document.getElementById("distance")) as HTMLSelectElement)!.value = this.prefs.distance+"";
    document.getElementById("distance_value")!.textContent = "Value = "+this.prefs.distance;

    ((document.getElementById("hotel_resort")) as HTMLSelectElement)!.value = this.prefs.hotel_resort+"";
    document.getElementById("hotel_resort_value")!.textContent = "Value = "+this.prefs.hotel_resort;

    ((document.getElementById("airbnb")) as HTMLSelectElement)!.value = this.prefs.airbnb+"";
    document.getElementById("airbnb_value")!.textContent = "Value = "+this.prefs.airbnb;

    ((document.getElementById("beach_house")) as HTMLSelectElement)!.value = this.prefs.beach_house+"";
    document.getElementById("beach_house_value")!.textContent = "Value = "+this.prefs.beach_house;

    ((document.getElementById("cabin")) as HTMLSelectElement)!.value = this.prefs.cabin+"";
    document.getElementById("cabin_value")!.textContent = "Value = "+this.prefs.cabin;

    var home_input = (document.getElementById("home_input")) as HTMLSelectElement;
    for (var i=0; i<home_input.options.length; i++)
    {
      if (home_input.options[i].text == this.prefs.home)
      {
        ((document.getElementById("home_input")) as HTMLSelectElement)!.selectedIndex = i;
        break;
      }
    }
  }

  public submitTheDataMate()
  {
    //Resets matching locations array
    this.matchingLocs.splice(0, this.matchingLocs.length);
    
    var home_input = (document.getElementById("home_input")) as HTMLSelectElement;
    var index = home_input.selectedIndex;
    var option = home_input.options[index];
    var home_input_value = option.text;
    if (home_input_value == "")
      alert("Please specify a home location");
    else
    {
      console.clear();

      console.log("home_input_value = "+home_input_value);
      this.prefs.home = home_input_value;
      
      let warm_weather = document.getElementById("warm_weather_value")?.textContent;
      let warm_weather_value = parseInt(warm_weather!?.substring(8, warm_weather.length));
      this.prefs.warm_weather = warm_weather_value;

      let cold_weather = document.getElementById("cold_weather_value")?.textContent;
      let cold_weather_value = parseInt(cold_weather!?.substring(8, cold_weather.length));
      this.prefs.cold_weather = cold_weather_value;

      let rain = document.getElementById("rain_value")?.textContent;
      let rain_value = parseInt(rain!?.substring(8, rain.length));
      this.prefs.rain = rain_value;

      let humitidy = document.getElementById("humitidy_value")?.textContent;
      let humitidy_value = parseInt(humitidy!?.substring(8, humitidy.length));
      this.prefs.humidity = humitidy_value;

      let dry_climates= document.getElementById("dry_climates_value")?.textContent;
      let dry_climates_value = parseInt(dry_climates!?.substring(8, dry_climates.length));
      this.prefs.dry_climates = dry_climates_value;

      let beach = document.getElementById("beach_value")?.textContent;
      let beach_value = parseInt(beach!?.substring(8, beach.length));
      this.prefs.beach = beach_value;

      let shopping = document.getElementById("shopping_value")?.textContent;
      let shopping_value = parseInt(shopping!?.substring(8, shopping.length));
      this.prefs.shopping = shopping_value;

      let hiking = document.getElementById("hiking_value")?.textContent;
      let hiking_value = parseInt(hiking!?.substring(8, hiking.length));
      this.prefs.hiking = hiking_value;

      let camping = document.getElementById("camping_value")?.textContent;
      let camping_value = parseInt(camping!?.substring(8, camping.length));
      this.prefs.camping = camping_value;

      let outdoor_sports = document.getElementById("outdoor_sports_value")?.textContent;
      let outdoor_sports_value = parseInt(outdoor_sports!?.substring(8, outdoor_sports.length));
      this.prefs.outdoor_sports = outdoor_sports_value;

      let winter_sports = document.getElementById("winter_sports_value")?.textContent;
      let winter_sports_value = parseInt(winter_sports!?.substring(8, winter_sports.length));
      this.prefs.winter_sports = winter_sports_value;

      let water_sports = document.getElementById("water_sports_value")?.textContent;
      let water_sports_value = parseInt(water_sports!?.substring(8, water_sports.length));
      this.prefs.water_sports = water_sports_value;

      let amusement_parks = document.getElementById("amusement_parks_value")?.textContent;
      let amusement_parks_value = parseInt(amusement_parks!?.substring(8, amusement_parks.length));
      this.prefs.amusement_parks = amusement_parks_value;

      let clubs_and_bars = document.getElementById("clubs_and_bars_value")?.textContent;
      let clubs_and_bars_value = parseInt(clubs_and_bars!?.substring(8, clubs_and_bars.length));
      this.prefs.clubs_and_bars = clubs_and_bars_value;

      let casinos = document.getElementById("casinos_value")?.textContent;
      let casinos_value = parseInt(casinos!?.substring(8, casinos.length));
      this.prefs.casinos = casinos_value;

      let sightseeing_tours = document.getElementById("sightseeing_tours_value")?.textContent;
      let sightseeing_tours_value = parseInt(sightseeing_tours!?.substring(8, sightseeing_tours.length));
      this.prefs.sightseeing_tours = sightseeing_tours_value;

      let boardwalk_attractions = document.getElementById("boardwalk_attractions_value")?.textContent;
      let boardwalk_attractions_value = parseInt(boardwalk_attractions!?.substring(8, boardwalk_attractions.length));
      this.prefs.boardwalk_attractions = boardwalk_attractions_value;
      
      let concerts = document.getElementById("concerts_value")?.textContent;
      let concerts_value = parseInt(concerts!?.substring(8, concerts.length));
      this.prefs.concerts = concerts_value;

      let professional_sports = document.getElementById("professional_sports_value")?.textContent;
      let professional_sports_value = parseInt(professional_sports!?.substring(8, professional_sports.length));
      this.prefs.professional_sports = professional_sports_value;

      let price = document.getElementById("price_value")?.textContent;
      let price_value = parseInt(price!?.substring(8, price.length));
      this.prefs.price = price_value;

      let distance = document.getElementById("distance_value")?.textContent;
      let distance_value = parseInt(distance!?.substring(8, distance.length));
      this.prefs.distance = distance_value;

      let hotel_resort = document.getElementById("hotel_resort_value")?.textContent;
      let hotel_resort_value = parseInt(hotel_resort!?.substring(8, hotel_resort.length));
      this.prefs.hotel_resort = hotel_resort_value;

      let airbnb = document.getElementById("airbnb_value")?.textContent;
      let airbnb_value = parseInt(airbnb!?.substring(8, airbnb.length));
      this.prefs.airbnb = airbnb_value;

      let beach_house = document.getElementById("beach_house_value")?.textContent;
      let beach_house_value = parseInt(beach_house!?.substring(8, beach_house.length));
      this.prefs.beach_house = beach_house_value;

      let cabin = document.getElementById("cabin_value")?.textContent;
      let cabin_value = parseInt(cabin!?.substring(8, cabin.length));
      this.prefs.cabin = cabin_value;
      
      var coordsN = 0;
      var coordsE = 0;

      var avgTempMin = 100;
      var avgTempMax = 0;
      var annualRainInchesMin = 100;
      var annualRainInchesMax = 0;
      var distanceMin = 100;
      var distanceMax = 0;
      
      for (var i=0; i<this.locations.length; i++)
      {
        if (home_input_value == this.locations[i].name)
        {
          coordsN = this.locations[i].coordsN;
          coordsE = this.locations[i].coordsE;
        }

        if (this.locations[i].avgTemp > avgTempMax)
          avgTempMax = this.locations[i].avgTemp;
        else if (this.locations[i].avgTemp < avgTempMin)
          avgTempMin = this.locations[i].avgTemp;

        if (this.locations[i].annualRainInches > annualRainInchesMax)
          annualRainInchesMax = this.locations[i].annualRainInches;
        else if (this.locations[i].annualRainInches < annualRainInchesMin)
          annualRainInchesMin = this.locations[i].annualRainInches;
      }
 
      for (var i=0; i<this.locations.length; i++)
      {
        var distanceN = Math.abs(this.locations[i].coordsN - coordsN);
        var distanceE = Math.abs(this.locations[i].coordsE - coordsE);
        var distanceAmnt = Math.sqrt(Math.pow(distanceN, 2)+Math.pow(distanceE, 2));

        if (distanceAmnt > distanceMax)
          distanceMax = distanceAmnt;
        else if (distanceAmnt < distanceMin)
          distanceMin = distanceAmnt;
      }

      var avgTempTotalDivisor = (avgTempMax - avgTempMin)/4;
      var avgAnnualRainInchesDivisor = (annualRainInchesMax - annualRainInchesMin)/4;
      var distanceDivisor = (distanceMax - distanceMin)/4;

      //console.log("avgTempMin = "+avgTempMin);
      //console.log("avgTempMax = "+avgTempMax);
      //console.log("avgTempTotalDivisor = "+avgTempTotalDivisor);
      
      //console.log("annualRainInchesMin = "+annualRainInchesMin);
      //console.log("annualRainInchesMax = "+annualRainInchesMax);
      //console.log("avgAnnualRainInchesDivisor = "+avgAnnualRainInchesDivisor);

      //console.log("distanceMin = "+distanceMin);
      //console.log("distanceMax = "+distanceMax);
      //console.log("distanceDivisor = "+distanceDivisor);
      
      for (var i=0; i<this.locations.length; i++)
      {
        var loc = this.locations[i];
        var matchPer = 0;

        matchPer += Math.abs((Math.round((loc.avgTemp-avgTempMin)/avgTempTotalDivisor)+1) - warm_weather_value)*(-25) + 100;
        matchPer += (4-(Math.abs((Math.round((loc.avgTemp-avgTempMin)/avgTempTotalDivisor)+1) - cold_weather_value)))*(-25) + 100;
        matchPer += Math.abs((Math.round((loc.annualRainInches-annualRainInchesMin)/avgAnnualRainInchesDivisor)+1) - rain_value)*(-25) + 100;
        matchPer += Math.abs((Math.round(loc.avgHumidity/25)+1) - humitidy_value)*(-25) + 100;
        matchPer += Math.abs((Math.round(loc.avgHumidity/25)+1) - dry_climates_value)*(-25) + 100;
        matchPer += Math.abs(loc.beaches - beach_value)*(-25) + 100;
        matchPer += Math.abs(loc.shopping - shopping_value)*(-25) + 100;
        matchPer += Math.abs(loc.hiking - hiking_value)*(-25) + 100;
        matchPer += Math.abs(loc.camping - camping_value)*(-25) + 100;
        matchPer += Math.abs(loc.outdoorSports - outdoor_sports_value)*(-25) + 100;
        matchPer += Math.abs(loc.winterSports - winter_sports_value)*(-25) + 100;
        matchPer += Math.abs(loc.waterSports - water_sports_value)*(-25) + 100;
        matchPer += Math.abs(loc.amusParks - amusement_parks_value)*(-25) + 100;
        matchPer += Math.abs(loc.clubsBars - clubs_and_bars_value)*(-25) + 100;
        matchPer += Math.abs(loc.casinos - casinos_value)*(-25) + 100;
        matchPer += Math.abs(loc.sightSeeing - sightseeing_tours_value)*(-25) + 100;
        matchPer += Math.abs(loc.boardwalk - boardwalk_attractions_value)*(-25) + 100;
        matchPer += Math.abs(loc.concerts - concerts_value)*(-25) + 100;
        matchPer += Math.abs(loc.proSports - professional_sports_value)*(-25) + 100;

        if (price_value == 3) 
          matchPer += 100;
        else
          matchPer += Math.abs(loc.cost - price_value)*(-25) + 100;

        var distanceN = Math.abs(loc.coordsN - coordsN);
        var distanceE = Math.abs(loc.coordsE - coordsE);
        var distanceAmnt = Math.sqrt(Math.pow(distanceN, 2)+Math.pow(distanceE, 2));

        if (distance_value == 3) 
          matchPer += 100;
        else
          matchPer += Math.abs((Math.round((distanceAmnt-distanceMin)/distanceDivisor)+1) - distance_value)*(-25) + 100;

        //console.log(loc.name+" distance from home = "+distanceAmnt);

        var loc_accoms = loc.accom.split(",").sort();

        if (hotel_resort_value == 3) 
          matchPer += 100;
        else if (hotel_resort_value > 3 && this.accomsMatch("Hotel", loc_accoms)) 
          matchPer += 100;
        else if (hotel_resort_value < 3 && !this.accomsMatch("Hotel", loc_accoms))
          matchPer += 100;
        else 
          matchPer += 0;

        if (airbnb_value == 3)
          matchPer += 100;
        else if (airbnb_value > 3 && this.accomsMatch("Airbnb", loc_accoms))
          matchPer += 100;
        else if (airbnb_value < 3 && !this.accomsMatch("Airbnb", loc_accoms))
          matchPer += 100;
        else 
          matchPer += 0;

        if (beach_house_value == 3)
          matchPer += 100;
        else if (beach_house_value > 3 && this.accomsMatch("Beach House", loc_accoms))
          matchPer += 100;
        else if (beach_house_value < 3 && !this.accomsMatch("Beach House", loc_accoms))
          matchPer += 100;
        else 
          matchPer += 0;

        if (cabin_value == 3)
          matchPer += 100;
        else if (cabin_value > 3 && this.accomsMatch("Cabin", loc_accoms))
          matchPer += 100;
        else if (cabin_value < 3 && !this.accomsMatch("Cabin", loc_accoms))
          matchPer += 100;
        else 
          matchPer += 0;

        /*if (loc.name == "Hickory Run State Park,PA")
        {
          console.log("Warm weather matching = "+(Math.abs((Math.round((loc.avgTemp-avgTempMin)/avgTempTotalDivisor)+1) - warm_weather_value)*(-25) + 100)+"%");
          console.log("Cold weather matching = "+((4-(Math.abs((Math.round((loc.avgTemp-avgTempMin)/avgTempTotalDivisor)+1) - cold_weather_value)))*(-25) + 100)+"%");
          console.log("Rain matching = "+(Math.abs((Math.round((loc.annualRainInches-annualRainInchesMin)/avgAnnualRainInchesDivisor)+1) - rain_value)*(-25) + 100)+"%");
          console.log("Humidity matching = "+(Math.abs((Math.round(loc.avgHumidity/25)+1) - humitidy_value)*(-25) + 100)+"%");
          console.log("Dry climates matching = "+(Math.abs((Math.round(loc.avgHumidity/25)+1) - dry_climates_value)*(-25) + 100)+"%");
          console.log("Beach matching = "+(Math.abs(loc.beaches - beach_value)*(-25) + 100)+"%");
          console.log("Shopping matching = "+(Math.abs(loc.shopping - shopping_value)*(-25) + 100)+"%");
          console.log("Hiking matching = "+(Math.abs(loc.hiking - hiking_value)*(-25) + 100)+"%");
          console.log("Camping matching = "+(Math.abs(loc.camping - camping_value)*(-25) + 100)+"%");
          console.log("Outdoor sports matching = "+(Math.abs(loc.outdoorSports - outdoor_sports_value)*(-25) + 100)+"%");
          console.log("Winter spots matching = "+(Math.abs(loc.winterSports - winter_sports_value)*(-25) + 100)+"%");
          console.log("Water spots matching = "+(Math.abs(loc.waterSports - water_sports_value)*(-25) + 100)+"%");
          console.log("Amusement parks matching = "+(Math.abs(loc.amusParks - amusement_parks_value)*(-25) + 100)+"%");
          console.log("Clubs & bars matching = "+(Math.abs(loc.clubsBars - clubs_and_bars_value)*(-25) + 100)+"%");
          console.log("Casinos matching = "+(Math.abs(loc.casinos - casinos_value)*(-25) + 100)+"%");
          console.log("Sightseeing tours matching = "+(Math.abs(loc.sightSeeing - sightseeing_tours_value)*(-25) + 100)+"%");
          console.log("Boardwalk matching = "+(Math.abs(loc.boardwalk - boardwalk_attractions_value)*(-25) + 100)+"%");
          console.log("Concerts matching = "+(Math.abs(loc.concerts - concerts_value)*(-25) + 100)+"%");
          console.log("Pro sports matching = "+(Math.abs(loc.proSports - professional_sports_value)*(-25) + 100)+"%");
          if (price_value == 3) 
            console.log("Price matching = "+(100)+"%");
          else
            console.log("Price matching = "+(Math.abs(loc.cost - price_value)*(-25) + 100)+"%");

          if (distance_value == 3) 
            console.log("Distance matching = "+(100)+"%");
          else
            console.log("Distance matching = "+(Math.abs((Math.round((distanceAmnt-distanceMin)/distanceDivisor)+1) - distance_value)*(-25) + 100)+"%");

          if (hotel_resort_value == 3)
            console.log("Hotel matching = "+(100)+"%");
          else if (hotel_resort_value > 3 && this.accomsMatch("Hotel", loc_accoms))
            console.log("Hotel matching = "+(100)+"%");
          else if (hotel_resort_value < 3 && !this.accomsMatch("Hotel", loc_accoms))
            console.log("Hotel matching = "+(100)+"%");
          else
            console.log("Hotel matching = "+(0)+"%");

          if (airbnb_value == 3)
            console.log("Airbnb matching = "+(100)+"%");
          else if (airbnb_value > 3 && this.accomsMatch("Airbnb", loc_accoms))
            console.log("Airbnb matching = "+(100)+"%");
          else if (airbnb_value < 3 && !this.accomsMatch("Airbnb", loc_accoms))
            console.log("Airbnb matching = "+(100)+"%");
          else
            console.log("Airbnb matching = "+(0)+"%");

          if (beach_house_value == 3)
            console.log("Beach house matching = "+(100)+"%");
          else if (beach_house_value > 3 && this.accomsMatch("Beach House", loc_accoms))
            console.log("Beach house matching = "+(100)+"%");
          else if (beach_house_value < 3 && !this.accomsMatch("Beach House", loc_accoms))
            console.log("Beach house matching = "+(100)+"%");
          else
            console.log("Beach house matching = "+(0)+"%");

          if (cabin_value == 3) 
            console.log("Cabin matching = "+(100)+"%");
          else if (cabin_value > 3 && this.accomsMatch("Cabin", loc_accoms))
            console.log("Cabin matching = "+(100)+"%");
          else if (cabin_value < 3 && !this.accomsMatch("Cabin", loc_accoms))
            console.log("Cabin matching = "+(100)+"%");
          else
            console.log("Cabin matching = "+(0)+"%");

          console.log(loc.name+" matched preferences "+matchPer+"%");
        }*/

        if (home_input_value != loc.name)
        {
          matchPer = matchPer/25;
          let aLocation = new MatchingLoc(loc.name, matchPer);
          this.matchingLocs.push(aLocation);
          console.log(this.matchingLocs[this.matchingLocs.length-1].name+" matches "+this.matchingLocs[this.matchingLocs.length-1].matchingPercent+"%");
        }
      }

      this.router.navigate(['/pref-form/results'], { relativeTo: this.route });
    }
  }

  public accomsMatch(inputted: string, loc_accoms: string[])
  {
    for (var i=0; i<loc_accoms.length; i++)
    {
      if (inputted == loc_accoms[i]) return true;
    }
    return false;
  }
}
