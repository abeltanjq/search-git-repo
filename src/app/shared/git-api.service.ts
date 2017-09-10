import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IGitResponse } from './git-res.interface';

@Injectable()
export class GitApiService {
  baseUrl = 'https://api.github.com/search/repositories?q=';
  currRepos: Array<any>;

  constructor(private http: HttpClient) { }

  searchRepos(searchTerm: string, sortOption: string, order: string): Observable<any> {
    const query = this.baseUrl + searchTerm + `&sort=` + sortOption + `&order=` + order;
    console.log(query);
    return this.http.get<IGitResponse>(query);
  }

  storeCurrRepos(currRepos: Array<any>) {
    this.currRepos = currRepos;
  }

  getCurrRepos(): Array<any> {
    return this.currRepos || [];
  }
  getRepoDetail(id: number) {
    if (this.currRepos) {
      return this.currRepos.find(repo => {
        return repo.id == id;
      });
    } else {
      console.log('Repo not found, go to 404');
    }
  }
}
