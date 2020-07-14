import { IShipTypeList } from '../models/ship.model';

export const ShipClasses: IShipTypeList[] = [
    {
        classNr: 1,
        types: [
            {
                id: 1,
                name: 'Fighter',
                classNr: 1,
                groups: 'Agents, Mercenaries'
            },
            {
                id: 2,
                name: 'Space scooter',
                classNr: 1,
                groups: 'All'
            }
        ]
    },
    {
        classNr: 2,
        types: [
            {
                id: 3,
                name: 'System Shuttle',
                classNr: 2,
                groups: 'Agents'
            },
            {
                id: 4,
                name: 'Torpedo ship',
                classNr: 2,
                groups: 'Mercenaries'
            }
        ]
    },
    {
        classNr: 3,
        types: [
            {
                id: 5,
                name: 'Light freighter',
                classNr: 3,
                groups: 'Agents, Free traders, Explorers, Pilgrims'
            },
            {
                id: 6,
                name: 'Medium Freighter',
                classNr: 3,
                groups: 'Free traders, Explorers'
            },
            {
                id: 7,
                name: 'Courier ship',
                classNr: 3,
                groups: 'Agents, Free traders, Explorers'
            },
            {
                id: 8,
                name: 'Express freighter',
                classNr: 3,
                groups: 'Free traders'
            },
            {
                id: 9,
                name: 'Patrol ship',
                classNr: 3,
                groups: 'Agents, Mercenaries, Pilgrims'
            },
            {
                id: 10,
                name: 'Gunship',
                classNr: 3,
                groups: 'Mercenaries'
            },
            {
                id: 11,
                name: 'Assault ship',
                classNr: 3,
                groups: 'Mercenaries'
            },
            {
                id: 12,
                name: 'Blockade runner',
                classNr: 3,
                groups: 'Mercenaries'
            },
            {
                id: 13,
                name: 'Pleasure cruiser',
                classNr: 3,
                groups: 'Agents'
            },
            {
                id: 14,
                name: 'Flying Circus',
                classNr: 3,
                groups: 'Pilgrims'
            }
        ]
    },
    {
        classNr: 4,
        types: [
            {
                id: 15,
                name: 'Mining ship',
                classNr: 4,
                groups: 'Explorers'
            },
            {
                id: 16,
                name: 'Repurposed space station',
                classNr: 4,
                groups: 'Explorers'
            },
            {
                id: 17,
                name: 'Passenger ship',
                classNr: 4,
                groups: 'Pilgrims'
            }
        ]
    },
    {
        classNr: 5,
        types: [
            {
                id: 18,
                name: 'Battlecruiser',
                classNr: 5,
                groups: 'Agents, Mercenaries'
            },
            {
                id: 19,
                name: 'Bulk Hauler',
                classNr: 5,
                groups: 'Pilgrims, Free traders, Explorers'
            }
        ]
    }
];