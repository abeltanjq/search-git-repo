import { Component, OnInit } from '@angular/core';

import { GitApiService } from '../shared/git-api.service';

@Component({
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;
  results: Array<object>;
  sortOptions = ['stars', 'forks', 'updated'];
  order = ['asc', 'desc'];

  constructor(private gas: GitApiService) { }

  ngOnInit() {
  }

  searchRepo(searchTerm) {
    this.searchTerm = searchTerm;
    // Todo: write error handling
    this.gas.searchRepos(searchTerm, this.sortOptions[2], this.order[1])
            .subscribe(res => {
              this.results = res.items;
            });
  }
}
