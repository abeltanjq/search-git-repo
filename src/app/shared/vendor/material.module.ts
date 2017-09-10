import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdToolbarModule,
  MdProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule, MdCheckboxModule, MdInputModule,
    MdListModule, MdCardModule, MdIconModule, MdToolbarModule,
    MdProgressSpinnerModule],
  exports: [
    MdButtonModule, MdCheckboxModule, MdInputModule,
    MdListModule, MdCardModule, MdIconModule, MdToolbarModule,
    MdProgressSpinnerModule]
})
export class MaterialModule {}
