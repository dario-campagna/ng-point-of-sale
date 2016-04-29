import 'angular'
import 'angular-mocks'
import InMemoryCatalog from "../../app/adapters/in-memory-catalog";
import Money from "../../app/domain/money";

describe('in-memory-catalog', () => {

    let catalog:InMemoryCatalog;
    let $httpBackend:ng.IHttpBackendService;

    beforeEach(angular.mock.inject(($http:ng.IHttpService, _$httpBackend_:ng.IHttpBackendService) => {
        $httpBackend = _$httpBackend_;
        catalog = new InMemoryCatalog($http);
    }));

    it('return null when product not found', () => {
        $httpBackend.expectGET('/catalog').respond(404);
        $httpBackend.flush();
        let price = catalog.findBy('a');
        expect(price).toBeNull();
    });

    it('return price when product found', () => {
        $httpBackend.expectGET('/catalog').respond({'b': 1});
        $httpBackend.flush();
        let price = catalog.findBy('b');
        expect(price).toEqual(new Money(1));
    });

});