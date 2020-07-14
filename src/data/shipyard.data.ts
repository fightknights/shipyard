import { IShipyard } from '../models/shipyard.model';

export const Shipyards: IShipyard[] = [
    {
        id: 1,
        name: 'Chelebs',
        system: 'Mira',
        costPercent: 5,
        text: 'Beautiful, lean and fast ships. +1 to Maneuverability, but +1 to Signature. +5% to base price',
        bonusses: [
            {
                spec: 'maneuver',
                bonus: 1
            },
            {
                spec: 'signature',
                bonus: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Harima',
        system: 'The Monolith',
        costPercent: 5,
        text: 'Fast ships designed for pursuit or courier missions. Luxurious. +1 EP, but -1 HP, +5% to base price',
        bonusses: [
            {
                spec: 'ep',
                bonus: 1
            },
            {
                spec: 'hp',
                bonus: -1
            }
        ]
    },
    {
        id: 3,
        name: 'Karrmerruk',
        system: 'Zalos',
        costPercent: 0,
        text: 'Pariah ships, antimatter propulsion. Unlocks the feature Antimatter Rockets. No price increase unless you pick this feature.',
        bonusses: []
    },
    {
        id: 4,
        name: 'Darkos',
        system: 'Kua Astroid Belt',
        costPercent: 5,
        text: 'Practical, armed freighters. +1 HP, but -2 to armor. +5% to base price.',
        bonusses: [
            {
                spec: 'hp',
                bonus: 1
            },
            {
                spec: 'armor',
                bonus: -2
            }
        ]
    },
    {
        id: 5,
        name: 'Halgria',
        system: 'Between Kua and Coriolis',
        costPercent: -5,
        text: 'Cheap freighters of low quality, also bulk haulers. -1 to Maneuverabilityl, but + {Class) extra modules. -5% to base price.',
        bonusses: [
            {
                spec: 'maneuver',
                bonus: -1
            },
            {
                spec: 'modules',
                bonus: 4
            }
        ]
    },
    {
        id: 6,
        name: 'Daharab',
        system: 'Sadaal B',
        costPercent: 5,
        text: 'Freighters and battleships with illegal armaments. -1 to extra modules, but + (Class) modules reserved for weapons. +5% to base price.',
        bonusses: [
            {
                spec: 'modules',
                bonus: 3
            }
        ]
    }
];