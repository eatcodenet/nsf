import {Component, Input} from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'map',
  template: `
    <div id="stationMap">map...</div>
  `,
  styles: [`
    #stationMap {
      width: 512px;
      height: 512px;
      display: block;
    }
  `],
})
export class MapComponent {
  name = 'Map';
  @Input()
  centreLatitude: number;

  @Input()
  centreLongitude: number;

  @Input()
  currentLatitude: number;

  @Input()
  currentLongitude: number;

  @Input()
  centreName: string;


  drawMap() {
    const centreLatLon = {lat: this.centreLatitude, lng: this.centreLongitude};
    const currentLatLon = {lat: this.currentLatitude, lng: this.currentLongitude};

    let map = new google.maps.Map(
      document.getElementById('stationMap'), {
        backgroundColor: "#fff",
        center: currentLatLon,
        clickableIcons: true,
        draggable: true,
        fullscreenControl: false,
        fullscreenControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        gestureHandling: "cooperative",
        scrollwheel: true,
        zoom: 12
      });

    let centreMarker = new google.maps.Marker({
      position: centreLatLon,
      map: map,
      title: this.centreName
    });

    let currentMarker = new google.maps.Marker({
      position: currentLatLon,
      map: map,
      title: "Current Location"
    });
  }

  ngOnInit() {
    this.drawMap();
  }

}
