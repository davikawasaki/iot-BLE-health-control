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
        this.status = 'Conectar';
        this.connected = deviceService.getConnected();
        this.color = 'secondary';
        this.bpm = 0;
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
            }
            else {
                console.log("desconectou");
                _this.deviceService.getConnection().unsubscribe();
                _this.status = 'Conectar';
                _this.connected = false;
                _this.deviceService.setConnected(_this.connected);
                _this.color = 'secondary';
            }
        }, function (error) {
            console.log("Not connected");
            _this.connected = false;
            _this.deviceService.setConnected(_this.connected);
            _this.color = 'secondary';
            _this.navCtrl.push(Bluetooth);
        });
    };
    HomePage.prototype.pullBPM = function () {
        var _this = this;
        BluetoothSerial.read().then(function (res) {
            console.log(res);
            _this.bpm = res[0];
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.connected = this.deviceService.getConnected();
        if (this.connected) {
            this.status = 'Desconectar';
            this.color = 'danger';
            this.pullBPM();
        }
        else {
            this.status = 'Conectar';
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
