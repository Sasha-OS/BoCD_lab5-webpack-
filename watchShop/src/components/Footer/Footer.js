const ROOT_FOOTER = document.getElementById('footer');

export const getFooter = () => {
    return ROOT_FOOTER;
};
export default class Footer {

    render() {
        const html = `
        <div class="footer">
          <div class="footer__row">
            <div class="footer__text">📞: +390560230120 ,
            Stay Home 🏠
            </div>
          </div>
         </div>
        `;
        if (ROOT_FOOTER != null) {
            ROOT_FOOTER.innerHTML = html;
        }
    }
}

export const footerDown = new Footer();
