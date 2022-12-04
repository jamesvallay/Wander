import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLocationsService {
  locChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  changeLocs(location: string) {
    let loc = location.split(",PA")[0]+",PA";
    this.locChange.emit(loc);
  }
  
  getLocChangeEmitter(){
    return this.locChange;
  }
}
