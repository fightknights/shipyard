import { Component, OnInit } from '@angular/core';
import { IShipTypeGroup, IShipType } from '../../models/ship.model';
import { ShipTypeGroups } from '../../data/ship.data';

@Component({
  selector: 'app-ship-type',
  templateUrl: './ship-type.component.html',
  styleUrls: ['./ship-type.component.scss']
})
export class ShipTypeComponent implements OnInit {

    public shipTypeGroups: IShipTypeGroup[] = ShipTypeGroups;

    constructor() { }

    public ngOnInit(): void {
    }

    public pickShip(type: IShipType) {
        console.log(type);
    }
}
