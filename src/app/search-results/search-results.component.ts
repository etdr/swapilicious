import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';
import { Item, Person, Ship, Film } from '../results';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
