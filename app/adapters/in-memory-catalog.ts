import {Catalog} from "../domain/ports/catalog";
import {Money} from "../domain/money";

export class InMemoryCatalog implements Catalog {

    private _productMap:any;

    constructor(productMap:any) {
        this._productMap = productMap;
    }

    public findBy(barCode:string):Money {
        if (this._productMap.hasOwnProperty(barCode)) {
            return new Money(this._productMap[barCode]);
        }
        return null;
    }
}