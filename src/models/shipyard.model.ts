export interface IShipyard {
    id?: number;
    name: string;
    system?: string;
    costPercent?: number;
    text?: string;
    bonusses?: IShipyardBonus[];
}

export interface IShipyardBonus {
    spec: string;
    bonus: number;
}