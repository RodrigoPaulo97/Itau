import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';
import { IBusinessService } from './service/IBusiness/ibusiness.service';
import { MatButtonModule } from '@angular/material/button';
import { PolosTableComponent } from './pages/polos/polos-table/polos-table.component';
import { PolosRegisterComponent } from './pages/polos/polos-register/polos-register.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertService } from './service/alert/alert.service';
import { ValidateBrService } from 'angular-validate-br';
import { ReactiveFormsModule } from '@angular/forms';
import { CepComponent } from './pages/cep/cep.component';
import { CepService } from './service/cep/cep.service';
import { NgxMaskModule } from 'ngx-mask';
import {MatSelectModule} from '@angular/material/select';
import {NgxCurrencyModule } from 'ngx-currency';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PolosTableComponent,
    PolosRegisterComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSelectModule,
    NgxMaskModule.forRoot(),
    NgxCurrencyModule,
    BrowserAnimationsModule
  ],
  providers: [IBusinessService, AlertService, ValidateBrService, CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
