import {POSComponent} from "./pos-component";
import {ProductScanComponent} from "./product-scan-component";

angular.module('posApp', [])
    .component('pointOfSale', new POSComponent())
    .component('productScan', new ProductScanComponent())
    .component('display', {
        template: '<input class="form-control" type="text" readonly>'
    })
    .component('total', {
        template: '<button type="button" class="btn btn-primary btn-block">Total</button>'
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ['posApp']);
});