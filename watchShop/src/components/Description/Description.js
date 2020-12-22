const ROOT_DESCRIPTION = document.getElementById('description');
import {getCatalog} from '../../index.js';

export const getROOT_DESCRIPTION = () => {
    return ROOT_DESCRIPTION;
};

export default class Description {
    


    handlerClear() {
        if (getROOT_DESCRIPTION() != null) {
            ROOT_DESCRIPTION.innerHTML = '';
        }
    }

    handlerOpenDescriptionPage(el, id) {
        descriptionPage.render(id);
    }

    render(id) {
        let CATALOG = getCatalog();
        let htmlCatalog = '';
        let index = id;

        CATALOG.forEach(({ id, name, price, img, description, gender }) => {

            if (id == index) {
                htmlCatalog += `
                <span class="description-element__name">${name}</span>
                <img class="description-element__img" src="${img}" />
                <span class="description-element__price">
                    ⚡️ ${price.toLocaleString()} USD
                </span>
                <p class="description-element__text">${description}</p>
                <p class="description-element__gender">Стать: ${gender}</p>
                `;
            }
        });

        const html = `
            <div class="description-container">
                <div id="description__close" class="description__close" onclick=""></div>
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `;
        if (ROOT_DESCRIPTION != null) {
            ROOT_DESCRIPTION.innerHTML = html;
        }
    }
}

export const descriptionPage = new Description();

