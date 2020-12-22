const ROOT_MENU = document.getElementById('menu');
export const getROOT_MENU = () => {
    return ROOT_MENU;
};
export default class Menu {

    render() {
        const html = `
        <div class="dws-menu">
         <ul>
           <li route="/watchShop/index"><a href="index"><i></i>Головна</a></li>
           <li route="/watchShop/share"><a href="share"><i></i>Акції</a></li>
           <li route="/watchShop/cart"><a href="cart"><i></i>Корзина</a></li>
           <li route="/watchShop/order"><a href="order"><i></i>Зробити замовлення</a></li>
         </ul> 
      </div>
        `;
        if (ROOT_MENU != null) {
            ROOT_MENU.innerHTML = html;
        }}
}

export const navigationMenu = new Menu();
