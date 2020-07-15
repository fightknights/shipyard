import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ShipTypeComponent } from './pages/ship-type/ship-type.component';
import { ShipyardComponent } from './pages/shipyard/shipyard.component';
import { ProblemComponent } from './pages/problem/problem.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { FeaturesComponent } from './pages/features/features.component';


const routes: Routes = [{
    path: '',
    component: AppComponent,
    children: [
        { path: 'home', component: HomeComponent },
        { path: 'shiptype', component: ShipTypeComponent },
        { path: 'shipyard', component: ShipyardComponent },
        { path: 'problem', component: ProblemComponent },
        { path: 'modules', component: ModulesComponent },
        { path: 'features', component: FeaturesComponent },
        { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
