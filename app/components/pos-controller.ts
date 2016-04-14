import {AngularDisplay} from "../adapters/angular-display";
import {PointOfSale} from "../domain/point-of-sale";

export class POSController {

    private _display:AngularDisplay;
    private _pointOfSale:PointOfSale;

    constructor() {
        this._display = new AngularDisplay();
        this._pointOfSale = new PointOfSale(this._display);
    }

    public scanProduct(barCode:string):void {
        this._pointOfSale.onScannedProduct(barCode);
    }

    public getMessage():string {
        return this._display.getMessage();
    }

}