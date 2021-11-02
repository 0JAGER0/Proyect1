import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MyServicioService } from '../my-servicio.service';
import { SeriesService } from './series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  private ser =  []
  nombre = "";
  telefono = "";
  rut ="";
  listado = [];
  constructor(private servicios: SeriesService, private crud: MyServicioService, private toast: ToastController) { }

 

  async agregar(txtRut:HTMLInputElement, txtNombre:HTMLInputElement, txtTelefono:HTMLInputElement)
  {

    if(txtRut.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El rut no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtNombre.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El nombre no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }

    else if(txtTelefono.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El telefono no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
      
    }
    else
    {
      const datos= [{"rut": txtRut.value,"nombre": txtNombre.value,
      "telefono": txtTelefono.value}];

      await this.crud.agregar(datos);

      const toast = await this.toast.create({
        message: 'Los datos fueron guardados',
        duration: 2000,
        color: "success",
        position: "middle"
      });
      toast.present();
      txtRut.value = "";
      txtNombre.value = "";
      txtTelefono.value = "";
    }
  

    this.nombre = "";

  }

  async buscar(txtRut:HTMLInputElement)
  {
    const valor = await this.crud.reascatar(txtRut.value);

    if (valor != null)
    {
      this.rut = valor[0].rut;
      this.nombre = valor[0].nombre;
      this.telefono = valor[0].telefono;
  
      txtRut.value = "";
      this.listado =[];
    }
    else
    {
      this.nombre = "";
      this.telefono = "";
      const toast = await this.toast.create({
        message: 'El rut no fue encontrado',
        duration: 2000,
        color: "danger",
        position: "middle"
      })
      toast.present();
    }


  }

  async eliminar()
  {
    let rutEliminar = this.rut
    if (rutEliminar.trim().length == 0)
    {

      const toast = await this.toast.create({
        message: 'El rut no fue especificado',
        duration: 2000,
        color: "danger",
        position: "middle"
      });
      toast.present();

    }
    else{
    const valor = await this.crud.reascatar(rutEliminar);
    if (valor == null)
      {
        const toast = await this.toast.create({
          message: 'El rut' + rutEliminar + ' no fue encontrado',
          duration: 2000,
          color: "danger",
          position: "middle"
        });
        toast.present();
        
      }
      else
      {
        this.crud.eliminar(rutEliminar)
        const toast = await this.toast.create({
          message: 'El rut' + rutEliminar + 'fue eliminado',
          duration: 2000,
          color: "danger",
          position: "middle"
        });
        toast.present();
      }
    }
    
    this.nombre = "";
    this.telefono = "";
  }

  async listar()
  {
    this.nombre = "";
    this.telefono = "";
    this.listado = this.crud.listar();
  }

  ngOnInit() {
    this.ser = this.servicios.getSeries();
   
  }


}
