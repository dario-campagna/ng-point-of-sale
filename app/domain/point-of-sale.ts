import {Display} from "./ports/display";
import {Money} from "./money";
import {Catalog} from "./ports/catalog";

export class PointOfSale {

    private _display;
    private _catalog;

    constructor(display:Display, catalog:Catalog) {
        this._display = display;
        this._catalog = catalog;
    }

    public onScannedProduct(barCode:string):void {
        var price = this._catalog.findBy(barCode);
        if (price) {
            this._display.showProductPrice(price);
        } else {
            this._display.showNotExists(barCode);
        }
    }

}