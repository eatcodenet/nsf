import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'current-location',
  template: `
    <button (click)="getCurrentLocation()">Get current location</button>
  `,
  styles: [`
    button {
      outline: 0;
      cursor: pointer;
      height: 30px;
      border: 0;
      border-radius: 3px;
      background: #0088cc;
      color: #fff;
    }
  `],
})
export class CurrentLocationComponent {
  name = 'CurrentLocation';

  @Output()
  change: EventEmitter<string> = new EventEmitter();

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        this.change.emit(position.coords.latitude + "," + position.coords.longitude);
      }, error2 => {
        this.change.emit("boom!: " + error2.message);
      })
    }
    else {
      this.change.emit("geolocation unsupported");
    }
  }

}
