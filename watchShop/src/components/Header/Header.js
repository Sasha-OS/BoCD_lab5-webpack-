const ROOT_HEADER = document.getElementById('header');
export const getROOT_HEADER = () => {
    return ROOT_HEADER;
};
import {shoppingPage} from '../Shopping/Shopping.js';
export default class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        if (ROOT_HEADER != null) {
            ROOT_HEADER.innerHTML = '';
        }
        const html = `
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
        `;
        if (ROOT_HEADER != null) {
            ROOT_HEADER.innerHTML = html;
        }
        
        
    }
}

export const headerPage = new Header();
