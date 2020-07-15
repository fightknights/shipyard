import { Component, OnInit } from '@angular/core';
import { IShipFeature } from '../../models/ship.model';
import { ShipFeatures } from '../../data/feature.data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    public features: IShipFeature[] = ShipFeatures;

    constructor() { }

    ngOnInit(): void {
    }

    public addFeature(feature: IShipFeature) {
        console.log(feature);
    }
}
