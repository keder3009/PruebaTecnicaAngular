import { Injectable } from '@angular/core';
import { HttpClient, } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PubService {

  public URI = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPublications() {
    return this.http.get(`${this.URI}/api/publications/`);
  }
  
  addPublications(data: object) {
    return this.http.post(`${this.URI}/api/publications/save`, data);
  }

  addEmail(correo: string) {
    return this.http.post(`${this.URI}/api/publications/addEmail`, {correo});
  }
}
