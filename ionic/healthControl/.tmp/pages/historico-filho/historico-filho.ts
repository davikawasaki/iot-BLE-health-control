import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the HistoricoFilho page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-historico-filho',
  templateUrl: 'historico-filho.html'
})

export class HistoricoFilho {

  bpm: String; data: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bpm = this.navParams.get('bpm');
    this.data = this.navParams.get('data');
  }

  /*** Adaptation function to split timestamp received from server ***/
  mySplit (string, nb) {
    var array = string.split(' ');
    return array[nb];
  }
}
