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
        this.http.get<Person[]>(this.baseUrl + `/people/?search=${encodeURIComponent(term)}`).subscribe(results => {console.log('returning results', results); this.results = results.results});
      case 'ship':
        return this.http.get<Ship[]>(this.baseUrl + `/starship/${encodeURIComponent(term)}`);
      case 'film':
        return this.http.get<Film[]>(this.baseUrl + `/films/${encodeURIComponent(term)}`);
    }
    
  }
}
