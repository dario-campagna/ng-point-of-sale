import {AngularDisplay} from "../adapters/angular-display";
import {PointOfSale} from "../domain/point-of-sale";
import {Catalog} from "../domain/ports/catalog";
import {InMemoryCatalog} from "../adapters/in-memory-catalog";

export class POSController {

    private _display:AngularDisplay;
    private _catalog:Catalog;
    private _pointOfSale:PointOfSale;

    constructor() {
        this._display = new AngularDisplay();
        this._catalog = new InMemoryCatalog({'a': 1});
        this._pointOfSale = new PointOfSale(this._display, this._catalog, []);
    }

    public scanProduct(barCode:string):void {
        this._pointOfSale.onScannedProduct(barCode);
    }

    public getMessage():string {
        return this._display.getMessage();
    }

    public computeTotal():void {
        this._pointOfSale.onTotalRequested();
    }


}