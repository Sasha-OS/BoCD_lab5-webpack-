/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getROOT_SHOPPING} from '../Shopping/Shopping.js';
import Shopping from '../Shopping/Shopping.js';
import {localStorageUtil} from '../../utils/localStorageUtil.js';
import {getCatalog} from '../../index.js';

if (fetch) {
    fetch;
}

describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Shopping) {
            let ROOT_SHOPPING = getROOT_SHOPPING();
            ROOT_SHOPPING;
        }
    });

    it('should clear shopping div', ()=> {
        const shoppingPage = new Shopping();
        const ROOT_SHOPPING = getROOT_SHOPPING();
        shoppingPage.handlerClear();
        expect(ROOT_SHOPPING).toEqual(null);
    });

    it('shoud render shopping cart items', () => {
        const html = '';
        const shoppingPage = new Shopping();
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        let CATALOG = getCatalog();
        CATALOG.forEach(({ id, name, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">⚡️ ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
        shoppingPage.render();

        expect(html == (`
        <div class="shopping-container">
            <div id="shopping__close" class="shopping__close" onclick=""></div>
            <table>
                ${htmlCatalog}
                <tr>
                    <td class="shopping-element__name">💥 Сума всіх товарів:</td>
                    <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                </tr>
            </table>
        </div>
    `));
    });
});