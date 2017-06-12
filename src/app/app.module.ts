import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {CurrentLocationComponent}  from './current-location.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, CurrentLocationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
