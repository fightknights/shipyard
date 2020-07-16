import { Component, OnInit } from '@angular/core';
import { IShipModuleGroup, IShipModule } from '../../models/ship.model';
import { ShipModuleGroups } from '../../data/module.data';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {

    public modules: IShipModuleGroup[] = ShipModuleGroups;

    constructor() { }

    ngOnInit(): void {
    }

    public addModule(module: IShipModule) {
        console.log(module);
    }
}
