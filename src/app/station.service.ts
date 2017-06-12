import {Injectable} from '@angular/core';
import {STATIONS} from './stations';

@Injectable()
export class StationService {

  getNearestStation(lat: number, lon: number): string {
    var distances = this.stations.filter((station: any) => {
      return station.lat != 0 && station.lon != 0
    }).map((station: any) => {
      var d = this.distance(lat, lon, station.lat, station.lon);
      return [station, d];
    })
    var min = Number.MAX_VALUE;
    var s = null;
    for (let tuple of distances) {
      console.log(tuple[0].name, tuple[1]);
      if (tuple[1] < min) {
        min = tuple[1];
        s = tuple[0];
      }
    }
    return s.name + " (" + s.lat + "," + s.lon + ")";
  }


  toRad(x: number) {
    return x * (Math.PI / 180);
  }

  distance(lat1: number, lon1: number, lat2: number, lon2: number) {

    var R = 6371000; // metres
    var φ1 = this.toRad(lat1);
    var φ2 = this.toRad(lat2);
    var Δφ = this.toRad(lat2);
    var Δλ = this.toRad(lon2);

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
  }

  private stations = STATIONS;
}
