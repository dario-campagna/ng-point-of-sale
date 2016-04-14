import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('display-component', () => {

    let element:ng.IAugmentedJQuery, scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService) => {
        scope = $rootScope.$new();
        element = angular.element('<display message="message"></display>');
        $compile(element)(scope);
    }));

    it('Should show readonly input', () => {
        scope.$digest();
        let input:ng.IAugmentedJQuery = element.find('input');
        expect(input).toBeDefined();
        expect(input.attr('readonly')).toBeDefined();
    });

    it('Should display message', () => {
        scope.message = 'a';
        scope.$digest();
        let input:ng.IAugmentedJQuery = element.find('input');
        expect(input.val()).toBe('a');
    });

});