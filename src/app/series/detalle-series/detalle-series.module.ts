import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSeriesPageRoutingModule } from './detalle-series-routing.module';

import { DetalleSeriesPage } from './detalle-series.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSeriesPageRoutingModule
  ],
  declarations: [DetalleSeriesPage]
})
export class DetalleSeriesPageModule {}
