import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Bluetooth } from '../bluetooth/bluetooth';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../services/DeviceService';
export var HomePage = (function () {
    function HomePage(http, navCtrl, deviceService) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.deviceService = deviceService;
        this.http = http;
        this.listBPM = [];
        this.status = 'Ler valores';
        /*** Getting connected status from device service ***/
        this.connected = deviceService.getConnected();
        this.color = 'secondary';
        this.bpm = '0';
        this.isReading = false;
    }
    Object.defineProperty(HomePage, "parameters", {
        get: function () {
            return [[Http]];
        },
        enumerable: true,
        configurable: true
    });
    /*** Function to toggle and connect bluetooth device ***/
    HomePage.prototype.connectBluetooth = function () {
        var _this = this;
        BluetoothSerial.isConnected().then(function (res) {
            if (!_this.connected) {
                _this.status = 'Desconectar';
                _this.connected = true;
                _this.deviceService.setConnected(_this.connected);
                _this.color = 'danger';
                /*** Call, after verifying connection, function to pull BPM data from bluetooth device ***/
                _this.pullBPM();
            }
            else {
                _this.isReading = false;
                console.log("Disconnected!");
                /*** Disconect from bluetooth device unsubscribing the Observable ***/
                _this.deviceService.getConnection().unsubscribe();
                _this.status = 'Ler valores';
                _this.connected = false;
                _this.deviceService.setConnected(_this.connected);
                _this.color = 'secondary';
            }
        }, function (error) {
            /*** If bluetooth serial isn't paired, it pushes to Bluetooth page and start scanning to search for HC-05 ***/
            console.log("Not connected, pair with the bluetooth device!");
            _this.connected = false;
            _this.deviceService.setConnected(_this.connected);
            _this.color = 'secondary';
            _this.navCtrl.push(Bluetooth, {
                request: true
            });
        });
    };
    /*** Function to pull BPM data from bluetooth serial device ***/
    HomePage.prototype.pullBPM = function () {
        var _this = this;
        this.listBPM = [];
        this.isReading = true;
        /*** Clear buffer from bluetooth serial ***/
        BluetoothSerial.clear().then(function (res) { });
        /*** Five seconds to pull values from bluetooth ***/
        setTimeout(function () {
            BluetoothSerial.read().then(function (res) {
                var result = res.split('\n');
                _this.bpm = result[0];
                for (var key in result) {
                    if (result[key] != '') {
                        /*** Push BPM values to an array that's going to be pushed to server ***/
                        _this.listBPM.push(result[key]);
                    }
                }
                /*** Function to submit array data values to server ***/
                _this.submit();
                _this.isReading = false;
            });
            /*** Clear buffer from bluetooth serial ***/
            BluetoothSerial.clear().then(function (res) { });
        }, 5000);
        this.status = 'Ler valores';
        this.connected = false;
        this.deviceService.setConnected(this.connected);
        this.color = 'secondary';
    };
    /*** Function to start pulling BPM data from bluetooth device after pairing with HC-05 ***/
    HomePage.prototype.ionViewDidEnter = function () {
        this.connected = this.deviceService.getConnected();
        if (this.connected) {
            this.status = 'Desconectar';
            this.color = 'danger';
            this.pullBPM();
        }
        else {
            this.status = 'Ler valores';
            this.color = 'secondary';
        }
    };
    /*** Function to send data to server ***/
    HomePage.prototype.submit = function () {
        for (var _i = 0, _a = this.listBPM; _i < _a.length; _i++) {
            var item = _a[_i];
            var link = 'http://healthcontrol.luiseduardoluz.com/sendData.php?bpm=' + item + '&sensor=1'; // Default sensor value is 1
            var data = JSON.stringify({ bpm: "80", sensor: "1" }); // Ignore these values
            this.http.post(link, data).subscribe(function (data) {
                console.log("Success sending data");
            }, function (error) {
                console.log("Error in sending data");
            });
        }
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: Http, },
        { type: NavController, },
        { type: DeviceService, },
    ];
    return HomePage;
}());
