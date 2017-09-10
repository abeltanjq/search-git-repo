import { Injectable } from '@angular/core';

@Injectable()
export class SearchBarStateService {
  lastSearchTerm = '';

  getLastSearchTerm() {
    return this.lastSearchTerm;
  }

  setLastSearchTerm(searchTerm: string) {
    this.lastSearchTerm = searchTerm;
  }
}
