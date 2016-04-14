import {POSController} from "../../app/components/pos-controller";

describe('pos-controller', () => {

    it('set message when product not exists', () => {
        let posController:POSController = new POSController();
        posController.scanProduct('a');
        expect(posController.getMessage()).toBe('a NOT EXISTS!');
    });

});