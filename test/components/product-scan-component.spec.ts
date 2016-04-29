import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('product-scan-component', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        element = angular.element('<product-scan on-scan="scanProduct(barCode)"></product-scan>');
        $compile(element)(scope);
    }));

    it('Should show input and button', () => {
        scope.$digest();
        let input:ng.IAugmentedJQuery = element.find('input');
        expect(input).toBeDefined();
        let button:ng.IAugmentedJQuery = element.find('button');
        expect(button.text()).toBe('Scan');
    });

    it('should invoke callback on Scan click', () => {
        scope.scanProduct = jasmine.createSpy('scanSpy');
        scope.$digest();
        element.find('input').controller('ngModel').$setViewValue('a');
        element.find('button').triggerHandler('click');
        expect(scope.scanProduct).toHaveBeenCalledWith('a');
    });

});