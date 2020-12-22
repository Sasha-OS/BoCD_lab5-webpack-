/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getROOT_HEADER} from '../Header/Header.js';
import Header from '../Header/Header.js';
import { shoppingPage } from '../Shopping/Shopping.js';

if (fetch) {
    fetch;
}

describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Header) {
            let ROOT_HEADER = getROOT_HEADER();
            ROOT_HEADER;
        }
    });

    it('should display shopping at the top of the page', ()=> {
        const headerPage = new Header();
        headerPage.handlerOpenShoppingPage();
        expect(shoppingPage.render());
    });

    it ('shoud display count of items in the cart', () => {
        const headerPage = new Header();
        const html = '';
        const count = 0;
        headerPage.render();

        expect(html == `
            <div class="header-container">
                <div id="open_shopping" class="header-counter" onclick="">
                🛒 ${count}
                </div>
            </div>
        <div class="check-box">
            <div class="check-item">
            <input type="checkbox" class="check" value="all" id="all" name="all" checked>
            <label for="all">Всі</label>
            </div>
            <div class="check-item">
                <input type="checkbox" class="check" value="m" id="m" name="m">
                <label for="m">Чоловічі</label>
            </div>
            <div class="check-item">
            <input type="checkbox" class="check" value="f" id="f" name="f">
            <label for="f">Жіночі</label>
            </div>
        </div>
        `);
    });
});