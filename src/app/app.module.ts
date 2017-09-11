import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/vendor/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultListComponent } from './search-bar/result-list.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { GitApiService } from './shared/git-api.service';
import { SearchBarStateService } from './search-bar/search-bar-state.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ResultListComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot([
      { path: 'home', component: SearchBarComponent },
      { path: 'repo/:id', component: RepoDetailsComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [GitApiService, SearchBarStateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
