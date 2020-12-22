/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import LocalStorageUtil from '../../utils/localStorageUtil.js';

if (fetch) {
    fetch;
}

describe('instance of the class', ()=> {
    beforeAll( () => {

    });

    it('should get product from local storage', ()=> {
        const localStorageUtil = new LocalStorageUtil();
        const productsLocalStorage = localStorage.getItem('products');
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage);
        }
        expect((localStorageUtil.getProducts()) == (JSON.parse(productsLocalStorage)));
    });

    it('should put product into local storage', ()=> {
        const localStorageUtil = new LocalStorageUtil();
        let products = localStorageUtil.getProducts();
        let pushProduct = false;
        if (pushProduct) {
            pushProduct;
        }
        const index = products.indexOf(14);

        if (index === -1) {
            products.push(14);
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }
        localStorageUtil.putProducts(14);
        expect( localStorage.setItem('products', JSON.stringify(products)));
    });
});