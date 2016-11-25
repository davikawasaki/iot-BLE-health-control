import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Historico } from '../pages/historico/historico';
import { HomePage } from '../pages/home/home';
import { Bluetooth } from '../pages/bluetooth/bluetooth';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../pages/services/DeviceService';

@Component({
  templateUrl: 'app.html',
  providers: [DeviceService]
})
export class MyApp {
  pages: Array<{component: any, title: string, icon: string}>;
  rootPage = HomePage;
  constructor(platform: Platform, private deviceService: DeviceService) {
    this.pages=[
      {component:HomePage, title:'Home',icon: 'home'},
      {component:Historico, title:'Historico',icon: 'stats'},
      {component:Bluetooth, title:'Bluetooth',icon: 'bluetooth'},
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // Enable bluetooth once the app is loaded
      BluetoothSerial.isEnabled().then(res => {
        // Do nothing, bluetooth is connected
      }).catch(res => {
        // Turn on bluetooth
        BluetoothSerial.enable();
      });
    });
  }
  openPage(page: any) : void{
    this.rootPage=page.component;
  }
}
