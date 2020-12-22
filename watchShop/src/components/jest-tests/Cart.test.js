/*eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getCatalogCart} from '../../cart.js';
import Cart from '../Cart/Cart.js';
import {localStorageUtil} from '../../utils/localStorageUtil.js';
if (fetch) {
    fetch;
}
describe( 'instance of the class', ()=> {

    beforeAll( () => {
        if(Cart) {
            Cart;
        }
    });


    it('shoudle fill cart page',()=> {
        let CATALOG = getCatalogCart();
        let htmlCatalog = '';
        let sumCatalog = 0;
        const productsStore = localStorageUtil.getProducts();
        const cartPage = new Cart();
        cartPage.render();
        CATALOG.forEach(({ id, name, price, img }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
			<li class="products-element">
				<span class="products-element__name">${name}</span>
				<img class="products-element__img" src="${img}" />
				<span class="products-element__price">
					⚡️ ${price.toLocaleString()} USD
				</span>
				<button value="${id}" id="remove_product" class="products-element__btn" onclick="">
								Видалити з корзини
                        </button>
			</li>
                `;
                sumCatalog += price;
            }
        });
        const html = `
        <ul class="products-container">
           
                ${htmlCatalog}
                <div class="shopping-element__name">💥 Сума всіх товарів:</div>
                <div class="shopping-element__price">${sumCatalog.toLocaleString()} USD</div>
                <button class="description-element__btn" onclick='location.href="https://sasha-os.github.io/watchShop/order"' > Перейти до формування замовлення </button>
               
                
           
            </ul>
    `;
        expect (html == ( `
        <ul class="products-container">
           
                ${htmlCatalog}
                <div class="shopping-element__name">💥 Сума всіх товарів:</div>
                <div class="shopping-element__price">${sumCatalog.toLocaleString()} USD</div>
                <button class="description-element__btn" onclick='location.href="https://sasha-os.github.io/watchShop/order"' > Перейти до формування замовлення </button>
               
                
           
            </ul>
    `));
    
    });

});


