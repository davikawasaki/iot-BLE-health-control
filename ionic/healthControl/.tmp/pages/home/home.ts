import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
    /*** Getting connected status from device service ***/
    this.connected = deviceService.getConnected();
    this.color = 'secondary';
    this.bpm = '0';
    this.isReading = false;
  }

  static get parameters() {
    return [[Http]];
  }

  /*** Function to toggle and connect bluetooth device ***/
  connectBluetooth() {
    BluetoothSerial.isConnected().then(res => {
      if(!this.connected) {
        this.status = 'Desconectar';
        this.connected = true;
        this.deviceService.setConnected(this.connected);
        this.color = 'danger';
        /*** Call, after verifying connection, function to pull BPM data from bluetooth device ***/
        this.pullBPM();
      }
      else {
        this.isReading = false;
        console.log("Disconnected!");
        /*** Disconect from bluetooth device unsubscribing the Observable ***/
        this.deviceService.getConnection().unsubscribe();
        this.status = 'Ler valores';
        this.connected = false;
        this.deviceService.setConnected(this.connected);
        this.color = 'secondary';
      }
    }, error => {
      /*** If bluetooth serial isn't paired, it pushes to Bluetooth page and start scanning to search for HC-05 ***/
      console.log("Not connected, pair with the bluetooth device!");
      this.connected = false;
      this.deviceService.setConnected(this.connected);
      this.color = 'secondary';
      this.navCtrl.push(Bluetooth, {
        request: true
      });
    });
  }

  /*** Function to pull BPM data from bluetooth serial device ***/
  pullBPM() {
    this.listBPM = [];
    this.isReading = true;
    /*** Clear buffer from bluetooth serial ***/
    BluetoothSerial.clear().then(res => {});
    /*** Five seconds to pull values from bluetooth ***/
    setTimeout(() => {
      BluetoothSerial.read().then(res => {
        var result = res.split('\n');
        this.bpm = result[0];
        for(var key in result) {
          if(result[key] != '') {
            /*** Push BPM values to an array that's going to be pushed to server ***/
            this.listBPM.push(result[key]);
          }
        }
        /*** Function to submit array data values to server ***/
        this.submit();
        this.isReading = false;
      });
      /*** Clear buffer from bluetooth serial ***/
      BluetoothSerial.clear().then(res => {});
    }, 5000);
    this.status = 'Ler valores';
    this.connected = false;
    this.deviceService.setConnected(this.connected);
    this.color = 'secondary';
  }

  /*** Function to start pulling BPM data from bluetooth device after pairing with HC-05 ***/
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

  /*** Function to send data to server ***/
  submit() {
    for (var item of this.listBPM) { // BPM data array
        var link = 'http://healthcontrol.luiseduardoluz.com/sendData.php?bpm='+item+'&sensor=1'; // Default sensor value is 1
        var data = JSON.stringify({bpm: "80", sensor: "1"});  // Ignore these values
        this.http.post(link, data).subscribe(data => {
          console.log("Success sending data");
        }, error => {
          console.log("Error in sending data");
        });
      }
  }
}
