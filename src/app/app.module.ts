import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CurrentLocationComponent}  from './current-location.component';
import {MapComponent}  from './map.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CurrentLocationComponent, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
