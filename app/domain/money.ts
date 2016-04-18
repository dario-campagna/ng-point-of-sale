export class Money {

    private _amount:number;

    constructor(amount:number) {
        this._amount = amount;
    }

    get amount():number {
        return this._amount;
    }

    public add(money:Money):Money {
        return new Money(this._amount + money.amount);
    }

}