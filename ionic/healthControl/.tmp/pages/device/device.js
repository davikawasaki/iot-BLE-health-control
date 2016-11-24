import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from 'ionic-native';
/*
  Generated class for the Device page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Device = (function () {
    function Device(navCtrl, params) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.device = params.get('device');
        this.connected = params.get('connected');
        this.isScanning = true;
        // this.connect(this.device.id);
    }
    Object.defineProperty(Device, "parameters", {
        get: function () {
            return [[NavParams], [NavController]];
        },
        enumerable: true,
        configurable: true
    });
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
    Device.prototype.scan = function () {
        var _this = this;
        if (this.connected) {
            BluetoothSerial.read().then(function (res) {
                console.log(res);
                _this.valueBPM = res;
            });
        }
        this.isScanning = false;
    };
    // ionViewDidLoad() {
    //   console.log('Hello Device Page');
    // }
    Device.decorators = [
        { type: Component, args: [{
                    selector: 'page-device',
                    templateUrl: 'device.html'
                },] },
    ];
    /** @nocollapse */
    Device.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return Device;
}());
