import {Component} from '@angular/core';
import {StationService} from './station.service';
import {Station} from './stations';

@Component({
  selector: 'app-root',
  template: `<h1>Nearest Station Finder</h1>
  <current-location (change)="updateMessage($event)"></current-location>
  <div>
    <p>Current location is {{currentLocation}}</p>
    <p *ngIf="nearestStation">
      Nearest train station is {{nearestStation.name}} 
      <br>{{nearestStation.lat}},{{nearestStation.lon}}
    </p>
  </div>
  `,
  providers: [StationService]
})
export class AppComponent {
  name = 'NsfApplication';

  currentLocation: string;
  nearestStation: Station;

  updateMessage(coords: Coordinates) {
    this.nearestStation = this.stationService.getNearestStation(coords.latitude, coords.longitude);
    this.currentLocation = coords.latitude + "," + coords.longitude;
  }

  constructor(private stationService: StationService) {
  }
}
