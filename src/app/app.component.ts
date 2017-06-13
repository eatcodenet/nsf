import {Component} from '@angular/core';
import {StationService} from './station.service';
import {Station} from './stations';

@Component({
  selector: 'app-root',
  template: `<h1>Nearest Station Finder</h1>
  <current-location (change)="updateMessage($event)"></current-location>
  <div>
    <p>Current location is {{currentCoordsText}}</p>
    <div *ngIf="nearestStation">
      <p>Nearest train station is {{nearestStation.name}} <b>({{nearestStation.lat}},{{nearestStation.lon}})</b></p>
      <map [centreLatitude]="nearestStation.lat" [centreLongitude]="nearestStation.lon"
           [currentLatitude]="currentCoords.latitude" [currentLongitude]="currentCoords.longitude"
           [centreName]="nearestStation.name"></map>
    </div>
  </div>
  `,
  providers: [StationService]
})
export class AppComponent {
  name = 'NsfApplication';

  currentCoordsText: string;
  currentCoords: Coordinates;
  nearestStation: Station;

  updateMessage(coords: Coordinates) {
    this.nearestStation = this.stationService.getNearestStation(coords.latitude, coords.longitude);
    this.currentCoordsText = coords.latitude + "," + coords.longitude;
    this.currentCoords = coords;
  }

  constructor(private stationService: StationService) {
  }
}
