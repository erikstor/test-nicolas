import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { cotizacion } from '../components/interfaces/Form';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private baseURL: string = environment.baseURL

  constructor(private http: HttpClient) { }

  cotizacion(data: cotizacion): Observable<boolean> {

    return this.http.post<boolean>(`${this.baseURL}`, data)

  }

}
