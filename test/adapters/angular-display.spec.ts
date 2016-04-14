import {Display} from "../../app/domain/ports/display";
import {AngularDisplay} from "../../app/adapters/angular-display";

describe('angular-display', () => {

    it('show not exists message', () => {
        let angularDisplay:AngularDisplay = new AngularDisplay();
        angularDisplay.showNotExists('a');
        expect(angularDisplay.getMessage()).toBe('a NOT EXISTS!');
    });

});