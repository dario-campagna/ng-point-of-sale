import {Money} from "../money";

export interface Display {

    showNotExists: (barCode:string) => void;

    showProductPrice: (money:Money) => void;

}