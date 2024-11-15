import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDetailsResponse, FilmDetailsResponse, FilmsResponse } from './interface';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  baseUrl = 'https://www.swapi.tech/api/';

  constructor(private http: HttpClient) {}

  getAllMovies$(): Observable<FilmsResponse> {
    return this.http.get<FilmsResponse>(`${this.baseUrl}/films`);
  }

  getMovieById$(id: string): Observable<FilmDetailsResponse> {
    return this.http.get<FilmDetailsResponse>(`${this.baseUrl}/films/${id}`);
  }

  getCharacterById$(id: string): Observable<CharacterDetailsResponse> {
    return this.http.get<CharacterDetailsResponse>(`${this.baseUrl}/people/${id}`);
  }
}
