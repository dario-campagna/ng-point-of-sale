import {PointOfSale} from "../../app/domain/point-of-sale";
import {Display} from "../../app/domain/ports/display";

describe('point-of-sale', () => {

    it('show message when scanned product not exists', () => {
        let display:Display = {
            showNotExists: jasmine.createSpy('showNotExistsSpy')
        }
        let pointOfSale:PointOfSale = new PointOfSale(display);
        pointOfSale.onScannedProduct('a');
        expect(display.showNotExists).toHaveBeenCalledWith('a');
    });

});