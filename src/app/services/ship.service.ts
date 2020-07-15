import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ship, ShipSpecs } from '../models/ship.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

    public shipData: BehaviorSubject<Ship> = new BehaviorSubject<Ship>(null);

    public ship = new Ship();

    constructor() { }

    public calculateCost() {
        let cost = 0;

        if (this.ship.class && this.ship.class.cost) {
            cost = cost + this.ship.class.cost;
        }

        if (this.ship.shipyard && this.ship.shipyard.id) {
            const modifier = this.ship.shipyard.costPercent;
            cost = cost * (1 + (modifier / 100));
        }

        let featureMod = 0;
        this.ship.features.forEach((feature) => {
            featureMod = featureMod + feature.cost;
        });
        cost = cost * (1 + (featureMod / 100));

        this.ship.modules.forEach((module) => {
            cost = cost + module.cost;
        });

        this.ship.totalCost = cost;
    }

    public calculateSpecs() {
        if (this.ship.class && this.ship.class.specs) {
            this.ship.specs = JSON.parse(JSON.stringify(this.ship.class.specs));
        } else {
            this.ship.specs = new ShipSpecs();
        }

        if (this.ship.shipyard && this.ship.shipyard.bonusses) {
            const bonusses = this.ship.shipyard.bonusses;
            bonusses.forEach((bonus) => {
                this.ship.specs[bonus.spec] = this.ship.specs[bonus.spec] + bonus.bonus;
            });
        }

        this.ship.features.forEach((feature) => {
            if (feature.bonusses.length > 0) {
                feature.bonusses.forEach((bonus) => {
                    this.ship.specs[bonus.spec] = this.ship.specs[bonus.spec] + bonus.bonus;
                });
            }
        });
    }

    select
}
