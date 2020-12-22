const ROOT_PRODUCTS = document.getElementById('products');
import {localStorageUtil} from '../../utils/localStorageUtil.js';
import {getCatalog} from '../../index.js';
import {headerPage} from '../../components/Header/Header.js';
export const getROOT_PRODUCTS = () => {
    return ROOT_PRODUCTS;
};

export default class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавити в корзину';
        this.labelRemove = 'Видалити з корзини';
    }
    handlerSetLocatStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if (pushProduct) {
            console.log(element, id);
            if (element) {
                element.classList.add(this.classNameActive);
                element.innerText = this.labelRemove;
            }
        } else {
            if (element) {
                element.classList.remove(this.classNameActive);
                element.innerText = this.labelAdd;
            }
        }

        headerPage.render(products.length);
    }

    render() {
        let CATALOG = getCatalog();
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = '';
            let activeText = '';
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            
            htmlCatalog += `
                    <li class="products-element">
                        <span class="products-element__name">${name}</span>
                        <img class="products-element__img" src="${img}" />
                        <span class="products-element__price">
                            ⚡️ ${price.toLocaleString()} USD
                        </span>
                        <button value="${id}" id="add_prod" class="products-element__btn${activeClass}" onclick="">
                            ${activeText}
                        </button>
                        <button value="${id}" id="show_des" class="description-element__btn" onclick=""> Опис </button>
                    </li>
                `;
                      
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        if (ROOT_PRODUCTS != null) {
            ROOT_PRODUCTS.innerHTML = html;
        }
        document.querySelectorAll('.check').forEach((element) => {
            element.onclick = orderFunction;
        });

        
            
    }
}


export const productsPage = new Products();


export var orderFunction = function() {
    let m = document.querySelector('.check[value="m"]');
    let f = document.querySelector('.check[value="f"]');
    let htmlCatalog = '';
    const productsStore = localStorageUtil.getProducts();
    let CATALOG = getCatalog();
    if ((m != null) &&( f != null)) {
        if (m.checked && !f.checked) {
            htmlCatalog = '';
            CATALOG.forEach(({ id, name, price, img, gender }) => {
                let activeClass = '';
                let activeText = '';
                if (activeText) {
                    activeText = '';
                }
                if (productsStore.indexOf(id) === -1) {
                    activeText = this.labelAdd;
                } else {
                    activeClass = ' ' + this.classNameActive;
                    activeText = this.labelRemove;
                }
    
                if(gender === 'm') {
                    htmlCatalog += `
            <li class="products-element">
                <span class="products-element__name">${name}</span>
                <img class="products-element__img" src="${img}" />
                <span class="products-element__price">
                    ⚡️ ${price.toLocaleString()} USD
                </span>
                <button value="${id}" id="add_prod" class="products-element__btn${activeClass}" onclick="">
                    Додати/Видалити
                </button>
                <button value="${id}" id="show_des" class="description-element__btn" onclick=""> Опис </button>
            </li>
        `; 

                } 
            }); 
        }
        else if (f.checked && !m.checked) {
            htmlCatalog = '';
            CATALOG.forEach(({ id, name, price, img, gender }) => {
                let activeClass = '';
                let activeText = '';
                if (activeText) {
                    activeText = '';
                }
                if (productsStore.indexOf(id) === -1) {
                    activeText = this.labelAdd;
                } else {
                    activeClass = ' ' + this.classNameActive;
                //activeText = this.labelRemove;
                }

                if(gender === 'f') {
                    htmlCatalog += `
        <li class="products-element">
            <span class="products-element__name">${name}</span>
            <img class="products-element__img" src="${img}" />
            <span class="products-element__price">
                ⚡️ ${price.toLocaleString()} USD
            </span>
            <button value="${id}" id="add_prod" class="products-element__btn${activeClass}" onclick="">
                Додати/Видалити
            </button>
            <button value="${id}" id="show_des" class="description-element__btn" onclick=""> Опис </button>
        </li>
    `; 

                } 
            }); 
        }   else {
            htmlCatalog = '';
            CATALOG.forEach(({ id, name, price, img }) => {
                let activeClass = '';
                let activeText = '';
                if (activeText) {
                    activeText = '';
                }
                if (productsStore.indexOf(id) === -1) {
                    activeText = this.labelAdd;
                } else {
                    activeClass = ' ' + this.classNameActive;
                //activeText = this.labelRemove;
                }


                htmlCatalog += `
    <li class="products-element">
        <span class="products-element__name">${name}</span>
        <img class="products-element__img" src="${img}" />
        <span class="products-element__price">
            ⚡️ ${price.toLocaleString()} USD
        </span>
        <button class="products-element__btn${activeClass}" onclick="">
            Додати/Видалити
        </button>
        <button value="${id}" id="show_des" class="description-element__btn" onclick=""> Опис </button>
    </li>
`; 

            });
        }
    }

    const html = `
<ul class="products-container">
    ${htmlCatalog}
</ul>
`;
    if (ROOT_PRODUCTS != null) {
        ROOT_PRODUCTS.innerHTML = html;
    }
};
