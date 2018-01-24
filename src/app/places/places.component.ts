import { Component, OnInit } from '@angular/core';

import { Place } from './shared/place.model';
import { PLACES } from './shared/mock-places';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})

export class PlacesComponent implements OnInit {
places = PLACES;
selectedPlace: Place;

onSelect(place: Place): void {
  this.selectedPlace = place;
}


constructor() { }

  ngOnInit() {
  }

}
