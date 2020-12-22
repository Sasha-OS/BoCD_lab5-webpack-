/* eslint-env jest */
import fetch from 'isomorphic-fetch';
//import descriptionPage from '../Description/Description.js';
import {getROOT_DESCRIPTION} from '../Description/Description.js';
import {getCatalog} from '../../index.js';
import Description from '../Description/Description.js';

if (fetch) {
    fetch;
}
describe('instance of the class', ()=> {


    beforeAll( () => {
        if(Description) {
            let CATALOG = getCatalog();
            CATALOG;
        }
    });

    it('should work methods of instance', () => {
        expect(getROOT_DESCRIPTION()).toEqual(document.getElementById('description'));
    });

    it('should clear description', () => {
        const descriptionPage = new Description();
        descriptionPage.handlerClear();
        expect(getROOT_DESCRIPTION()).toBe(null);
    });
   
    it('should render description page', ()=> {

        let htmlCatalog = '';
        const html = '';
        const descriptionPage = new Description();
        descriptionPage.render(0);
        expect(html) == ((`
      <div class="description-container">
          <div id="description__close" class="description__close" onclick=""></div>
          <table>
              ${htmlCatalog}
          </table>
      </div>
  `));
        descriptionPage.handlerOpenDescriptionPage(null, 0);
        expect(descriptionPage.render(0));

    });
});



/*
    it('Test to get const', () => {
        let ROOT_DESCRIPTION = descriptionPage.getROOT_DESCRIPTION();
        expect(ROOT_DESCRIPTION)
    })

    it("Test handlerClear called in instance", () => {
        descriptionPage.handlerClear();
        expect(getROOT_DESCRIPTION.mock.calls).toEqual('');
      })
      expect(descriptionPage.getROOT_DESCRIPTION() == '');
    
      it("Test render called in instance", () => {
  
        const html = '';
        descriptionPage.render(0);
        expect(html == document.getElementById('description'));
        expect(descriptionPage.render()).toHaveBeenCalled()
   })  
   
   it("Test handlerOpenDescriptionPage called in instance", () => {

    descriptionPage.handlerOpenDescriptionPage(0);
    expect(descriptionPage.handlerOpenDescriptionPage()).toHaveBeenCalled()
  })*/