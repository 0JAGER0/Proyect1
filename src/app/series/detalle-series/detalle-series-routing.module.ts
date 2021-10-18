import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSeriesPage } from './detalle-series.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSeriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSeriesPageRoutingModule {}
