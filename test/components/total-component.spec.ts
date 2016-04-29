import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('total-component', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        scope.computeTotal = jasmine.createSpy('computeTotalSpy');
        element = angular.element('<total on-total-requested="computeTotal()"></total>');
        $compile(element)(scope);
    }));

    it('Should show button', () => {
        scope.$digest();
        let button:ng.IAugmentedJQuery = element.find('button');
        expect(button.text()).toBe('Total');
    });

    it('invoke callback on button click', () => {
        scope.$digest();
        element.find('button').triggerHandler('click');
        expect(scope.computeTotal).toHaveBeenCalled();
    });

});