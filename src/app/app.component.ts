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

  updateMessage(latLon: string) {
    this.nearestStation = this.stationService.getNearestStation(latLon);
    this.currentLocation = latLon;
  }

  constructor(private stationService: StationService) {
  }
}
