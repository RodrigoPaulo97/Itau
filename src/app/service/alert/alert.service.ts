import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) { }

  creat(message: string, type: 'success' | 'error' | 'warning') {
    this._snackBar.open(message, 'x', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      // duration: 3000,
      panelClass: ['alert',`alert-${type}`]
    })
  }
}
