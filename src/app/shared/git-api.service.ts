import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IGitResponse } from './git-res.interface';

@Injectable()
export class GitApiService {
  baseUrl = 'https://api.github.com/search/repositories?q=';

  constructor(private http: HttpClient) { }

  searchRepos(searchTerm: string, sortOption: string, order: string): Observable<any> {
    const query = this.baseUrl + searchTerm + `&sort=` + sortOption + `&order=` + order;
    console.log(query);
    return this.http.get<IGitResponse>(query);
  }

}
