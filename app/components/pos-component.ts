import {POSController} from "./pos-controller";
export class POSComponent implements ng.IComponentOptions {

    public controller;
    public template:string;

    constructor() {
        this.controller = POSController;
        this.template = `
            <div class="container-fluid">
                <h1 class="page-header">Point of Sale</h1>
                <div class="row panel-body">
                    <product-scan on-scan="$ctrl.scanProduct(barCode)"></product-scan>
                </div>
                <div class="row panel-body">
                    <div class="col-md-12">
                        <display message="$ctrl.getMessage()"></display>
                    </div>
                </div>
                <div class="row panel-body">
                    <div class="col-md-12">
                        <total></total>
                    </div>
                </div>
            </div>
            `;
    }

}