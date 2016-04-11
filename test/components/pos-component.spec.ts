import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('pointOfSale', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        element = angular.element('<point-of-sale></point-of-sale>');
        $compile(element)(scope);
    }));

    it('Should show header', () => {
        scope.$digest();
        let header:ng.IAugmentedJQuery = element.find('h1');
        expect(header.text()).toBe('Point of Sale');
    });

});