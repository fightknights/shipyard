import { IShipFeature } from '../models/ship.model';

export let ShipFeatures: IShipFeature[] = [
    {
        id: 1,
        name: 'Ablative Armor (A)',
        benefit: 'Reduces damage by 3 for one attack only',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 2,
        name: 'Advanced Countermeasures (O)',
        benefit: 'Gives +1 when launching countermeasures',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 3,
        name: 'Advanced Targeting Computer (O)',
        benefit: 'Gives +1 when locking onto targets.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 4,
        name: 'Advanced Torpedoes (O/A/F*)',
        benefit: 'Gives -1 to the target ships countermeasures',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 5,
        name: 'Advance Weapon System (O/A/F*)',
        benefit: 'Gives +1 when firing a specific weapon system.',
        cost: 20,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 6,
        name: 'Advanced Workshop (A)',
        benefit: 'Can repair Advanced technology.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 7,
        name: 'Antimatter Rockets (A)',
        benefit: 'Maneuverability +2',
        cost: 20,
        bonusses: [
            {
                spec: 'maneuver',
                bonus: 2
            },
            {
                spec: 'modules',
                bonus: 1
            }
        ],
        multiplePossible: false
    },
    {
        id: 8,
        name: 'Arboretum (O)',
        benefit: 'Helps the crew recover Mind Points',
        cost: 5,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 9,
        name: 'Atmospheric Entry (O)',
        benefit: 'Land on/take off from planets.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 10,
        name: 'Blessed Ship (A)',
        benefit: 'Bonus +1 to portal jumps.',
        cost: 5,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 11,
        name: 'Bonus Modules (O)',
        benefit: 'Increassed capacity for carrying extra modules.',
        cost: 20,
        bonusses: [
            {
                spec: 'modules',
                bonus: 5
            }
        ],
        multiplePossible: true,
        maximumAmount: [
            { classNr: 1, max: 1 },
            { classNr: 2, max: 2 },
            { classNr: 3, max: 4 },
            { classNr: 4, max: 8 },
            { classNr: 5, max: 16 }
        ]
    },
    {
        id: 12,
        name: 'ED Fields (O)',
        benefit: 'Protects against explosive decompression.',
        cost: 20,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 13,
        name: 'Ejector (O)',
        benefit: 'Escape pod on the bridge',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 14,
        name: 'External Cargo (O)',
        benefit: 'Cargo on the outside of the hull, in vacuum.',
        cost: 10,
        bonusses: [],
        multiplePossible: true,
        maximumAmount: [
            { classNr: 1, max: 1 },
            { classNr: 2, max: 2 },
            { classNr: 3, max: 4 },
            { classNr: 4, max: 8 },
            { classNr: 5, max: 16 }
        ]
    },
    {
        id: 15,
        name: 'Heavy Armor (O)',
        benefit: 'Armor Rating +1, Maneuverability -1',
        cost: 10,
        bonusses: [
            {
                spec: 'maneuver',
                bonus: -1
            },
            {
                spec: 'armor',
                bonus: 1
            }
        ],
        multiplePossible: false
    },
    {
        id: 16,
        name: 'Library Database (A)',
        benefit: 'Gives you +3 to CULTURE or SCIENCE rolls',
        cost: 5,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 17,
        name: 'Precise Thrusters (O)',
        benefit: 'Bonus +2 to PILOT when docking or landing',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 18,
        name: 'Reactor Burst (O)',
        benefit: 'Gives +3 EP when overloading reactor',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 19,
        name: 'Research Computer (A)',
        benefit: 'Gives +1 to SCIENCE for analyses',
        cost: 5,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 20,
        name: 'Robust Hull (O)',
        benefit: 'Gives +1 Hull Point.',
        cost: 10,
        bonusses: [
            {
                spec: 'hp',
                bonus: 1
            }
        ],
        multiplePossible: false
    },
    {
        id: 21,
        name: 'Salvage Unit (O)',
        benefit: 'Enables salvaging.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 22,
        name: 'Sensitive Sensors (O)',
        benefit: 'Gives +1 to all sensor rolls',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 23,
        name: 'Ship Intelligence (A)',
        benefit: 'Versatile AI, all attribute scores 1, relevant skill levels 3.',
        cost: 30,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 24,
        name: 'Ship System (A)',
        benefit: 'Replace one crew member, attribute 3, skill level 3.',
        cost: 20,
        bonusses: [],
        multiplePossible: true,
        maximumAmount: [
            { classNr: 1, max: 0 },
            { classNr: 2, max: 4 },
            { classNr: 3, max: 4 },
            { classNr: 4, max: 4 },
            { classNr: 5, max: 4 }
        ]
    },
    {
        id: 25,
        name: 'Stealthe Technology (A)',
        benefit: 'Decreases ship Signature by 1',
        cost: 20,
        bonusses: [
            {
                spec: 'signature',
                bonus: -1
            }
        ],
        multiplePossible: false
    },
    {
        id: 26,
        name: 'Supercharged reactor (O)',
        benefit: 'Gives the ship +1 Engery Point.',
        cost: 10,
        bonusses: [
            {
                spec: 'ep',
                bonus: 1
            }
        ],
        multiplePossible: false
    },
    {
        id: 27,
        name: 'Super Sensors (A)',
        benefit: 'Increases range of ship sensors to Extreme.',
        cost: 20,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 28,
        name: 'Trauma Lab (A)',
        benefit: 'Gives bonus to MEDICURGY rolls.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 29,
        name: 'Tuned Accelerator (O)',
        benefit: 'Bonus +2 to the advance/retreat action.',
        cost: 10,
        bonusses: [],
        multiplePossible: false
    },
    {
        id: 30,
        name: 'Turbo Projector (O)',
        benefit: 'Gives +1 to Maneuverability and Speed',
        cost: 20,
        bonusses: [
            {
                spec: 'maneuver',
                bonus: 1
            },
            {
                spec: 'speed',
                bonus: 1
            }
        ],
        multiplePossible: true,
        maximumAmount: [
            { classNr: 1, max: 2 },
            { classNr: 2, max: 2 },
            { classNr: 3, max: 2 },
            { classNr: 4, max: 2 },
            { classNr: 5, max: 2 }
        ]
    }
];