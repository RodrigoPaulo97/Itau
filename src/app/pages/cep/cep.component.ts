import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CEP } from 'src/app/models/cep';
import { CepService } from 'src/app/service/cep/cep.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnChanges {
  @Input('cep') cep!: string
  formCep = new CEP
  constructor(private service: CepService) { }

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    const cep = changes.cep.currentValue
    if (cep.length < 8) {
      this.formCep = new CEP
      return
    }
    this.formCep = await this.service.get(this.cep)

    console.log('cep', this.formCep)
    this.formCep.logradouro
  }



}
