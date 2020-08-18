import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { HomeComponent } from './pages/home/home.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormControlsComponent } from './shared/components/custom-form-controls/custom-form-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    CustomFormControlsComponent
  ],
    imports: [
        BrowserModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
