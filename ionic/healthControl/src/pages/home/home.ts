import { Component } from '@angular/core';
import { Medico } from '../medico/medico';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bpm = 60;
  constructor(public navCtrl: NavController) {

  }
  goToOtherPage() : void{
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Medico);
  }

}
