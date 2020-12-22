/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {rout} from '../../router.js';
if (fetch) {
    fetch;
}

describe('ckech rout', () => {

    it('ex rout', ()=> {
        let Router = '';
        rout();
        expect(typeof(Router) == 'function');

    });
});