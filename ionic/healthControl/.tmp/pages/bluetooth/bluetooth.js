import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../services/DeviceService';
export var Bluetooth = (function () {
    function Bluetooth(navCtrl, navParams, deviceService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deviceService = deviceService;
        this.devicesList = [];
        this.isScanning = false;
        /*** Setting name and color dynamically to button ***/
        this.scan = 'Escanear Dispositivos';
        this.color = 'secondary';
        this.request = navParams.get('request');
        /*** Verify if another page requested a scanning ***/
        if (this.request) {
            this.startScanning();
        }
    }
    Object.defineProperty(Bluetooth, "parameters", {
        get: function () {
            return [[NavController]];
        },
        enumerable: true,
        configurable: true
    });
    /*** Function to discover unpaired bluetooth devices ***/
    Bluetooth.prototype.startScanning = function () {
        var _this = this;
        console.log("Scanning Started");
        this.devicesList = [];
        this.scan = 'Escaneando';
        this.color = 'danger';
        this.isScanning = true;
        BluetoothSerial.discoverUnpaired().then(function (res) {
            /*** Verification to set unnamed value to device that doesn't have a name ***/
            for (var key in res) {
                if (_this.emptyName(res[key].name)) {
                    res[key].name = 'Sem nome';
                }
            }
            _this.devicesList = res;
            _this.isScanning = false;
            _this.scan = 'Escanear Novamente';
            _this.color = 'secondary';
        }).catch(function (res) {
            console.log('Error in fetching bluetooth devices');
            _this.isScanning = false;
            _this.scan = 'Escanear Novamente';
            _this.color = 'secondary';
        });
    };
    /*** Start connection to device and sending back to home page to start collecting data ***/
    Bluetooth.prototype.connectToDevice = function (device) {
        var _this = this;
        console.log("Connect To Device");
        JSON.stringify(device);
        console.log(JSON.stringify(device));
        // Store the subscription inside deviceService service
        var connection = BluetoothSerial.connect(device.address).subscribe(function (res) {
            console.log(res);
            _this.navCtrl.pop();
            _this.deviceService.setConnected(true);
        }, function (error) {
            console.log("Error in connecting to device");
        });
        this.deviceService.setConnection(connection);
    };
    /*** Function to verify device name null or undefined ***/
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
        { type: NavParams, },
        { type: DeviceService, },
    ];
    return Bluetooth;
}());
