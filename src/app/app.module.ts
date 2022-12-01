import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './footer/footer.component';
import { PrefFormComponent } from './pref-form/pref-form.component';
import { ResultsPageComponent } from './results-page/results-page.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { CustomMapComponent } from './custom-map/custom-map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { GoogleMapsModule } from '@angular/google-maps';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'pref-form', component: PrefFormComponent},
  { path: 'pref-form/results', component:ResultsPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    FooterComponent,
    PrefFormComponent,
    ResultsPageComponent,
    LocationsListComponent,
    CustomMapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MaterialModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
