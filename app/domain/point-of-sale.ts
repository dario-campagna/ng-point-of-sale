import Display from "./ports/display";
import Money from "./money";
import Catalog from "./ports/catalog";

export default class PointOfSale {

    private _display:Display;
    private _catalog:Catalog;
    private _cart:Array<Money>;

    constructor(display:Display, catalog:Catalog, cart:Array<Money>) {
        this._display = display;
        this._catalog = catalog;
        this._cart = cart;
    }

    public onScannedProduct(barCode:string):void {
        var price = this._catalog.findBy(barCode);
        if (price) {
            this._cart.push(price);
            this._display.showProductPrice(price);
        } else {
            this._display.showNotExists(barCode);
        }
    }

    public onTotalRequested():void {
        let total = this._cart.reduce(
            (total:Money, price:Money) => {
                return total.add(price);
            },
            new Money(0));
        this._display.showProductPrice(total);
    }


}