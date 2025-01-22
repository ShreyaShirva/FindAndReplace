import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FindAndReplaceComponent } from './find-and-replace.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FindAndReplaceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [FindAndReplaceComponent]
})
export class AppModule { }
