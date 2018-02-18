import { Component, OnInit } from '@angular/core';

import { Place } from '../shared/place.model';
import { PlacesService } from '../shared/places.service';

@Component({
  selector: 'app-list-places',
  templateUrl: './list-places.component.html',
  styleUrls: ['./list-places.component.css']
})

export class ListPlacesComponent implements OnInit {
places: Place[];
selectedPlace: Place;

onSelect(place: Place): void {
  this.selectedPlace = place;
}


constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.placesService.getPlaces()
        .subscribe(places => this.places = places);
  }

}
