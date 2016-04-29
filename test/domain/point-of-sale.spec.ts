import PointOfSale from "../../app/domain/point-of-sale";
import Display from "../../app/domain/ports/display";
import Money from "../../app/domain/money";
import Catalog from "../../app/domain/ports/catalog";

describe('point-of-sale', () => {

    let display:Display;
    let catalog:Catalog;
    let pointOfSale:PointOfSale;
    let cart;

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
        cart = [];
        pointOfSale = new PointOfSale(display, catalog, cart);
    });

    it('show message when scanned product not exists', () => {
        pointOfSale.onScannedProduct('a');
        expect(display.showNotExists).toHaveBeenCalledWith('a');
    });

    it('show price when scanned product exists', () => {
        spyOn(catalog, 'findBy').and.returnValue(new Money((1)));
        pointOfSale.onScannedProduct('b');
        expect(display.showProductPrice).toHaveBeenCalledWith(new Money(1));
        expect(cart.length).toBe(1);
        expect(cart[0]).toEqual(new Money(1));
    });

    it('show 0 when no existing product scanned', () => {
        pointOfSale.onTotalRequested();
        expect(display.showProductPrice).toHaveBeenCalledWith(new Money(0));
    });

    it('show total when some existing product scanned', () => {
        cart.push(new Money(1));
        cart.push(new Money(2));
        pointOfSale.onTotalRequested();
        expect(display.showProductPrice).toHaveBeenCalledWith(new Money(3));
    });

});