import { IShipModuleGroup } from '../models/ship.model';

export let ShipModuleGroups: IShipModuleGroup[] = [
    {
        id: 1,
        name: 'Regular',
        modules: [
            {
                id: 1,
                name: 'Salvage station (O)',
                text: 'Salvaging wrecks and debris',
                cost: 5000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 2,
                name: 'Docking station (O)',
                text: 'Docking with other ships',
                cost: 15000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 3,
                name: 'Hangar (O)',
                text: 'Harboring other ships',
                cost: 10000,
                selected: false,
                multiplePossible: true
            },
            {
                id: 7,
                name: 'Chapel (O)',
                text: 'Worship of the icons',
                cost: 10000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 8,
                name: 'Cargo Hold (O)',
                text: 'Storing cargo',
                cost: 5000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 9,
                name: 'Medlab (O)',
                text: 'Tending to the wounded',
                cost: 10000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 10,
                name: 'Escape Pods (O)',
                text: 'Abandoning the ship',
                cost: 20000,
                selected: false,
                multiplePossible: true
            },
            {
                id: 11,
                name: 'Mining Station (O)',
                text: 'Mining for gas and minerals',
                cost: 75000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 12,
                name: 'Service Station (O)',
                text: 'Used for ship repairs and maintenance',
                cost: 45000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 13,
                name: 'Smugglers Stash (O)',
                text: 'Hiding contraband',
                cost: 5000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 14,
                name: 'Stasis Hold (A)',
                text: 'Needed for portal jumps',
                cost: 25000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 15,
                name: 'Torpedo and Mine System',
                text: 'Storing and firing torpedoes/mines',
                cost: 20000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 16,
                name: 'Workshop (O)',
                text: 'Fixing broken gear and systems',
                cost: 7500,
                selected: false,
                multiplePossible: false
            }
        ]
    },
    {
        id: 2,
        name: 'Cabins',
        modules: [
            {
                id: 4,
                name: 'Coffins (O)',
                text: 'Cramped sleeping spaces',
                cost: 15000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 5,
                name: 'Standard (O)',
                text: 'Decent living quarters',
                cost: 25000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 6,
                name: 'Suite (O)',
                text: 'Luxurious living quarters',
                cost: 40000,
                selected: false,
                multiplePossible: false
            }
        ]
    },
    {
        id: 3,
        name: 'Weapons',
        modules: [
            {
                id: 17,
                name: 'Countermeasure Dispenser (O)',
                text: 'A powerful sensor buoy launched from the ship to lure away incoming torpedoes.',
                cost: 5000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 18,
                name: 'Data Pulse (O)',
                text: 'A pulse of harmful data that damages the systems of an enemy ship.',
                cost: 50000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 19,
                name: 'Data Meme (A)',
                text: 'A meme, a self-learning program, is broadcast into the systems of an enemy ship.',
                cost: 75000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 20,
                name: 'Ion Missile (O)',
                text: 'A missile that on impact delivers a powerful ionized discharge.',
                cost: 7500,
                selected: false,
                multiplePossible: false
            },
            {
                id: 21,
                name: 'Accelerator Cannon (O)',
                text: 'A powerful magnetic railgun that fires metal projectiles at high velocity.',
                cost: 25000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 22,
                name: 'Meson Cannon (F*)',
                text: 'A cannon that fires diruptor beams.',
                cost: 0,
                selected: false,
                multiplePossible: false
            },
            {
                id: 23,
                name: 'Thermal Cannon (A*)',
                text: 'A cannon firing rays of superheated plasma',
                cost: 70000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 24,
                name: 'Heavy Accelerator Cannon (O)',
                text: 'A cannon with a longer and bigger accelerator, dealing more damage.',
                cost: 40000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 25,
                name: 'Autocannon (O)',
                text: 'A smal Vulcan cannon used to counter boarding attempts or incoming torpedoes.',
                cost: 15000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 26,
                name: 'Ion Cannon (O)',
                text: 'A cannon firing beams of ionizing radiation.',
                cost: 40000,
                selected: false,
                multiplePossible: false
            },
            {
                id: 27,
                name: 'Nestera Mangler (O)',
                text: 'An accelerator cannon with a high rate of fire and explosive slugs for very high damage.',
                cost: 50000,
                selected: false,
                multiplePossible: false
            }
        ]
    }
];