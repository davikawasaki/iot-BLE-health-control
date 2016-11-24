import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from 'ionic-native';

/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-device',
  templateUrl: 'device.html'
})
export class Device {

  device: any;
  connected: boolean; isScanning: boolean;
  characteristics: Array<any>;
  valueBPM: number;

  constructor(public navCtrl: NavController, public params:NavParams) {
    this.device = params.get('device');
    this.connected = params.get('connected');
    this.isScanning = true;
    // this.connect(this.device.id);
  }

  static get parameters() {
    return [[NavParams],[NavController]];
  }

  // connect(deviceID) {
  //   this.characteristics = [];
  //
  //   BLE.connect(deviceID).subscribe(peripheralData => {
  //     console.log(peripheralData.characteristics);
  //     this.characteristics = peripheralData.characteristics;
  //     this.connecting = false;
  //   },
  //
  //   peripheralData => {
  //     console.log('disconnected');
  //   });
  // }

  // connectToCharacteristic(deviceID,characteristic) {
  //   console.log('Connect To Characteristic');
  //   console.log(deviceID);
  //   console.log(characteristic);
  // }

  scan() {
    if(this.connected) {
      BluetoothSerial.read().then(res => {
        console.log(res);
        this.valueBPM = res;
      });
    }
    this.isScanning = false;
  }

  // ionViewDidLoad() {
  //   console.log('Hello Device Page');
  // }

}
