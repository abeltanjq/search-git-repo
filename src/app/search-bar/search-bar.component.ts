import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchTerm: string;
  results: Array<object>;

  constructor() { }

  ngOnInit() {
  }

  searchRepo(keyword) {
    this.searchTerm = keyword;
    this.results = [
      {owner: 'John', name: 'john repo name'},
      {owner: 'Ferlicia', name: 'F for Fun'},
      {owner: 'Abrahma', name: 'Abrakadabra library'},
      {owner: 'Tesla', name: 'Power of AC lib'}
    ];
  }
}
