import {Money} from "../money";

export interface Catalog {

    findBy: (barCode:string) => Money;

}