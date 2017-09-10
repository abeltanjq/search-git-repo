import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { GitApiService } from '../shared/git-api.service';
import { SearchBarStateService } from './search-bar-state.service';

@Component({
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;
  results: Array<object>;
  isSearching = false;
  isInvalid = false;
  // put this in git service
  sortOptions = ['stars', 'forks', 'updated'];
  order = ['asc', 'desc'];

  constructor(private gas: GitApiService, private sbss:  SearchBarStateService) { }

  ngOnInit() {
    this.searchTerm = this.sbss.getLastSearchTerm();
    this.results = this.gas.getCurrRepos();
  }

  searchRepo(searchTerm) {
    this.searchTerm = searchTerm.replace(/[^a-zA-Z0-9\s\s+\-]/g, ' ');
    this.sbss.setLastSearchTerm(this.searchTerm);
    this.results = undefined;
    this.isInvalid = false;
    this.isSearching = true;

    this.gas.searchRepos(this.searchTerm, this.sortOptions[2], this.order[1])
            .subscribe(
              res => {
                this.isSearching = false;
                this.results = res.items;
                this.gas.storeCurrRepos(this.results);
              },
              (error: HttpErrorResponse) => {
                if (error.status >= 400 && error.status < 500) {
                  this.isSearching = false;
                  this.isInvalid = true;
                  console.log(error);
                }
              }
          );
  }

  clearSearchTerm(e) {
    e.preventDefault();
    this.searchTerm = '';
    this.isSearching = false;
    this.results = undefined;
    this.isInvalid = false;
  }
}
