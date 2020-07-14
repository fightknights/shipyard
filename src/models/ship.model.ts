export interface IShipClass {
    id?: number;
    name: string;
    cost?: number;
    specs?: IShipClassSpecs;
}

export interface IShipClassSpecs {
    maneuver: number;
    modules: number;
    ep: number;
    hp: number;
    signature: number;
    armor: number;
    speed: number;
}

export interface IShipTypeList {
    classNr: number;
    types: IShipType[];
}

export interface IShipType {
    id: number;
    name: string;
    classNr: number;
    groups: string;
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