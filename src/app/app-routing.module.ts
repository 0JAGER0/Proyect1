import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleSeriesPageModule } from './series/detalle-series/detalle-series.module';
import { SeriesPageModule } from './series/series.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'acceso',
    loadChildren: () => import('./acceso/acceso.module').then( m => m.AccesoPageModule)
  },
  {
    path: 'tercera',
    loadChildren: () => import('./tercera/tercera.module').then( m => m.TerceraPageModule)
  },
  {
    path: 'series',
    children:[
      {
        path : '',
        loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)

      },
      {
        path: ':idSerie',
        loadChildren: () => import('./series/detalle-series/detalle-series.module').then(m => m.DetalleSeriesPageModule)



      }
    ]



    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
