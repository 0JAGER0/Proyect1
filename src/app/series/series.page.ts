import { Component, OnInit, ViewChild } from '@angular/core';
import { SeriesService } from './series.service';
import { StorageService, Item } from '../service/storage.service';
import { Platform, ToastController,IonList } from '@ionic/angular';


@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  items: Item [] =[];

  newItem: Item = <Item>{};

  @ViewChild('mylist')mylist: IonList;

  private ser = []

  constructor(private servicios : SeriesService, private storageService: StorageService, private plt: Platform, private toastController: ToastController) { 
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  //CREAR
  addItem(){
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast('item agregado!')
      this.loadItems();

    });
  }

  //LEER
  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  //actualizar
  updateItem(item: Item){
    item.title = `actualizado: ${item.title}`;
    item.modified = Date.now();

    this.storageService.updateItem(item).then(item =>{
      this.showToast('item actualizado!');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  //borrar
  deleteItem(item: Item){
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('item borrado');
      this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  // helper
  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
    this.ser = this.servicios.getSeries();
  }

}
