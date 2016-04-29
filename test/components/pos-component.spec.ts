import 'angular';
import 'angular-mocks';
import '../../app/boot';

describe('pos-component', () => {

    let element:ng.IAugmentedJQuery;
    let scope:any;

    beforeEach(angular.mock.module('posApp'));

    beforeEach(angular.mock.inject(($rootScope:any, $compile:ng.ICompileService, $httpBackend:ng.IHttpBackendService) => {
        scope = $rootScope.$new();
        element = angular.element('<point-of-sale></point-of-sale>');
        $httpBackend.expectGET('/catalog').respond(404);
        $compile(element)(scope);
    }));

    it('Should show header', () => {
        scope.$digest();
        let header:ng.IAugmentedJQuery = element.find('h1');
        expect(header.text()).toBe('Point of Sale');
    });

});