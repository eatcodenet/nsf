import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Nearest Station Finder</h1>
  <current-location (change)="updateMessage($event)"></current-location>
  <div>
    <p>Current location is {{currentLocation}}</p>
  </div>
  `,
})
export class AppComponent {
  name = 'NsfApplication';

  currentLocation: string = "?";

  updateMessage(newLocation: string) {
    this.currentLocation = newLocation;
  }
}
