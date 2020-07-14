import { IShipClass } from '../models/ship.model';

export let ShipClasses: IShipClass[] = [
    {
        id: 1,
        name: 'I',
        cost: 100000,
        specs: {
            maneuver: 2,
            modules: 3,
            ep: 3,
            hp: 2,
            signature: -2,
            armor: 3,
            speed: 4
        }
    },
    {
        id: 2,
        name: 'II',
        cost: 200000,
        specs: {
            maneuver: 1,
            modules: 6,
            ep: 4,
            hp: 4,
            signature: -1,
            armor: 4,
            speed: 4
        }
    },
    {
        id: 3,
        name: 'III',
        cost: 1000000,
        specs: {
            maneuver: 0,
            modules: 10,
            ep: 5,
            hp: 6,
            signature: 0,
            armor: 5,
            speed: 2
        }
    },
    {
        id: 4,
        name: 'IV',
        cost: 2000000,
        specs: {
            maneuver: -1,
            modules: 20,
            ep: 6,
            hp: 9,
            signature: 2,
            armor: 7,
            speed: 1
        }
    },
    {
        id: 5,
        name: 'V',
        cost: 10000000,
        specs: {
            maneuver: -2,
            modules: 40,
            ep: 7,
            hp: 12,
            signature: 9,
            armor: 9,
            speed: 1
        }
    }

];