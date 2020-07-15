import { Component, OnInit } from '@angular/core';

import { Shipyards } from '../../data/shipyard.data';
import { IShipyard } from '../../models/shipyard.model';

@Component({
  selector: 'app-shipyard',
  templateUrl: './shipyard.component.html',
  styleUrls: ['./shipyard.component.scss']
})
export class ShipyardComponent implements OnInit {

    public shipyards: IShipyard[] = Shipyards;

    constructor() { }

    ngOnInit(): void {
    }

    public selectShipyard(shipyard: IShipyard) {
        console.log(shipyard);
    }
}
