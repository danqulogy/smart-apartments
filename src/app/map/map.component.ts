import { Component, OnInit } from '@angular/core';
import {Map, NavigationControl} from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  lat = 0;
  lng = 0;
  map: Map;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.lat = location.coords.latitude
      this.lng = location.coords.longitude
      this.initMap();
    }, (err) => {
      //TODO: Handle error
    })
  }

  private initMap() {
    this.map = new Map({
      container: 'map',
      style: environment.mapStyle,
      zoom: 15,
      center: [this.lng, this.lat],
      accessToken: environment.mapBoxToken
    });

    // Add map controls
    this.map.addControl(new NavigationControl());
  }
}
