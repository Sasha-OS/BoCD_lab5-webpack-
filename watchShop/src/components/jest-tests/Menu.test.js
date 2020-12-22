/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getROOT_MENU} from '../Menu/Menu.js';
import Menu from '../Menu/Menu.js';

if (fetch) {
    fetch;
}
describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Menu) {
            let ROOT_MENU = getROOT_MENU();
            ROOT_MENU;
        }
    });

    it('should display Menu', ()=> {
        const navigationMenu = new Menu();
        const html = '';
        navigationMenu.render();

        expect(html == (`
        <div class="dws-menu">
         <ul>
           <li route="/watchShop/index"><a href="index"><i></i>Головна</a></li>
           <li route="/watchShop/share"><a href="share"><i></i>Акції</a></li>
           <li route="/watchShop/cart"><a href="cart"><i></i>Корзина</a></li>
           <li route="/watchShop/order"><a href="order"><i></i>Зробити замовлення</a></li>
         </ul> 
      </div>
        `));
        if (getROOT_MENU() != null) {
            getROOT_MENU().innerHTML = html;
        }
    });
});