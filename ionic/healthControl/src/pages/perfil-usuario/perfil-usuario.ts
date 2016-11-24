import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the PerfilUsuario page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-perfil-usuario',
  templateUrl: 'perfil-usuario.html'
})
export class PerfilUsuario {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello PerfilUsuario Page');
  }

}
