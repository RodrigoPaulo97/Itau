import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCRUD } from 'src/app/models/crud.request';
import { environment } from 'src/environments/environment';
import { IBusiness } from '../../models/ibusiness';

@Injectable({
  providedIn: 'root'
})
export class IBusinessService implements RequestCRUD<IBusiness>{
  readonly api = environment.api + 'itau_teste/'
  constructor(private http: HttpClient) { }


  get(): Observable<IBusiness[]> {
    return this.http.get<IBusiness[]>(this.api)
  }
  getID(id: string | number): Observable<IBusiness> {
    return this.http.get<IBusiness>(this.api + id)
  }

  insert(register: IBusiness): Observable<IBusiness> {
    return this.http.post<IBusiness>(this.api, register)
  }
  edit(register: IBusiness): Observable<IBusiness> {
    return this.http.put<IBusiness>(this.api + register.id, register)
  }
  delete(id: string): Observable<IBusiness> {
    return this.http.delete<IBusiness>(this.api + id)
  }
}
