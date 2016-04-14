import {POSComponent} from "./components/pos-component";
import {ProductScanComponent} from "./components/product-scan-component";

angular.module('posApp', [])
    .component('pointOfSale', new POSComponent())
    .component('productScan', new ProductScanComponent())
    .component('display', {
        bindings: {
            message: '<'
        },
        template: '<input class="form-control" type="text" readonly ng-model="$ctrl.message">'
    })
    .component('total', {
        bindings: {
            onTotalRequested: '&'
        },
        template: '<button type="button" class="btn btn-primary btn-block" ng-click="$ctrl.onTotalRequested()">Total</button>'
    });

angular.element(document).ready(function () {
    angular.bootstrap(document, ['posApp']);
});