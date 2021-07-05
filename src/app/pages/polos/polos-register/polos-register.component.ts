import { Breakpoints } from '@angular/cdk/layout';
import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { IBusiness } from 'src/app/models/ibusiness';
import { AlertService } from 'src/app/service/alert/alert.service';
import { IBusinessService } from 'src/app/service/IBusiness/ibusiness.service';

@Component({
  selector: 'app-polos-register',
  templateUrl: './polos-register.component.html',
  styleUrls: ['./polos-register.component.scss']
})
export class PolosRegisterComponent implements OnInit {
  @Input('register') register = new IBusiness
  @Output('close') close = new EventEmitter
  form !: FormGroup
  constructor(
    private _formBuild: FormBuilder,
    private validateBrService: ValidateBrService,
    private service: IBusinessService,
    private _alert: AlertService) { }

  ngOnInit(): void {
    this.creatForm()
    this.form.patchValue(this.register)
  }
  creatForm() {
    this.form = this._formBuild.group(
      {
        id: '',
        name: new FormControl('', Validators.required),
        business: new FormControl('', Validators.required),
        valuation: new FormControl('', Validators.required),
        active: false,
        cep: new FormControl('', [Validators.required, Validators.minLength(8)]),
        cnpj: new FormControl('', [Validators.required, this.validateBrService.cnpj]),
      }
    )
  }

  saveForm() {
    if (this.register.id) {

      this.service.edit(this.register).toPromise()
        .then(res => this._alert.creat('Registro Alterado com sucesso.', 'success'))
        .catch(error => {
          this._alert.creat('Não foi possível realizar alteração', 'error')
          debugger
        })
    } else {
      this.service.insert(this.register).toPromise()
        .then(() => { 
          this._alert.creat('Registro criado com sucesso.', 'success') 
          this.back()
        })
        .catch(error => {
          this._alert.creat('Não foi salvar registro', 'error')
          debugger
        })
    }
  }
  
  back() {
    this.close.emit()
  }
  ///Acesso rápido ao valor do formulairo
  $value(control: string) {
    try {
      return this.form.get(control)?.value
    }
    catch {
      return 'null'
    }
  }
  ///Acesso rápido a validação de um control do formulário
  $valid(control: string) {
    try {
      return this.form.get(control)?.valid
    }
    catch {
      return false
    }
  }
}
