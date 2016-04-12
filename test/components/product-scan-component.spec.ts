import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('product-scan-component', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        element = angular.element('<product-scan></product-scan>');
        $compile(element)(scope);
    }));

    it('Should show input and button', () => {
        scope.$digest();
        let input:ng.IAugmentedJQuery = element.find('input');
        expect(input).toBeDefined();
        let button:ng.IAugmentedJQuery = element.find('button');
        expect(button.text()).toBe('Scan');
    });

});