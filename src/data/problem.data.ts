import { IShipProblem } from '../models/ship.model';

export let ShipProblems: IShipProblem[] = [
    {
        id: 1,
        name: 'Faulty Thrusters',
        text: 'The ships thrusters are unreliable, especially when under stress. When under stress. When the problem is activated, the ship suffers a -1 to Maneuverability, lasting during a combat encounter or some other event requiring dice rolls, such as docking.',
        summary: 'When the problem is activated, the ship suffers a -1 to Maneuverability, lasting during a combat encounter or some other event requiring dice rolls, such as docking.'
    },
    {
        id: 2,
        name: 'Curse',
        text: 'The Icons have turned their gaze away from the ship, making portal jumps and longer space travel dangerous. When the problem is activated, you get a -1 when rolling for a portal jump, and space travel counts as one danger level higher.',
        summary: 'When the problem is activated, you get a -1 when rolling for a portal jump, and space travel counts as one danger level higher.'
    },
    {
        id: 3,
        name: 'Unreliable sensors',
        text: 'The sensors of the ship are of poor quality. When the problem is activated, all DATA DJINN sensor rolls suffer a -1 during a combat encounter or some other event requiring dice rolls.',
        summary: 'When the problem is activated, all DATA DJINN sensor rolls suffer a -1 during a combat encounter or some other event requiring dice rolls.'
    },
    {
        id: 4,
        name: 'Worn-out ship computer',
        text: 'The ships computer has seen better days. When the problem is activated, all PILOT rolls suffer a -1 during a fight or some other event requiring dice rolls.',
        summary: 'When the problem is activated, all PILOT rolls suffer a -1 during a fight or some other event requiring dice rolls.'
    },
    {
        id: 5,
        name: 'Slow accelerator',
        text: 'The grave projectors accelerator unit is slow and unresponsive. When the problem is activated, moving the ship in combat costs one extra EP.',
        summary: 'When the problem is activated, moving the ship in combat costs one extra EP.'
    },
    {
        id: 6,
        name: 'Obvious signature',
        text: 'The hull reflects radiation, making it easy to spot on sensors. When the problem is activated, all opponents get a +2 to their DATA DJINN rolls to detect the ship.',
        summary: 'When the problem is activated, all opponents get a +2 to their DATA DJINN rolls to detect the ship.'
    },
    {
        id: 7,
        name: 'Eccentric ship intelligence',
        text: 'Requires the feature Ship Intelligence. When the problem is activated, the intelligence will refuse to perform a specific task and instead begin to protest loudly over the ships intercom. The effect lasts during a combat encounter, or a few hours.',
        summary: 'When the problem is activated, the intelligence will refuse to perform a specific task and instead begin to protest loudly over the ships intercom. The effect lasts during a combat encounter, or a few hours.'
    }
];