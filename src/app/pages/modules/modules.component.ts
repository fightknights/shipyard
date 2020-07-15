import { Component, OnInit } from '@angular/core';
import { IShipModule } from '../../models/ship.model';
import { ShipModules } from '../../data/module.data';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

    public modules: IShipModule[] = ShipModules;

    constructor() { }

    ngOnInit(): void {
    }

    public addModule(module: IShipModule) {
        console.log(module);
    }
}
