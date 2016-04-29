import Display from "../domain/ports/display";
import Money from "../domain/money";

export default class AngularDisplay implements Display {

    private _message:string;

    public showNotExists(barCode:string):void {
        this._message = barCode + ' NOT EXISTS!';
    }

    public showProductPrice(money:Money):void {
        this._message = money.amount.toString();
    }

    get message():string {
        return this._message;
    }

}