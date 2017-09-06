import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/vendor/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ListResultsComponent } from './list-results/list-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ListResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
