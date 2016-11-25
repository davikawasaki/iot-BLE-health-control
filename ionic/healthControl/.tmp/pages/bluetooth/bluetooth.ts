import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../services/DeviceService';

@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html'
})

export class Bluetooth {

  devicesList: Array<any>;
  isScanning: boolean; request: boolean;
  scan: String; color: String;
  platform: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private deviceService: DeviceService) {
    this.devicesList = [];
    this.isScanning = false;
    /*** Setting name and color dynamically to button ***/
    this.scan = 'Escanear Dispositivos';
    this.color = 'secondary';
    this.request = navParams.get('request');
    /*** Verify if another page requested a scanning ***/
    if(this.request) {
      this.startScanning();
    }
  }

  static get parameters() {
    return [[NavController]];
  }

  /*** Function to discover unpaired bluetooth devices ***/
  startScanning() {
    console.log("Scanning Started");
    this.devicesList = [];
    this.scan = 'Escaneando';
    this.color = 'danger';
    this.isScanning = true;
    BluetoothSerial.discoverUnpaired().then(res => {
      /*** Verification to set unnamed value to device that doesn't have a name ***/
      for(var key in res) {
        if(this.emptyName(res[key].name)) {
          res[key].name = 'Sem nome';
        }
      }
      this.devicesList = res;
      this.isScanning = false;
      this.scan = 'Escanear Novamente';
      this.color = 'secondary';
    }).catch(res => {
      console.log('Error in fetching bluetooth devices');
      this.isScanning = false;
      this.scan = 'Escanear Novamente';
      this.color = 'secondary';
    });
  }

  /*** Start connection to device and sending back to home page to start collecting data ***/
  connectToDevice(device) {
    console.log("Connect To Device");
    JSON.stringify(device);
    console.log(JSON.stringify(device));
    // Store the subscription inside deviceService service
    var connection = BluetoothSerial.connect(device.address).subscribe(res => {
      console.log(res);
      this.navCtrl.pop();
      this.deviceService.setConnected(true);
    }, error => {
      console.log("Error in connecting to device");
    });
    this.deviceService.setConnection(connection);
  }

  /*** Function to verify device name null or undefined ***/
  emptyName(name){
    if(name == null || name == undefined) {
      return true;
    } else {
      return false;
    }
  }
}
