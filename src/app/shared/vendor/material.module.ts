import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdCardModule,
  MdIconModule,
  MdToolbarModule,
  MdProgressSpinnerModule,
  MdSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MdButtonModule, MdCheckboxModule, MdInputModule,
    MdListModule, MdCardModule, MdIconModule, MdToolbarModule,
    MdProgressSpinnerModule, MdSelectModule],
  exports: [
    MdButtonModule, MdCheckboxModule, MdInputModule,
    MdListModule, MdCardModule, MdIconModule, MdToolbarModule,
    MdProgressSpinnerModule, MdSelectModule]
})
export class MaterialModule {}
