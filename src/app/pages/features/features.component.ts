import { Component, OnInit } from '@angular/core';
import { IShipFeature } from '../../models/ship.model';
import { ShipFeatures } from '../../data/feature.data';
import { ShipService } from '../../services/ship.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

    public allFeatures: IShipFeature[] = ShipFeatures;
    public selectedFeatures: IShipFeature[] = [];

    constructor(
        private shipService: ShipService
    ) { }

    public ngOnInit(): void {
        // TODO
        // Get saved ship features
        // Set amounts
    }

    public addFeature(feature: IShipFeature) {
        if (!feature) {
            return;
        }

        // Check if multiple possible and at max
        // Set amount
        feature.amount = feature.amount ? feature.amount + 1 : 1;

        const selectedFeatureIndex = this.selectedFeatures.findIndex((feat) => feat.id === feature.id);

        if (selectedFeatureIndex < 0) {
            const copyOfFeature = JSON.parse(JSON.stringify(feature));

            this.selectedFeatures.push(copyOfFeature);
            this.updateChanges();
            return;
        }

        // update feature at index (just replace with new copy);
    }

    public removeFeature(feature) {
        //const index = this.ship.features.findIndex(item => item.id === feature.id);

        //if (index >= 0) {
        //    this.ship.features.splice(index, 1);
        //    feature.selected = false;
        //}
    }

    public updateChanges() {
        this.shipService.updateFeatures(this.selectedFeatures);
    }
}
