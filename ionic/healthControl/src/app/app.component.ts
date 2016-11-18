import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Configuracao } from '../pages/configuracao/configuracao';
import { Historico } from '../pages/historico/historico';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Medico } from '../pages/medico/medico';
import { Bluetooth } from '../pages/bluetooth/bluetooth';
//import { HistoricoFilho } from '../pages/historico-filho/historico-filho';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;
  Medico=Medico;
  constructor(platform: Platform) {
    this.pages=[
      {component:HomePage, title:'Home',icon: 'home'},
      {component:Medico, title:'Medico',icon: 'heart'},
      {component:Historico, title:'Historico',icon: 'stats'},
      {component:Configuracao, title:'Configuração',icon: 'options'},
      {component:Bluetooth, title:'Bluetooth',icon: 'bluetooth'},
      {component:Login, title:'Login',icon: 'log-in'}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page: any) : void{
    this.rootPage=page.component;
  }

}
