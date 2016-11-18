import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Configuracao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Configuracao = (function () {
    function Configuracao(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Configuracao.prototype.ionViewDidLoad = function () {
        console.log('Hello Configuracao Page');
    };
    Configuracao.decorators = [
        { type: Component, args: [{
                    selector: 'page-configuracao',
                    templateUrl: 'configuracao.html'
                },] },
    ];
    /** @nocollapse */
    Configuracao.ctorParameters = [
        { type: NavController, },
    ];
    return Configuracao;
}());
