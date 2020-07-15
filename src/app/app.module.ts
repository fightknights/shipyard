import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShipTypeComponent } from './pages/ship-type/ship-type.component';
import { ShipyardComponent } from './pages/shipyard/shipyard.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { FeaturesComponent } from './pages/features/features.component';
import { ModulesComponent } from './pages/modules/modules.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShipTypeComponent,
    ShipyardComponent,
    ProblemComponent,
    FeaturesComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
