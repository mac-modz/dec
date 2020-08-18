import { Component } from '@angular/core';
import { Product } from '../../shared/types/product';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent{
    public panelOpenState = false;
    public product: Product = {name: '', value: ''};
    constructor() { }

    getChangedProduct(event: Product): void {
        this.product = event;
    }

}
