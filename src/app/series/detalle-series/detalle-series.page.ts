import { Component, OnInit } from '@angular/core';
import {serie} from '../serie.model';
import {ActivatedRoute} from '@angular/router';
import {SeriesService} from '../series.service';

@Component({
  selector: 'app-detalle-series',
  templateUrl: './detalle-series.page.html',
  styleUrls: ['./detalle-series.page.scss'],
})
export class DetalleSeriesPage implements OnInit {
  ser : serie
  constructor(private rutas: ActivatedRoute, private servicio: SeriesService) { }

  ngOnInit() {
    this.rutas.paramMap.subscribe(paraMap => {
      const idRecibida = paraMap.get('idSerie')

      this.ser = this.servicio.getSerie(idRecibida);
      console.log(this.ser)

    })
  }

}
