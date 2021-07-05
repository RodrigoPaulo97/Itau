import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolosTableComponent } from './pages/polos/polos-table/polos-table.component';

const routes: Routes = [
  { path: '', component: PolosTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
