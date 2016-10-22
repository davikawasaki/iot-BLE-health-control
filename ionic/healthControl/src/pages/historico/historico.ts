import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Historico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html'
})
export class Historico {

  listaHistorico: Array<{bpm: string, data: any}>;

  constructor(public navCtrl: NavController) {

    this.listaHistorico=[
      {bpm:'73',data: '1990-02-19'},
      {bpm:'90',data: '1990-03-13'},
      {bpm:'65',data: '1990-04-10'},
      {bpm:'92',data: '1990-05-05'},
      {bpm:'150',data: '1990-07-14'},
      {bpm:'78',data: '1990-12-30'}
    ];


  }

  ionViewDidLoad() {
    console.log('Hello Historico Page');
  }

}
