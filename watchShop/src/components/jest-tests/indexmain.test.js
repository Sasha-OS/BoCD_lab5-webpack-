/* eslint-env jest */
import fetch from 'isomorphic-fetch';
import {getCatalog} from '../../index.js';
import {render} from '../../index.js';
if (fetch) {
    fetch;
}
describe('instance of the class', ()=> {
    beforeAll( ()=> {
        require('whatwg-fetch');

        jest.spyOn(window, 'fetch').mockImplementation(() => {
            const fetchResponse = {
                ok: true,
                json: () => Promise.resolve({
                    'id': 'el1',
                    'name': 'ROLEX Yacht-Master',
                    'img': 'img/1.jpg',
                    'price': 30500,
                    'description' : 'Тип: Класичні, Матеріал корпусу:18 - к біле золото <br/> Водонепроникність:100 м, Діаметр корпусу:42 мм',
                    'gender': 'm'
                },
                {
                    'id': 'el2',
                    'name': 'ROLEX Deepsea',
                    'img': 'img/2.jpg',
                    'price': 12999,
                    'description' : 'Тип:Класичні, Матеріал корпусу:Біле 18-к золото, сталь. <br/> Водонепроникність:100 м',
                    'gender': 'm'
                },
                {
                    'id': 'el3',
                    'name': 'ROLEX Submariner',
                    'img': 'img/3.jpg',
                    'price': 13000,
                    'description' : 'Класичні, Матеріал корпусу:18-к Жовте золото <br/> Водонепроникність:100 м',
                    'gender': 'm'
                },
                {
                    'id': 'el4',
                    'name': 'ROLEX Sky-Dweller',
                    'img': 'img/4.jpg',
                    'price': 15000,
                    'description' : 'Тип: Класичні, Матеріал корпусу:18 - к біле золото ',
                    'gender': 'm'
                },
                {
                    'id': 'el5',
                    'name': 'ROLEX Datejust',
                    'img': 'img/5.jpg',
                    'price': 13400,
                    'description' : 'Тип: Класичні, Матеріал корпусу:18 - к біле золото',
                    'gender': 'm'
                },
                {
                    'id': 'el6',
                    'name': 'ROLEX Daytona',
                    'img': 'img/6.jpg',
                    'price': 16000,
                    'description' : 'Тип:Класичні, Матеріал корпусу:Біле 18-к золото, сталь',
                    'gender': 'm'
                },
                {
                    'id': 'el7',
                    'name': 'ROLEX Datejust',
                    'img': 'img/7.jpg',
                    'price': 12950,
                    'description' : 'Тип:Класичні, Матеріал корпусу:Біле 18-к золото, сталь. <br/> Водонепроникність:100 м, Діаметр корпусу:41 мм',
            
                    'gender': 'm'
                },
                {
                    'id': 'el8',
                    'name': 'ROLEX Sky-Dweller',
                    'img': 'img/8.jpg',
                    'price': 28700,
                    'description' : 'Тип:Класичні, Матеріал корпусу:Біле 18-к золото, сталь.',
                    'gender': 'm'
                },
                {
                    'id': 'el9',
                    'name': 'ROLEX Datejust',
                    'img': 'img/9.jpg',
                    'price': 8800,
                    'description' : 'Класичні, Матеріал корпусу:18-к Жовте золото',
                    'gender': 'f'
                },
                {
                    'id': 'el10',
                    'name': 'ROLEX SEA-DWELLER',
                    'img': 'img/10.jpg',
                    'price': 10800,
                    'description' : 'Класичні, Матеріал корпусу:18-к Жовте золото',
                    'gender': 'f'
                },
                {
                    'id': 'el11',
                    'name': 'ROLEX Datejust',
                    'img': 'img/11.jpg',
                    'price': 14200,
                    'description' : 'Класичні, Матеріал корпусу:18-к Жовте золото',
                    'gender': 'f'
                },
                {
                    'id': 'el12',
                    'name': 'ROLEX Datejust',
                    'img': 'img/12.jpg',
                    'price': 14600,
                    'description' : 'Тип: Класичні, Матеріал корпусу:18 - к біле золото',
                    'gender': 'f'
                })
            };
            return Promise.resolve(fetchResponse);
        });
    });

    it('should return constant', ()=> {
        let CATALOG = getCatalog();
        expect(CATALOG);
    });

    it('shoud render main file', ()=> {
        render();
    });
});