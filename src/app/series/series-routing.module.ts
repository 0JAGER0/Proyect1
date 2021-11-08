import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeriesPage } from './series.page';

const routes: Routes = [
  {
    path: '',
    component: SeriesPage
  },
  {
    path: 'detalle-series',
    loadChildren: () => import('./detalle-series/detalle-series.module').then( m => m.DetalleSeriesPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1-routing.module').then( m => m.Test1PageRoutingModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2-routing.module').then( m => m.Test2PageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeriesPageRoutingModule {}
