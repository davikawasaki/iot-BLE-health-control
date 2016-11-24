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

  status: String; color: String; bpm: String;
  connected: boolean; isReading: boolean;
  listBPM: Array<String>;

  constructor(private http:Http, public navCtrl: NavController, private deviceService: DeviceService) {
    this.http = http;
    this.listBPM = [];
    this.status = 'Ler valores';
    this.connected = deviceService.getConnected();
    this.color = 'secondary';
    this.bpm = '0';
    this.isReading = false;
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
        console.log("ler novamente");
        this.pullBPM();
      }
      else {
        this.isReading = false;
        console.log("desconectou");
        this.deviceService.getConnection().unsubscribe();
        this.status = 'Ler valores';
        this.connected = false;
        this.deviceService.setConnected(this.connected);
        this.color = 'secondary';
      }
    }, error => {
      console.log("Not connected");
      this.connected = false;
      this.deviceService.setConnected(this.connected);
      this.color = 'secondary';
      this.navCtrl.push(Bluetooth, {
        request: true
      });
    });
  }

  pullBPM() {
    this.listBPM = [];
    this.isReading = true;
    BluetoothSerial.clear().then(res => {
      console.log("buffer cleared");
    });
    setTimeout(() => {
      BluetoothSerial.read().then(res => {
        var result = res.split('\n');
        console.log(result);
        console.log("reading data");
        this.bpm = result[0];
        for(var key in result) {
          if(result[key] != '') {
            this.listBPM.push(result[key]);
          }
        }
        console.log(this.listBPM);
        this.isReading = false;
      });
      BluetoothSerial.clear().then(res => {
        console.log("buffer cleared");
      });
    }, 5000);
    console.log("parou de ler");
    this.status = 'Ler valores';
    this.connected = false;
    this.deviceService.setConnected(this.connected);
    this.color = 'secondary';
  }

  ionViewDidEnter() {
    this.connected = this.deviceService.getConnected();
    if(this.connected) {
      this.status = 'Desconectar';
      this.color = 'danger';
      this.pullBPM();
    } else {
      this.status = 'Ler valores';
      this.color = 'secondary';
    }
  }
}
