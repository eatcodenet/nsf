import {Injectable} from '@angular/core';
import {STATIONS} from './stations';

@Injectable()
export class StationService {

  getNearestStation(lat: number, lon: number): string {
    const distances = this.stations.filter((station: any) => {
      return station.lat != 0 && station.lon != 0
    }).map((station: any) => {
      return [station, this.distance(lat, lon, station.lat, station.lon)];
    })
    let min = Number.MAX_VALUE;
    let nearestStation = null;
    for (let tuple of distances) {
      if (tuple[1] < min) {
        min = tuple[1];
        nearestStation = tuple[0];
      }
    }
    return nearestStation.name + " (" + nearestStation.lat + "," + nearestStation.lon + ")";
  }

  distance(lat1: number, lon1: number, lat2: number, lon2: number) {
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  private stations = STATIONS;
}
