import Display from "../../app/domain/ports/display";
import AngularDisplay from "../../app/adapters/angular-display";
import Money from "../../app/domain/money";

describe('angular-display', () => {

    let angularDisplay:AngularDisplay;

    beforeEach(() => {
        angularDisplay = new AngularDisplay();
    });

    it('show not exists message', () => {
        angularDisplay.showNotExists('a');
        expect(angularDisplay.message).toBe('a NOT EXISTS!');
    });

    it('show product price', () => {
        angularDisplay.showProductPrice(new Money(1));
        expect(angularDisplay.message).toBe("1");
    });

});