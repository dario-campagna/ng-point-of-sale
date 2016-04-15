import {Catalog} from "../domain/ports/catalog";
import {Money} from "../domain/money";

export class InMemoryCatalog implements Catalog {

    private _productMap:any;

    constructor($http:ng.IHttpService) {
        $http.get('/catalog').then(
            (response) => {
                this._productMap = response.data;
            },
            () => {
                this._productMap = {};
            }
        );
    }

    public findBy(barCode:string):Money {
        if (this._productMap.hasOwnProperty(barCode)) {
            return new Money(this._productMap[barCode]);
        }
        return null;
    }
}