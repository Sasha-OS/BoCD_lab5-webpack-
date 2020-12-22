import {spinnerPage} from './components/Spinner/Spinner.js';
import {headerPage} from './components/Header/Header.js';
import {productsPage} from './components/Products/Products.js';
import {footerDown} from './components/Footer/Footer.js';
import {navigationMenu} from './components/Menu/Menu.js';
import {autoSlider} from './components/Slider/Slider.js';
import {errorPage} from './components/Error/Error.js';
import {localStorageUtil} from './utils/localStorageUtil.js';
import {descriptionPage} from './components/Description/Description.js';
import {getROOT_DESCRIPTION} from './components/Description/Description.js';
import {shoppingPage} from './components/Shopping/Shopping.js';
import {rout} from './router.js';




export function render() {
    rout();
    let productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);
    productsPage.render();
    footerDown.render();	
    navigationMenu.render();
    autoSlider.render();
}

spinnerPage.render();



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

    export const getCatalog = () => {
        return CATALOG;
    };

document.addEventListener('click', (evt) => {
    document.getElementById('open_shopping').addEventListener('click', function() {
        headerPage.handlerOpenShoppingPage();
        document.getElementById('shopping__close').addEventListener('click', function() {
            shoppingPage.handlerClear();
			
        });
    });	
    let CATALOG = getCatalog();
    CATALOG.forEach(({ id }) => {
        if (id === evt.target.value) {
            if (evt.target.id === 'add_prod') {
                productsPage.handlerSetLocatStorage(this, id);
            } 
            else if (evt.target.id === 'show_des') {
                descriptionPage.handlerOpenDescriptionPage(this, id);
                document.getElementById('description__close').addEventListener('click', function() {
                    getROOT_DESCRIPTION().innerHTML = '';
                });				
            }
        }
    });
});




	
	
	
/*
	else if (evt.target.id === 'show_des') {
		descriptionPage.handlerOpenDescriptionPage(this, id)
	} else if (evt.target.id === 'close_des') {
		descriptionPage.handlerClear();
	} else if (evt.target.id === 'open_shopping') {
		headerPage.handlerOpenShoppingPage();
	} else if (evt.target.id === 'close_shopping') {
		shoppingPage.handlerClear();
	}
	}})
	*/
