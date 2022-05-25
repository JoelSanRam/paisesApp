import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RespCountry } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string): Observable<RespCountry[]>{
    return this.http.get<RespCountry[]>(`${environment.apiUrl}name/${termino}?fields=name,capital,alpha2Code,flag,population`);

  }
  buscarPaisCapital(termino: string): Observable<RespCountry[]>{
    return this.http.get<RespCountry[]>(`${environment.apiUrl}capital/${termino}?fields=name,capital,alpha2Code,flag,population`);

  }

  getPaisCodigo(termino: string): Observable<RespCountry>{
    return this.http.get<RespCountry>(`${environment.apiUrl}alpha/${termino}`);

  }

  getPaisRegion(termino: string): Observable<RespCountry[]>{
    return this.http.get<RespCountry[]>(`${environment.apiUrl}regionalbloc/${termino}?fields=name,capital,alpha2Code,flag,population`);

  }
}
