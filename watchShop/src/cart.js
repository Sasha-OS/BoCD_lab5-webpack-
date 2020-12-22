import {spinnerPage} from './components/Spinner/Spinner.js';
import {navigationMenu} from './components/Menu/Menu.js';
import {cartPage} from './components/Cart/Cart.js';
import {productsPage} from './components/Products/Products.js';
import {rout} from './router.js';
import {errorPage} from './components/Error/Error.js';
const ROOT_CART = document.getElementById('cart');

export const getROOT_CART = () => {
    return ROOT_CART
};
export function render() {
    rout();
    navigationMenu.render();
    cartPage.render();
}

spinnerPage.render();

export const getCatalogCart = () => {
    return CATALOG;
};

let CATALOG = [];


fetch('server/db.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 1000);
    })
    .catch(() => {
        spinnerPage.handleClear();
        errorPage.render();
    });

document.addEventListener('click', (evt) => {
    CATALOG.forEach(({ id }) => {
        if (id === evt.target.value) {
				
            if (evt.target.id === 'remove_product') {
                productsPage.handlerSetLocatStorage(this, id);
            } 

        }
    });
});
	
