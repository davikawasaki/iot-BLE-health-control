import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Configuracao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})
export class Configuracao {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Configuracao Page');
  }

}
