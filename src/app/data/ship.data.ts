import { IShipTypeGroup } from '../models/ship.model';

export const ShipTypeGroups: IShipTypeGroup[] = [
    {
        classNr: 1,
        name: 'I',
        types: [
            {
                id: 1,
                name: 'Fighter',
                classNr: 1,
                groupConcepts: 'Agents, Mercenaries'
            },
            {
                id: 2,
                name: 'Space scooter',
                classNr: 1,
                groupConcepts: 'All'
            }
        ]
    },
    {
        classNr: 2,
        name: 'II',
        types: [
            {
                id: 3,
                name: 'System Shuttle',
                classNr: 2,
                groupConcepts: 'Agents'
            },
            {
                id: 4,
                name: 'Torpedo ship',
                classNr: 2,
                groupConcepts: 'Mercenaries'
            }
        ]
    },
    {
        classNr: 3,
        name: 'III',
        types: [
            {
                id: 5,
                name: 'Light freighter',
                classNr: 3,
                groupConcepts: 'Agents, Free traders, Explorers, Pilgrims'
            },
            {
                id: 6,
                name: 'Medium Freighter',
                classNr: 3,
                groupConcepts: 'Free traders, Explorers'
            },
            {
                id: 7,
                name: 'Courier ship',
                classNr: 3,
                groupConcepts: 'Agents, Free traders, Explorers'
            },
            {
                id: 8,
                name: 'Express freighter',
                classNr: 3,
                groupConcepts: 'Free traders'
            },
            {
                id: 9,
                name: 'Patrol ship',
                classNr: 3,
                groupConcepts: 'Agents, Mercenaries, Pilgrims'
            },
            {
                id: 10,
                name: 'Gunship',
                classNr: 3,
                groupConcepts: 'Mercenaries'
            },
            {
                id: 11,
                name: 'Assault ship',
                classNr: 3,
                groupConcepts: 'Mercenaries'
            },
            {
                id: 12,
                name: 'Blockade runner',
                classNr: 3,
                groupConcepts: 'Mercenaries'
            },
            {
                id: 13,
                name: 'Pleasure cruiser',
                classNr: 3,
                groupConcepts: 'Agents'
            },
            {
                id: 14,
                name: 'Flying Circus',
                classNr: 3,
                groupConcepts: 'Pilgrims'
            }
        ]
    },
    {
        classNr: 4,
        name: 'IV',
        types: [
            {
                id: 15,
                name: 'Mining ship',
                classNr: 4,
                groupConcepts: 'Explorers'
            },
            {
                id: 16,
                name: 'Repurposed space station',
                classNr: 4,
                groupConcepts: 'Explorers'
            },
            {
                id: 17,
                name: 'Passenger ship',
                classNr: 4,
                groupConcepts: 'Pilgrims'
            }
        ]
    },
    {
        classNr: 5,
        name: 'V',
        types: [
            {
                id: 18,
                name: 'Battlecruiser',
                classNr: 5,
                groupConcepts: 'Agents, Mercenaries'
            },
            {
                id: 19,
                name: 'Bulk Hauler',
                classNr: 5,
                groupConcepts: 'Pilgrims, Free traders, Explorers'
            }
        ]
    }
];