import {InMemoryCatalog} from "../../app/adapters/in-memory-catalog";
import {Money} from "../../app/domain/money";

describe('in-memory-catalog', () => {

    it('return null when product not found', () => {
        let catalog:InMemoryCatalog = new InMemoryCatalog({});
        let price = catalog.findBy('a');
        expect(price).toBeNull();
    });

    it('return price when product found', () => {
        let catalog:InMemoryCatalog = new InMemoryCatalog({b: 1});
        let price = catalog.findBy('b');
        expect(price).toEqual(new Money(1));
    });

});