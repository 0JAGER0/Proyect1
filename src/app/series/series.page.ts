import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesService } from './series.service';



@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  private ser =  []
  constructor(private servicios: SeriesService) { }


  ngOnInit() {
    this.ser = this.servicios.getSeries();
   
  }

}
