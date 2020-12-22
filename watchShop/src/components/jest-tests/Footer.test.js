/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getFooter} from '../Footer/Footer.js';
import Footer from '../Footer/Footer.js';
if (fetch) {
    fetch;
}

describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Footer) {
            let ROOT_FOOTER = getFooter();
            ROOT_FOOTER;
        }
    });

    it('should display footer', ()=> {
        const footerDown = new Footer();
        const html = '';
        footerDown.render();

        expect(html == (`
        <div class="footer">
          <div class="footer__row">
            <div class="footer__text">📞: +390560230120 ,
            Stay Home 🏠
            </div>
          </div>
         </div>
        `));
    });
});