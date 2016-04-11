export class ProductScanComponent implements ng.IComponentOptions {

    public template;

    constructor() {
        this.template = `
            <div class="col-md-6 col-xs-6">
                <input class="form-control" type="text">
            </div>
            <div class="col-md-6 col-xs-6">
                <button type="button" class="btn btn-info btn-block">Scan</button>
            </div>
            `;
    }

}