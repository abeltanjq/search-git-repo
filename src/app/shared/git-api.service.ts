import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { IGitResponse } from './git-res.interface';

@Injectable()
export class GitApiService {
  baseUrl = 'https://api.github.com/search/repositories?q=';
  currRepos: Array<any>;
  options = [
    { name: 'Sort By',
      value: ['stars', 'forks', 'updated'],
      selection: 2
    },
    {
      name: 'Order By',
      value: ['asc', 'desc'],
      selection: 1
    }
  ];

  constructor(private http: HttpClient) { }

  getOptions() {
    return this.options;
  }

  searchRepos(searchTerm: string, sortOptionIndex: number, orderIndex: number): Observable<any> {
    const query = this.baseUrl + searchTerm + `&sort=` + this.options[0].value[sortOptionIndex]
                                            + `&order=` + this.options[1].value[orderIndex];
    return this.http.get<IGitResponse>(query)
                    .catch(this.handleError);
  }

  storeCurrRepos(currRepos: Array<any>) {
    this.currRepos = currRepos;
  }

  getCurrRepos(): Array<any> {
    return this.currRepos;
  }

  getRepoDetail(id: number) {
    if (this.currRepos) {
      return this.currRepos.find(repo => {
        return repo.id == id;
      });
    } else {
      console.log('Repo not found, go to home');
    }
  }

  handleError(error) {
    return Observable.throw(error);
  }
}
