import {Money} from "../money";

export interface Display {

    showNotExists(barCode:string);

    showProductPrice(money:Money);

}