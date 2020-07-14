import { IShipFeature } from '../models/ship.model';

export let ShipFeatures: IShipFeature[] = [
    {
        id: 1,
        name: 'Ablative Armor',
        benefit: 'Reduces damage by 3 for one attack only',
        cost: 10,
        bonusses: []
    },
    {
        id: 2,
        name: 'Advanced Countermeasures',
        benefit: 'Gives +1 when launching countermeasures',
        cost: 10,
        bonusses: []
    },
    {
        id: 3,
        name: 'Advanced Targeting Computer',
        benefit: 'Gives +1 when locking onto targets.',
        cost: 10,
        bonusses: []
    },
    {
        id: 4,
        name: 'Advanced Torpedoes',
        benefit: 'Gives -1 to the target ships countermeasures',
        cost: 10,
        bonusses: []
    },
    {
        id: 5,
        name: 'Advance Weapon System',
        benefit: 'Gives +1 when firing a specific weapon system.',
        cost: 20,
        bonusses: []
    },
    {
        id: 6,
        name: 'Advanced Workshop',
        benefit: 'Can repair Advanced technology.',
        cost: 10,
        bonusses: []
    },
    {
        id: 7,
        name: 'Antimatter Rockets',
        benefit: 'Maneuverability +2',
        cost: 20,
        bonusses: [
            {
                spec: 'maneuver',
                bonus: 2
            }
        ]
    },
    {
        id: 8,
        name: 'Arboretum',
        benefit: 'Helps the crew recover Mind Points',
        cost: 5,
        bonusses: []
    },
    {
        id: 9,
        name: 'Atmospheric Entry',
        benefit: 'Land on/take off from planets.',
        cost: 10,
        bonusses: []
    },
    {
        id: 10,
        name: 'Blessed Ship',
        benefit: 'Bonus +1 to portal jumps.',
        cost: 5,
        bonusses: []
    },
    {
        id: 11,
        name: 'Bonus Modules',
        benefit: 'Increassed capacity for carrying extra modules.',
        cost: 20,
        bonusses: []
    },
    {
        id: 12,
        name: 'ED Fields',
        benefit: 'Protects against explosive decompression.',
        cost: 20,
        bonusses: []
    },
    {
        id: 13,
        name: 'Ejector',
        benefit: 'Escape pod on the bridge',
        cost: 10,
        bonusses: []
    },
    {
        id: 14,
        name: 'External Cargo',
        benefit: 'Cargo on the outside of the hull, in vacuum.',
        cost: 10,
        bonusses: []
    },
    {
        id: 15,
        name: 'Heavy Armor',
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
        ]
    },
    {
        id: 16,
        name: 'Library Database',
        benefit: 'Gives you +3 to CULTURE or SCIENCE rolls',
        cost: 5,
        bonusses: []
    },
    {
        id: 17,
        name: 'Precise Thrusters',
        benefit: 'Bonus +2 to PILOT when docking or landing',
        cost: 10,
        bonusses: []
    },
    {
        id: 18,
        name: 'Reactor Burst',
        benefit: 'Gives +3 EP when overloading reactor',
        cost: 10,
        bonusses: []
    },
    {
        id: 19,
        name: 'Research Computer',
        benefit: 'Gives +1 to SCIENCE for analyses',
        cost: 5,
        bonusses: []
    },
    {
        id: 20,
        name: 'Robust Hull',
        benefit: 'Gives +1 Hull Point.',
        cost: 10,
        bonusses: [
            {
                spec: 'hp',
                bonus: 1
            }
        ]
    },
    {
        id: 21,
        name: 'Salvage Unit',
        benefit: 'Enables salvaging.',
        cost: 10,
        bonusses: []
    },
    {
        id: 22,
        name: 'Sensitive Sensors',
        benefit: 'Gives +1 to all sensor rolls',
        cost: 10,
        bonusses: []
    },
    {
        id: 23,
        name: 'Ship Intelligence',
        benefit: 'Versatile AI, all attribute scores 1, relevant skill levels 3.',
        cost: 30,
        bonusses: []
    },
    {
        id: 24,
        name: 'Ship System',
        benefit: 'Replace one crew member, attribute 3, skill level 3.',
        cost: 20,
        bonusses: []
    },
    {
        id: 25,
        name: 'Stealthe Technology',
        benefit: 'Decreases ship Signature by 1',
        cost: 20,
        bonusses: [
            {
                spec: 'signature',
                bonus: -1
            }
        ]
    },
    {
        id: 26,
        name: 'Supercharged reactor',
        benefit: 'Gives the ship +1 Engery Point.',
        cost: 10,
        bonusses: [
            {
                spec: 'ep',
                bonus: 1
            }
        ]
    },
    {
        id: 27,
        name: 'Super Sensors',
        benefit: 'Increases range of ship sensors to Extreme.',
        cost: 20,
        bonusses: []
    },
    {
        id: 28,
        name: 'Trauma Lab',
        benefit: 'Gives bonus to MEDICURGY rolls.',
        cost: 10,
        bonusses: []
    },
    {
        id: 29,
        name: 'Tuned Accelerator',
        benefit: 'Bonus +2 to the advance/retreat action.',
        cost: 10,
        bonusses: []
    },
    {
        id: 30,
        name: 'Turbo Projector',
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
        ]
    }
];