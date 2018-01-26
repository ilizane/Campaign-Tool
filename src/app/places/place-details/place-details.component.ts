import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../shared/place.model';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css'],

})
export class PlaceDetailsComponent implements OnInit {

  @Input() Place: Place;

  constructor() { }

  ngOnInit() {
  }

}
