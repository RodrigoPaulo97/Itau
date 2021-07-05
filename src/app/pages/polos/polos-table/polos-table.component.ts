import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IBusiness } from 'src/app/models/ibusiness';
import { AlertService } from 'src/app/service/alert/alert.service';
import { IBusinessService } from 'src/app/service/IBusiness/ibusiness.service';

@Component({
  selector: 'app-polos-table',
  templateUrl: './polos-table.component.html',
  styleUrls: ['./polos-table.component.scss']
})
export class PolosTableComponent implements OnInit {

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns = ['name', 'business', 'valuation', 'active', 'acao']
  dataSource!: MatTableDataSource<IBusiness>
  lengthPaginator: number = 0
  registerSelect = new IBusiness
  constructor(private _service: IBusinessService, private _alert: AlertService) {

  }

  ngOnInit(): void {
    this.registerSelect = new IBusiness
    this.getRegister()

  }
  getRegister() {
    this._service.get().subscribe(
      (register) => {
        this.dataSource = new MatTableDataSource(register);
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.lengthPaginator = this.dataSource.data.length
      },
      () => {
        this._alert.creat('Não foi possivel buscar registro', 'error')
      }
    )
  }
  viewRegister(register: IBusiness) {
    this.registerSelect = register
  }

  filterTable(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase()
  }

}
