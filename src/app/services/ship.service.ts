import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ship, ShipSpecs, IShipType, IShipProblem, IShipFeature, IShipModule } from '../models/ship.model';
import { IShipyard } from '../models/shipyard.model';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

    public shipData: BehaviorSubject<Ship> = new BehaviorSubject<Ship>(null);

    public ship = new Ship();

    constructor() { }

    public calculateCost() {
        const startingCost = this.ship.class ? this.ship.class.cost : 0;
        let cost = startingCost;

        // Shipyard cost adds to baseprice
        if (this.ship.shipyard) {
            const modifier = this.ship.shipyard.costPercent;
            cost += startingCost * (1 + (modifier / 100));
        }

        let featureMod = 0;
        this.ship.features.forEach((feature) => {
            featureMod = featureMod + feature.cost;
        });

        cost += startingCost * (1 + (featureMod / 100));

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

        if (this.ship.shipyard) {
            this.ship.shipyard.bonusses.forEach((bonus) => {
                let specBonus = bonus.bonus;

                if (bonus.basedOnClass && this.ship.class) {
                    specBonus = this.ship.class.id;
                }

                this.ship.specs[bonus.spec] = this.ship.specs[bonus.spec] + specBonus;
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

    public newShip() {
        this.ship = new Ship();
        this.shipData.next(this.ship);
    }

    public selectShipType(shipType: IShipType) {
        this.ship.type = shipType;
        this.updateShipAndCalculate();
    }

    public selectShipyard(shipyard: IShipyard) {
        this.ship.shipyard = shipyard;
        this.updateShipAndCalculate();
    }

    public selectProblem(problem: IShipProblem) {
        this.ship.problem = problem;
        this.updateShipAndCalculate();
    }

    public updateFeatures(features: IShipFeature[]) {
        this.ship.features = features;
        this.updateShipAndCalculate();
    }

    public updateModules(modules: IShipModule[]) {
        this.ship.modules = modules;
        this.updateShipAndCalculate();
    }

    private updateShipAndCalculate() {
        this.calculateCost();
        this.calculateSpecs();
        this.shipData.next(this.ship);
    }
}
