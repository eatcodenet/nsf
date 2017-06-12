import {Component} from '@angular/core';
import {StationService} from './station.service';

@Component({
  selector: 'app-root',
  template: `<h1>Nearest Station Finder</h1>
  <current-location (change)="updateMessage($event)"></current-location>
  <div>
    <p>Current location is {{currentLocation}}</p>
    <p>Nearest train station is {{nearestStation}}</p>
  </div>
  `,
  providers: [StationService]
})
export class AppComponent {
  name = 'NsfApplication';

  currentLocation: string = null;
  nearestStation: Object = null;

  updateMessage(coords: Coordinates) {
    this.nearestStation = this.stationService.getNearestStation(coords.latitude, coords.longitude);
    this.currentLocation = coords.latitude + "," + coords.longitude;
  }

  constructor(private stationService: StationService) {
  }
}
