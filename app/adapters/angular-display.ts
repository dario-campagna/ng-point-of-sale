import {Display} from "../domain/ports/display";
import {Money} from "../domain/money";

export class AngularDisplay implements Display {

    private _message:string;

    public showNotExists(barCode:string) {
        this._message = barCode + ' NOT EXISTS!';
    }


    public showProductPrice(money:Money) {
        this._message = money.getAmount().toString();
    }

    public getMessage():string {
        return this._message;
    }

}