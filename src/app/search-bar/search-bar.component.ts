import { Component, OnInit } from '@angular/core';

import { GitApiService } from '../shared/git-api.service';
import { SearchBarStateService } from './search-bar-state.service';

@Component({
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;
  results: Array<object>;
  sortOptions = ['stars', 'forks', 'updated'];
  order = ['asc', 'desc'];

  constructor(private gas: GitApiService, private sbss:  SearchBarStateService) { }

  ngOnInit() {
    this.searchTerm = this.sbss.getLastSearchTerm();
    this.results = this.gas.getCurrRepos();
  }

  searchRepo(searchTerm) {
    this.searchTerm = searchTerm;
    this.sbss.setLastSearchTerm(this.searchTerm);
    // Todo: write error handling
    this.gas.searchRepos(searchTerm, this.sortOptions[2], this.order[1])
            .subscribe(res => {
              this.results = res.items;
              this.gas.storeCurrRepos(this.results);
            });
  }
}
