import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../types/product';
import { ProductMock } from '../../mock/product-mock';

@Component({
    selector: 'app-custom-form-controls',
    templateUrl: './custom-form-controls.component.html',
})
export class CustomFormControlsComponent {
    @Output() data: EventEmitter<Product> = new EventEmitter<Product>();
    public mock: Product[];
    public form = new FormGroup({
        btn: new FormControl('')
    });

    constructor(private productMock: ProductMock) {
        this.mock = this.productMock.getProducts();
    }

    productChange(activeProduct: Product): void {
        this.data.emit(activeProduct);
    }

}
