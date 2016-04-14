export class POSController {

    private _message:string;

    public scanProduct(barCode:string):void {
        this._message = barCode + ' NOT EXISTS!';
    }

    public getMessage():string {
        return this._message;
    }

}