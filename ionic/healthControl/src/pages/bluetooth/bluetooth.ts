import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { BLE } from 'ionic-native';
// import { Device } from '../device/device';
// import { HomePage } from '../home/home';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../services/DeviceService';

/*
  Generated class for the Bluetooth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

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
    this.scan = 'Escanear Dispositivos';
    this.color = 'secondary';
    this.request = navParams.get('request');
    if(this.request) {
      this.startScanning();
    }
  }
  static get parameters() {
    return [[NavController]];
  }
  // goToOtherPage() : void{
  //   //push another page onto the history stack
  //   //causing the nav controller to animate the new page in
  //   this.navCtrl.push(Medico);
  // }

  startScanning() {
    console.log("Scanning Started");
    this.devicesList = [];
    this.scan = 'Escaneando';
    this.color = 'danger';
    this.isScanning = true;
    BluetoothSerial.discoverUnpaired().then(res => {
      console.log(res);
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
      console.log('Error in fetching bluetooth data');
      this.isScanning = false;
      this.scan = 'Escanear Novamente';
      this.color = 'secondary';
    });
    // BLE.startScan([]).subscribe(device => {
    //   this.devicesList.push(device);
    //   console.log(device);
    // }, error => {
    //   console.log("error in fetching data");
    // });

    // setTimeout(() => {
    //   BLE.stopScan().then(() => {
    //     console.log("Scanning has stopped");
    //     console.log(this.devicesList);
    //     console.log(JSON.stringify(this.devicesList));
    //     this.isScanning = false;
    //   });
    // }, 9000);
  }

  connectToDevice(device) {
    console.log("Connect To Device");
    JSON.stringify(device);
    console.log(JSON.stringify(device));
    // Store the subscription inside deviceService service
    var connection = BluetoothSerial.connect(device.address).subscribe(res => {
      console.log(res);
      this.navCtrl.pop();
      this.deviceService.setConnected(true);
      // this.navCtrl.push(Device, {
      //   device: device,
      //   connected: true
      // });
    }, error => {
      console.log("Error in connecting to device");
    });
    this.deviceService.setConnection(connection);
    // BluetoothSerial.isConnected().then(res => {
    //   console.log(res);
    //   this.navCtrl.push(device, {
    //     device: device
    //   });
    // }).catch(res => {
    //   console.log('Error in connecting to device');
    //   console.log(res);
    // });
  }

  emptyName(name){
    if(name == null || name == undefined) {
      return true;
    } else {
      return false;
    }
  }
}
