import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CEP } from 'src/app/models/cep';
import { AlertService } from '../alert/alert.service';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient, private _alert: AlertService) { }

  async get(cep: string): Promise<CEP> {
    return new Promise((resolve, reject) => {
      this.http.get<CEP>(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(res => {
          if (res.erro) {
            this._alert.creat('CEP não encontrado', 'warning')
            resolve(new CEP)
          } else {
            resolve(res)
          }
        })
        .catch(error => {
          this._alert.creat('Não foi possível localizar CEP', 'error')
          resolve(new CEP)
        })

    })
  }
}
