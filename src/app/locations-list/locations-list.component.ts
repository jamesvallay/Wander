import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { GlobalsService, MatchingLoc } from 'src/app/globals.service';
import { ChangeLocationsService } from '../change-locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  //going to feed it into here using @Input
  treeControl = new NestedTreeControl<Location>((node => node.children));
  dataSource = new MatTreeNestedDataSource<Location>();
  locations:Array<Location> = [];
  matchingLocs;

  constructor(private globals: GlobalsService, private locChangeService: ChangeLocationsService) 
  { 
    console.clear();
    this.matchingLocs = this.sortLocations(this.globals.getMatchingLocs());

    var max = 10;
    if (this.matchingLocs.length < max)
      max = this.matchingLocs.length;

    for (var i=0; i<max; i++)
    {
      var childs: Location[] = [];
      for (var j=0; j<this.matchingLocs[i].attracs.length; j++)
      {
        childs.push({name: "Check out "+this.matchingLocs[i].attracs[j].name+"!", isOpen:false});
      }

      if (childs.length == 0)
        childs.push({name: "No attractions matching your preferences were found :(", isOpen:false});

      let loc = {name:this.matchingLocs[i].name+" matches your preferences "+this.matchingLocs[i].matchingPercent+"%", children:childs, isCity:true, isOpen:false};
      this.locations.push(loc);
    }
    
    /*for(let i = 0; i<10; i++){
      let loc = {name:"thing", children:[{name:"lala1", isOpen:false},{name: "lala2", children:[{name: "lala2 desc.", isOpen:false}], isOpen:false}], isCity:true, isOpen:false};
      this.locations.push(loc);
    }*/
    this.dataSource.data = this.locations;
  }

  ngOnInit(): void {
    /*for(let i = 0; i<10; i++){
      let loc = {name:"thing", attractions:[{name:"lala1"},{name: "lala2", description:"lala2 desc."}]};
      this.locations.push(loc);
    }*/
    console.log("locations size: " + this.locations.length)
  }

  hasChild = (_: number, node: Location) => (!!node.children && node.children.length > 0);

  queryCity(node: Location){
    node.isOpen = !node.isOpen;
    if (node.isOpen){
      //will be replaced to make a query to google maps api to display the city expanded. Will display most recently opened city
      //alert(node.name);
      this.locChangeService.changeLocs(node.name);
    }
  }

  sortLocations(matchingLocs: MatchingLoc[])
  {
    var newMatchingLocs: MatchingLoc[] = [];

    while (0 < matchingLocs.length)
    {
      //console.log("matchingLocs.length = "+matchingLocs.length);
      //console.log("newMatchingLocs.length = "+newMatchingLocs.length);
      var biggest = 0;
      var biggestIndex = -1;
      for (var i=0; i<matchingLocs.length; i++)
      {
        if (matchingLocs[i].matchingPercent > biggest)
        {
          biggest = matchingLocs[i].matchingPercent;
          biggestIndex = i;
        }
      }

      let aLocation = new MatchingLoc(matchingLocs[biggestIndex].name, matchingLocs[biggestIndex].matchingPercent, matchingLocs[biggestIndex].attracs, matchingLocs[biggestIndex].coordsN, matchingLocs[biggestIndex].coordsE);
      newMatchingLocs.push(aLocation);
      matchingLocs.splice(biggestIndex, 1);
    }
    
    return newMatchingLocs;
  }

}
