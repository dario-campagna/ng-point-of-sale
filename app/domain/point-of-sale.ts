import {Display} from "./ports/display";

export class PointOfSale {

    private _display;

    constructor(display:Display) {
        this._display = display;
    }

    public onScannedProduct(barCode:string):void {
        this._display.showNotExists(barCode);
    }

}