import 'angular'
import 'angular-mocks'
import {InMemoryCatalog} from "../../app/adapters/in-memory-catalog";
import {Money} from "../../app/domain/money";

describe('in-memory-catalog', () => {

    let $http:ng.IHttpService;
    let $httpBackend:ng.IHttpBackendService;

    beforeEach(angular.mock.inject((_$http_:ng.IHttpService, _$httpBackend_:ng.IHttpBackendService) => {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
    }));

    it('return null when product not found', () => {
        $httpBackend.expectGET('/catalog').respond(404);
        let catalog:InMemoryCatalog = new InMemoryCatalog($http);
        $httpBackend.flush();
        let price = catalog.findBy('a');
        expect(price).toBeNull();
    });

    it('return price when product found', () => {
        $httpBackend.expectGET('/catalog').respond({'b': 1});
        let catalog:InMemoryCatalog = new InMemoryCatalog($http);
        $httpBackend.flush();
        let price = catalog.findBy('b');
        expect(price).toEqual(new Money(1));
    });

});