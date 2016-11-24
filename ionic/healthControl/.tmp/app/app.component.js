import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Historico } from '../pages/historico/historico';
import { HomePage } from '../pages/home/home';
import { Bluetooth } from '../pages/bluetooth/bluetooth';
import { BluetoothSerial } from 'ionic-native';
import { DeviceService } from '../pages/services/DeviceService';
//import { HistoricoFilho } from '../pages/historico-filho/historico-filho';
export var MyApp = (function () {
    // Medico=Medico;
    function MyApp(platform, deviceService) {
        this.deviceService = deviceService;
        this.rootPage = HomePage;
        this.pages = [
            { component: HomePage, title: 'Home', icon: 'home' },
            // {component:Medico, title:'Medico',icon: 'heart'},
            { component: Historico, title: 'Historico', icon: 'stats' },
            // {component:Configuracao, title:'Configuração',icon: 'options'},
            { component: Bluetooth, title: 'Bluetooth', icon: 'bluetooth' },
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            // Enable bluetooth once the app is loaded
            BluetoothSerial.isEnabled().then(function (res) {
                // Do nothing, bluetooth is connected
            }).catch(function (res) {
                // Turn on bluetooth
                BluetoothSerial.enable();
            });
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.component;
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html',
                    providers: [DeviceService]
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: DeviceService, },
    ];
    return MyApp;
}());
