import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('pointOfSale', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        element = angular.element('<total></total>');
        $compile(element)(scope);
    }));

    it('Should show header', () => {
        scope.$digest();
        let button:ng.IAugmentedJQuery = element.find('button');
        expect(button.text()).toBe('Total');
    });

});