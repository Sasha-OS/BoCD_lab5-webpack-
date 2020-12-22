/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getROOT_SLIDER} from '../Slider/Slider.js';
import Slider from '../Slider/Slider.js';

if (fetch) {
    fetch;
}

describe('instance of the class', ()=> {
    beforeAll( () => {
        if(Slider) {
            let ROOT_SLIDER = getROOT_SLIDER();
            ROOT_SLIDER;
        }
    });

    it('should return constant', ()=> {
        const ROOT_SLIDER = getROOT_SLIDER();
        expect(ROOT_SLIDER).toEqual(null);
    
    });

    it('should render slider', ()=> {
        const autoSlider = new Slider();
        const html = '';
        autoSlider.render();
        expect(html == (`
        <div id="row">
              <img src="img/1.jpg" alt ="">
              <img src="img/2.jpg" alt ="">
              <img src="img/3.jpg" alt ="">
              <img src="img/4.jpg" alt ="">
              <img src="img/5.jpg" alt ="">
        <img src="img/6.jpg" alt ="">
        </div>
        `));
        
    });


});