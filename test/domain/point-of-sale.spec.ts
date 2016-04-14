import {PointOfSale} from "../../app/domain/point-of-sale";
import {Display} from "../../app/domain/ports/display";
import {Money} from "../../app/domain/money";
import {Catalog} from "../../app/domain/ports/catalog";

describe('point-of-sale', () => {

    let display:Display;
    let catalog:Catalog;
    let pointOfSale:PointOfSale;

    beforeEach(() => {
        display = {
            showNotExists: jasmine.createSpy('showNotExistsSpy'),
            showProductPrice: jasmine.createSpy('showProductPriceSpy')
        };
        catalog = {
            findBy: function() {
                return null;
            }
        };
        pointOfSale = new PointOfSale(display, catalog);
    });

    it('show message when scanned product not exists', () => {
        let pointOfSale:PointOfSale = new PointOfSale(display, catalog);
        pointOfSale.onScannedProduct('a');
        expect(display.showNotExists).toHaveBeenCalledWith('a');
    });

    it('show price when scanned product exists', () => {
        spyOn(catalog, 'findBy').and.returnValue(new Money((1)));
        pointOfSale.onScannedProduct('b');
        expect(display.showProductPrice).toHaveBeenCalledWith(new Money(1));
    });

});