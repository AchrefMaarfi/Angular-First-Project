import { Residence } from "./residence";

export class Appartement{
    id!: number;
    terrasse!: string;
    numAppart!: number;
    numEtage!: number;
    surface!: number;
    surfaceTerrasse!: number;
    category!: string;
    description!: string;
    status!: boolean;
    residence!: Residence;
}