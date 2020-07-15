import { IShipyard } from './shipyard.model';

export class Ship implements IShip {
    public name = '';
    public type: IShipType;
    public class: IShipClass;
    public shipyard: IShipyard;
    public problem: IShipProblem;
    public features: IShipFeature[] = [];
    public modules: IShipModule[] = [];
    public totalCost = 0;
    public specs = new ShipSpecs();
}

export class ShipSpecs implements IShipSpecs {
    public maneuver = 0;
    public modules = 0;
    public ep = 0;
    public hp = 0;
    public signature = 0;
    public armor = 0;
    public speed = 0;
}

export interface IShip {
    name: string,
    type: IShipType,
    class: IShipClass,
    shipyard: IShipyard,
    problem: IShipProblem,
    features: IShipFeature[],
    modules: IShipModule[],
    totalCost: number,
    //costs: number, // For calculation of costs?
    specs: IShipSpecs
}

export interface IShipClass {
    id?: number;
    name: string;
    cost?: number;
    specs?: IShipSpecs;
}

export interface IShipSpecs {
    maneuver: number;
    modules: number;
    ep: number;
    hp: number;
    signature: number;
    armor: number;
    speed: number;
}

export interface IShipTypeGroup {
    classNr: number;
    name: string;
    types: IShipType[];
}

export interface IShipType {
    id: number;
    name: string;
    classNr: number;
    groupConcepts: string;
}

export interface IShipProblem {
    id: number;
    name: string;
    text: string;
    summary: string;
}

export interface IShipModule {
    id: number;
    name: string;
    text: string;
    cost: number;
    selected: boolean;
}

export interface IShipFeature {
    id: number;
    name: string;
    benefit: string;
    cost: number;
    bonusses: IShipFeatureBonus[];
}

export interface IShipFeatureBonus {
    spec: string;
    bonus: number;
}