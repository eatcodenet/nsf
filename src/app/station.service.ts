import {Injectable} from '@angular/core';
import {Station, STATIONS} from './stations';

class Tuple {
  station: Station;
  distance: number;

  constructor(station: Station, dist: number) {
    this.station = station;
    this.distance = dist;
  }
}

@Injectable()
export class StationService {

  getNearestStation(lat: number, lon: number): string {
    const distances: Tuple[] = this.stations.map((station: Station) => {
      return new Tuple(station, this.distance(lat, lon, station.lat, station.lon));
    })

    let min: number = Number.MAX_VALUE;
    let nearestStation: Station = null;
    for (let tuple of distances) {
      if (tuple.distance < min) {
        nearestStation = tuple.station;
        min = tuple.distance;
      }
    }
    return nearestStation.name + " (" + nearestStation.lat + "," + nearestStation.lon + ")";
  }

  distance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const p = 0.017453292519943295; // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat2 - lat1) * p) / 2 +
      c(lat1 * p) * c(lat2 * p) *
      (1 - c((lon2 - lon1) * p)) / 2;

    return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
  }

  private stations = STATIONS;
}
