import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormControlsComponent } from './custom-form-controls.component';

describe('CustomeFormControlerComponent', () => {
  let component: CustomFormControlsComponent;
  let fixture: ComponentFixture<CustomFormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
