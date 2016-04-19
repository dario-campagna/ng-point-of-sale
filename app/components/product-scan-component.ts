export default class ProductScanComponent implements ng.IComponentOptions {

    public bindings;
    public controller;
    public template;

    constructor() {
        this.bindings = {
            onScan: '&'
        };
        this.template = `
            <div class="col-md-6 col-xs-6">
                <input class="form-control" type="text" ng-model="$ctrl.barCode">
            </div>
            <div class="col-md-6 col-xs-6">
                <button type="button" class="btn btn-info btn-block" ng-click="$ctrl.onScan({barCode: $ctrl.barCode})">Scan</button>
            </div>
            `;
    }

}