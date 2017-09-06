import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdListModule,
  MdCardModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MdInputModule, MdListModule, MdCardModule],
})
export class MaterialModule {}
