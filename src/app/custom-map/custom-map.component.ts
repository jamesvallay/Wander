import { Component, OnInit } from '@angular/core';
import { ChangeLocationsService } from '../change-locations.service';
import { GlobalsService, MatchingLoc } from 'src/app/globals.service';

  interface Window {
    initMap: () => void;
  }

@Component({
  selector: 'app-custom-map',
  templateUrl: './custom-map.component.html',
  styleUrls: ['./custom-map.component.css']
})
export class CustomMapComponent implements OnInit {

  subscription: any;

  constructor(private locChangeService:ChangeLocationsService, private globals: GlobalsService) { }

  ngOnInit(): void {
    this.initMap();
    this.subscription = this.locChangeService.getLocChangeEmitter()
      .subscribe(item => {
        console.log(item)
        this.changeMap(item);
      });
  }

  initMap(): void {
    // Create the map 
    const coords = { lat: 40.803520, lng: -77.779438 };
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: coords,
        zoom: 7,
        mapId: "8d193001f940fde3",
      } as google.maps.MapOptions
    );
  
    // Create the places service.
    /*const service = new google.maps.places.PlacesService(map);
    let getNextPage: () => void | false;
    const moreButton = document.getElementById("more") as HTMLButtonElement;
  
    moreButton.onclick = function () {
      moreButton.disabled = true;
  
      if (getNextPage) {
        getNextPage();
      }
    };
  
    // Perform a nearby search.
    service.nearbySearch(
      { location: pyrmont, radius: 500, type: "store" },
      (
        results: google.maps.places.PlaceResult[] | null,
        status: google.maps.places.PlacesServiceStatus,
        pagination: google.maps.places.PlaceSearchPagination | null
      ) => {
        if (status !== "OK" || !results) return;
  
        this.addPlaces(results, map);
        moreButton.disabled = !pagination || !pagination.hasNextPage;
  
        if (pagination && pagination.hasNextPage) {
          getNextPage = () => {
            // Note: nextPage will call the same handler function as the initial call
            pagination.nextPage();
          };
        }
      }
    );*/
  }
  
  changeMap(cityName:string): void {
    let coords = {lat: 0, lng: 0}
    let arr = this.globals.locations;
    for(let i = 0; i<arr.length; i++){
      if(arr[i].name===cityName){
        coords.lat = arr[i].coordsN;
        coords.lng = arr[i].coordsE;
        const map = new google.maps.Map(
          document.getElementById("map") as HTMLElement,
          {
            center: coords,
            zoom: 12,
            mapId: "8d193001f940fde3",
          } as google.maps.MapOptions
        );
        break;
      }
    }
    /*let map = document.getElementById("map");
    if(map){
      map.setCenter
    }*/
  }
  
  /*addPlaces(
    places: google.maps.places.PlaceResult[],
    map: google.maps.Map
  ) {
    const placesList = document.getElementById("places") as HTMLElement;
  
    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon!,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25),
        };
  
        new google.maps.Marker({
          map,
          icon: image,
          title: place.name!,
          position: place.geometry.location,
        });
  
        const li = document.createElement("li");
  
        li.textContent = place.name!;
        placesList.appendChild(li);
  
        li.addEventListener("click", () => {
          map.setCenter(place.geometry!.location!);
        });
      }
    }
  }*/


}
