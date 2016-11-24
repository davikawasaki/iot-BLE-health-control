import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '../device/device';
import { BluetoothSerial } from 'ionic-native';
/*
  Generated class for the Bluetooth page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Bluetooth = (function () {
    function Bluetooth(navCtrl) {
        this.navCtrl = navCtrl;
        this.devicesList = [];
        this.isScanning = false;
    }
    Object.defineProperty(Bluetooth, "parameters", {
        get: function () {
            return [[NavController]];
        },
        enumerable: true,
        configurable: true
    });
    // goToOtherPage() : void{
    //   //push another page onto the history stack
    //   //causing the nav controller to animate the new page in
    //   this.navCtrl.push(Medico);
    // }
    Bluetooth.prototype.startScanning = function () {
        var _this = this;
        console.log("Scanning Started");
        this.devicesList = [];
        this.isScanning = true;
        BluetoothSerial.discoverUnpaired().then(function (res) {
            console.log(res);
            for (var key in res) {
                if (_this.emptyName(res[key].name)) {
                    res[key].name = 'Sem nome';
                }
            }
            _this.devicesList = res;
            _this.isScanning = false;
        }).catch(function (res) {
            console.log('Error in fetching bluetooth data');
            _this.isScanning = false;
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
    };
    Bluetooth.prototype.connectToDevice = function (device) {
        var _this = this;
        console.log("Connect To Device");
        JSON.stringify(device);
        console.log(JSON.stringify(device));
        BluetoothSerial.connect(device.address).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.push(Device, {
                device: device,
                connected: true
            });
        }, function (error) {
            console.log("Error in connecting to device");
        });
        // BluetoothSerial.isConnected().then(res => {
        //   console.log(res);
        //   this.navCtrl.push(device, {
        //     device: device
        //   });
        // }).catch(res => {
        //   console.log('Error in connecting to device');
        //   console.log(res);
        // });
    };
    Bluetooth.prototype.emptyName = function (name) {
        if (name == null || name == undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    Bluetooth.decorators = [
        { type: Component, args: [{
                    selector: 'page-bluetooth',
                    templateUrl: 'bluetooth.html'
                },] },
    ];
    /** @nocollapse */
    Bluetooth.ctorParameters = [
        { type: NavController, },
    ];
    return Bluetooth;
}());
