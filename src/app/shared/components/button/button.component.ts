import { Component, Input, Output, Self, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Product } from '../../types/product';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements ControlValueAccessor {
    @Input() product: Product;
    @Output() checked: EventEmitter<Product> = new EventEmitter<Product>();

    constructor(@Self() public ngControl: NgControl) {
        this.ngControl.valueAccessor = this;
    }

    checkedProduct(): void {
        this.checked.emit(this.product);
    }

    registerOnChange(fn: any): void {
    }

    registerOnTouched(fn: any): void {
    }

    writeValue(obj: any): void {
    }

}
