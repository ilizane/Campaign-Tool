import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../shared/place.model';

@Component({
  selector: 'app-details-place',
  templateUrl: './details-place.component.html',
  styleUrls: ['./details-place.component.css'],

})
export class DetailsPlaceComponent implements OnInit {

  @Input() Place: Place;

  constructor() { }

  ngOnInit() {
  }

}
