import {Display} from "../domain/ports/display";

export class AngularDisplay implements Display {

    private _message:string;

    public showNotExists(barCode:string) {
        this._message = barCode + ' NOT EXISTS!';
    }

    public getMessage():string {
        return this._message;
    }

}