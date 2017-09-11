import { Injectable } from '@angular/core';

@Injectable()
export class SearchBarStateService {
  lastSearchTerm = '';
  selectedGit;

  getLastSearchTerm() {
    return this.lastSearchTerm;
  }

  setLastSearchTerm(searchTerm: string) {
    this.lastSearchTerm = searchTerm;
  }

  getSelectedGit() {
    return this.selectedGit;
  }
  setSelectedGit(sg: string) {
    return this.selectedGit = sg;
  }
}
