import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Configuracao } from '../pages/configuracao/configuracao';
import { Historico } from '../pages/historico/historico';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { Medico } from '../pages/medico/medico';
//import { HistoricoFilho } from '../pages/historico-filho/historico-filho';
export var MyApp = (function () {
    function MyApp(platform) {
        this.rootPage = HomePage;
        this.Medico = Medico;
        this.pages = [
            { component: HomePage, title: 'Home', icon: 'home' },
            { component: Medico, title: 'Medico', icon: 'heart' },
            { component: Historico, title: 'Historico', icon: 'stats' },
            { component: Configuracao, title: 'Configuração', icon: 'options' },
            { component: Login, title: 'Login', icon: 'log-in' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.rootPage = page.component;
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    return MyApp;
}());
