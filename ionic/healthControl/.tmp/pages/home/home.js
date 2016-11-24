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
    HomePage.prototype.makeGetRequest = function () {
        var _this = this;
        this.http.get("https://httpbin.org/ip").map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
            _this.bpm = res.origin;
        });
        //});
        console.log(this.bpm);
    };
    HomePage.prototype.connectBluetooth = function () {
        var _this = this;
        BluetoothSerial.isConnected().then(function (res) {
            if (!_this.connected) {
                _this.status = 'Desconectar';
                _this.connected = true;
                _this.deviceService.setConnected(_this.connected);
                _this.color = 'danger';
                console.log("ler novamente");
                _this.pullBPM();
            }
            else {
                _this.isReading = false;
                console.log("desconectou");
                _this.deviceService.getConnection().unsubscribe();
                _this.status = 'Ler valores';
                _this.connected = false;
                _this.deviceService.setConnected(_this.connected);
                _this.color = 'secondary';
            }
        }, function (error) {
            console.log("Not connected");
            _this.connected = false;
            _this.deviceService.setConnected(_this.connected);
            _this.color = 'secondary';
            _this.navCtrl.push(Bluetooth, {
                request: true
            });
        });
    };
    HomePage.prototype.pullBPM = function () {
        var _this = this;
        this.status = 'Desconectar';
        this.color = 'danger';
        this.isReading = true;
        BluetoothSerial.clear().then(function (res) {
            console.log("buffer cleared");
        });
        setTimeout(function () {
            BluetoothSerial.read().then(function (res) {
                var result = res.split('\n');
                console.log(result);
                console.log("reading data");
                _this.bpm = result[0];
                for (var key in result) {
                    if (result[key] != '') {
                        _this.listBPM.push(result[key]);
                    }
                }
                console.log(_this.listBPM);
                _this.isReading = false;
            });
            BluetoothSerial.clear().then(function (res) {
                console.log("buffer cleared");
            });
        }, 5000);
        console.log("parou de ler");
        this.status = 'Ler valores';
        this.connected = false;
        this.deviceService.setConnected(this.connected);
        this.color = 'secondary';
    };
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
