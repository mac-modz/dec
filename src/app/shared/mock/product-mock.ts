import { Injectable } from '@angular/core';
import { Product } from '../types/product';

@Injectable({
    providedIn: 'root'
})
export class ProductMock {
    private products = [
        {
            name: 'Produkt 1',
            value: '100',
        }, {
            name: 'Produkt 2',
            value: '200',
        }, {
            name: 'Produkt 3',
            value: '300',
        }, {
            name: 'Produkt 4',
            value: '400',
        }, {
            name: 'Produkt 5',
            value: '500',
        }, {
            name: 'Produkt 6',
            value: '9000',
        }
    ];

    constructor() {
    }

    public getProducts(): Product[] {
        return this.products;
    }
}
