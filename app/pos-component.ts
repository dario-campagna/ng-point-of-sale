export class POSComponent implements ng.IComponentOptions {

    public template:string;

    constructor() {
        this.template = `
            <div class="container-fluid">
                <h1 class="page-header">Point of Sale</h1>
                <div class="row panel-body">
                    <product-scan></product-scan>
                </div>
                <div class="row panel-body">
                    <div class="col-md-12">
                        <display></display>
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