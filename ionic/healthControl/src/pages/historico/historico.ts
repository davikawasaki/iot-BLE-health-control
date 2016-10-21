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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Historico Page');
  }

}
