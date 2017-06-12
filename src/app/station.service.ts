import {Injectable} from '@angular/core';
import {STATIONS} from './stations';

@Injectable()
export class StationService {

  getNearestStation(latLon: string): string {
    var tokens = latLon.split(",");
    var lat = tokens[0], lon = tokens[1];
    var idx = Math.floor(this.stations.length * Math.random());
    var nearest = this.stations[idx];
    return nearest.name + " (" + nearest.lat + "," + nearest.lon + ")";
  }

  private stations = STATIONS;
}
