import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the HistoricoFilho page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var HistoricoFilho = (function () {
    function HistoricoFilho(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bpm = this.navParams.get('bpm');
        this.data = this.navParams.get('data');
    }
    /*** Adaptation function to split timestamp received from server ***/
    HistoricoFilho.prototype.mySplit = function (string, nb) {
        var array = string.split(' ');
        return array[nb];
    };
    HistoricoFilho.decorators = [
        { type: Component, args: [{
                    selector: 'page-historico-filho',
                    templateUrl: 'historico-filho.html'
                },] },
    ];
    /** @nocollapse */
    HistoricoFilho.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    return HistoricoFilho;
}());
