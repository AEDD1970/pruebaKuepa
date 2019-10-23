import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KuepaService {
  get url() { return "http://localhost:3000" }

  constructor(private httpClient: HttpClient) { }

  obtenerRegistros():any{
   return this.httpClient.get<any>(this.url + "/db").toPromise();
  }
}
