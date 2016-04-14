import {Money} from "../app/money";

describe('money', () => {

    it('should compute sum', () => {
        let money:Money = new Money(5);
        let result:Money = money.add(new Money(3));
        expect(result.getAmount()).toBe(8);
        result = money.add(new Money(1));
        expect(result.getAmount()).toBe(6);
    });

});