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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //let bpm= this.navParams.get('param1');
  }
  bpm=this.navParams.get('bpm');
  hora=this.navParams.get('hora');
  data=this.navParams.get('data');
  ionViewDidLoad() {
    console.log('Hello HistoricoFilho Page');
  }

}
