import { Component } from '@angular/core';
// import { Medico } from '../medico/medico';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { Bluetooth } from '../bluetooth/bluetooth';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../services/DeviceService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bpm: number;
  status: String; color: String;
  connected: boolean;

  constructor(private http:Http, public navCtrl: NavController, private deviceService: DeviceService) {
    this.http = http;
    this.status = 'Conectar';
    this.connected = deviceService.getConnected();
    this.color = 'secondary';
    this.bpm = 0;
  }

  static get parameters() {
    return [[Http]];
  }

  makeGetRequest() {
    this.http.get("https://httpbin.org/ip").map(res => res.json()).subscribe(res => {
      console.log(res)
      this.bpm = res.origin
    });
  //});
    console.log(this.bpm);
  }

  connectBluetooth() {
    BluetoothSerial.isConnected().then(res => {
      if(!this.connected) {
        this.status = 'Desconectar';
        this.connected = true;
        this.deviceService.setConnected(this.connected);
        this.color = 'danger';
      }
      else {
        console.log("desconectou");
        this.deviceService.getConnection().unsubscribe();
        this.status = 'Conectar';
        this.connected = false;
        this.deviceService.setConnected(this.connected);
        this.color = 'secondary';
      }
    }, error => {
      console.log("Not connected");
      this.connected = false;
      this.deviceService.setConnected(this.connected);
      this.color = 'secondary';
      this.navCtrl.push(Bluetooth);
    });
  }

  pullBPM() {
    BluetoothSerial.read().then(res => {
      console.log(res);
      this.bpm = res[0];
    });
  }

  ionViewDidEnter() {
    this.connected = this.deviceService.getConnected();
    if(this.connected) {
      this.status = 'Desconectar';
      this.color = 'danger';
      this.pullBPM();
    } else {
      this.status = 'Conectar';
      this.color = 'secondary';
    }
  }
}
