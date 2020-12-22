/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getROOT_PRODUCTS} from '../Products/Products.js';
import {localStorageUtil} from '../../utils/localStorageUtil.js';
import Products from '../Products/Products.js';
import {orderFunction} from '../Products/Products.js';

if (fetch) {
    fetch;
}
describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Products) {
            let ROOT_PRODUCTS = getROOT_PRODUCTS();
            ROOT_PRODUCTS;
        }
    });

    it ('shoud get products', () => {
        const ROOT_PRODUCTS = getROOT_PRODUCTS();
        expect(ROOT_PRODUCTS);
    });


    it('should render items', ()=> {
        const productsPage = new Products();
        const html = '';
        const htmlCatalog = '';
        productsPage.render();
        expect( html == `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
    `);
    });

    it('should create order', () => {
        const productsStore = '';
        const html = '';
        const htmlCatalog = '';
        orderFunction();
        expect ( productsStore == localStorageUtil.getProducts());
        expect( html == `
         <ul class="products-container">
             ${htmlCatalog}
         </ul>
         `);
    });
    it('should set item to local', ()=> {
        const productsPage = new Products();
        const html = '';
        const htmlCatalog = '';
        if (productsPage) {
            productsPage.handlerSetLocatStorage(this, 'el10');
        }
        expect(  html == `
        <ul class="products-container">
            ${htmlCatalog}
        </ul>
    `);
    });
});
/*
it('should create order', ()=> {
    const productsPage = new Products();
    const productsStore = ''
    const html = '';
    const htmlCatalog = '';
    orderFunction();
    expect ( productsStore == localStorageUtil.getProducts());
    expect( html == `
    <ul class="products-container">
        ${htmlCatalog}
    </ul>
    `);
    const { pushProduct, products } = '';
    if (productsPage) {
    productsPage.handlerSetLocatStorage(this, 'el10')
    }
    expect(  { pushProduct, products } = localStorageUtil.putProducts(id))
})
*/