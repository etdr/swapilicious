import { Component, OnInit } from '@angular/core';

import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-parameters',
  templateUrl: './search-parameters.component.html',
  styleUrls: ['./search-parameters.component.scss']
})
export class SearchParametersComponent implements OnInit {

  kind: string = "";
  term: string = "";

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getResults(): void {
    this.searchService.getResults(this.kind, this.term);
  }

}
