import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item, Person, Ship, Film } from './results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = "https://swapi.co/api"

  results: Item[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getResults (kind: string, term: string): void {
    if (!term.trim()) {
      this.results = [];
    }
    switch (kind) {
      case 'person':
        this.http.get(this.baseUrl + `/people/?search=${encodeURIComponent(term)}`).subscribe(results => this.results = results.results);
        break;
      case 'ship':
        this.http.get(this.baseUrl + `/starships/?search=${encodeURIComponent(term)}`).subscribe(results => this.results = results.results);
        break;
      case 'film':
        this.http.get(this.baseUrl + `/films/?search=${encodeURIComponent(term)}`).subscribe(results => this.results = results.results);
        break;
    }
    
  }
}
