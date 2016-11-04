import { Component } from '@angular/core';
import { Medico } from '../medico/medico';
import { NavController } from 'ionic-angular';
import { DevicePage } from '../device/device';
import { BLE } from 'ionic-native';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})

export class Bluetooth {

  devicesList: Array<{name: string, id: string, rssi: string}>;
  isScanning: boolean;

  constructor(public navCtrl: NavController) {
    this.devicesList = [
      {name:'HC-05', id:'20:16:5040:5024', rssi:'-55dB'},
      {name:'JRO4 EBC', id:'20:12:1242:0595', rssi:'-45dB'},
      {name:'Moto-Cel', id:'145:04:1294:5857', rssi:'-5dB'},
      {name:'HP Pavillion', id:'25:15:1911:0555', rssi:'-17dB'}
    ];
    this.isScanning = false;
  }
  static get parameters() {
    return [[NavController]];
  }
  goToOtherPage() : void{
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(Medico);
  }
  startScanning() {
    console.log("Scanning Started");
    this.devicesList = [];
    this.isScanning = true;
    BLE.startScan([]).subscribe(device => {
      // this.devices.push(device);
    });

    setTimeout(() => {
      BLE.stopScan().then(() => {
        console.log("Scanning has stopped");
        console.log(JSON.stringify(this.devicesList));
        this.isScanning = false;
      });
    }, 3000);
  }

  connectToDevice(device) {
    console.log("Connect To Device");
    console.log(JSON.stringify(device));
    // this.navCtrl.push(DevicePage, {
    //   device: device
    // });
  }
}
