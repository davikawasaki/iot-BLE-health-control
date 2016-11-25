// import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
// import { BluetoothSerial } from 'ionic-native';
//
// @Component({
//   selector: 'page-device',
//   templateUrl: 'device.html'
// })
// export class Device {
//
//   device: any;
//   connected: boolean; isScanning: boolean;
//   characteristics: Array<any>;
//   valueBPM: number;
//
//   constructor(public navCtrl: NavController, public params:NavParams) {
//     this.device = params.get('device');
//     this.connected = params.get('connected');
//     this.isScanning = false;
//     // this.connect(this.device.id);
//   }
//
//   static get parameters() {
//     return [[NavParams],[NavController]];
//   }
//
//   // Implement a timeout and show one value each 10s
//   scan() {
//     if(this.connected) {
//       BluetoothSerial.read().then(res => {
//         console.log(res);
//         this.valueBPM = res;
//       });
//     }
//     this.isScanning = false;
//   }
// }
