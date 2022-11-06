import { Component, OnInit } from '@angular/core';
import { Location } from '../models/location';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

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

  constructor() { 
    for(let i = 0; i<10; i++){
      let loc = {name:"thing", children:[{name:"lala1"},{name: "lala2", children:[{name: "lala2 desc."}]}]};
      this.locations.push(loc);
    }
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

}
