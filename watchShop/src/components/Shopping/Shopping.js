const ROOT_SHOPPING = document.getElementById('shopping');
export const getROOT_SHOPPING = () => {
    return ROOT_SHOPPING;
};
import {localStorageUtil} from '../../utils/localStorageUtil.js';
import {getCatalog} from '../../index.js';
export default class Shopping {
    handlerClear() {
        if (ROOT_SHOPPING != null) {
            ROOT_SHOPPING.innerHTML = '';
        }
    }

    render() {
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

        const html = `
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
        `;
        if (ROOT_SHOPPING != null) {
            ROOT_SHOPPING.innerHTML = html;
        }}
}

export const shoppingPage = new Shopping();
