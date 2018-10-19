import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    WelcomeComponent
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
