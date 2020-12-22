
import {localStorageUtil} from '../../utils/localStorageUtil.js';
import {getCatalogCart} from '../../cart.js';
import {getROOT_CART} from '../../cart.js';



export default class Cart {

	
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        let CATALOG = getCatalogCart();
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
        const ROOT_CART = getROOT_CART();
        if (ROOT_CART != null) {
            ROOT_CART.innerHTML = html;
        }
    }
	
}

    


export const cartPage = new Cart();