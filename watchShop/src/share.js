import {footerDown} from './components/Footer/Footer.js';
import {spinnerPage} from './components/Spinner/Spinner.js';
import {navigationMenu} from './components/Menu/Menu.js';
import {sharePage} from './components/Share/Shares.js';
import {rout} from './router.js';
import {errorPage} from './components/Error/Error.js';

function render() {
    rout();
    footerDown.render();	
    navigationMenu.render();
    sharePage.render();

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
