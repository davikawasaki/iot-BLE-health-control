import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoricoFilho } from '../historico-filho/historico-filho';
/*
  Generated class for the Historico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Historico = (function () {
    function Historico(navCtrl) {
        this.navCtrl = navCtrl;
        this.listaHistorico = [
            { bpm: '73', data: '1990-02-19', hora: '15:30' },
            { bpm: '90', data: '1990-03-13', hora: '16:00' },
            { bpm: '65', data: '1990-04-10', hora: '12:30' },
            { bpm: '92', data: '1990-05-05', hora: '20:30' },
            { bpm: '150', data: '1990-07-14', hora: '5:30' },
            { bpm: '78', data: '1990-12-30', hora: '10:45' }
        ];
    }
    Historico.prototype.openPage = function (aux) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(HistoricoFilho, {
            bpm: aux.bpm, hora: aux.hora, data: aux.data
        });
    };
    Historico.prototype.ionViewDidLoad = function () {
        console.log('Hello Historico Page');
    };
    Historico.decorators = [
        { type: Component, args: [{
                    selector: 'page-historico',
                    templateUrl: 'historico.html'
                },] },
    ];
    /** @nocollapse */
    Historico.ctorParameters = [
        { type: NavController, },
    ];
    return Historico;
}());
