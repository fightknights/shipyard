import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ShipService } from '../../services/ship.service';

import { IShipFeature, IShip } from '../../models/ship.model';
import { ShipFeatures } from '../../data/feature.data';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit, OnDestroy {

    public allFeatures: IShipFeature[] = JSON.parse(JSON.stringify(ShipFeatures));
    public selectedFeatures: IShipFeature[] = [];

    private ship: IShip;

    private unsub: Subject<void> = new Subject<void>();

    constructor(
        private shipService: ShipService
    ) { }

    public ngOnInit(): void {
        // TODO
        // Get saved ship features
        // Set amounts

        this.shipService.shipData.pipe(takeUntil(this.unsub)).subscribe((ship) => {
            this.ship = ship;
        });
    }

    public ngOnDestroy() {
        this.unsub.next();
        this.unsub.complete();
    }

    public addFeature(feature: IShipFeature) {
        if (!feature) {
            return;
        }

        // Check if multiple possible and at max
        if (!this.checkCanAddFeature(feature)) {
            return;
        }

        // Set amount
        feature.amount = feature.amount + 1;

        const selectedFeatureIndex = this.selectedFeatures.findIndex((feat) => feat.id === feature.id);

        if (selectedFeatureIndex < 0) {
            const copyOfFeature = JSON.parse(JSON.stringify(feature));

            this.selectedFeatures.push(copyOfFeature);
            this.updateChanges();
            return;
        }

        // update feature at index (just replace with new copy);
        this.selectedFeatures[selectedFeatureIndex] = JSON.parse(JSON.stringify(feature));

        this.shipService.updateFeatures(this.selectedFeatures);
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

    private checkCanAddFeature(feature: IShipFeature): boolean {
        if (!feature || !this.ship) {
            return false;
        }

        if (!feature.multiplePossible) {
            if (feature.amount > 0) {
                return false;
            } else {
                return true;
            }
        }

        let maxAmount = 1;

        if (this.ship.class) {
            const amountObj = feature.maximumAmount.find((amount) => amount.classNr === this.ship.class.id);

            if (amountObj !== null) {
                maxAmount = amountObj.max;
            }
        }

        return feature.amount < maxAmount;
    }
}
