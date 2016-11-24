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
        this.hora = this.navParams.get('hora');
        this.data = this.navParams.get('data');
        //let bpm= this.navParams.get('param1');
    }
    HistoricoFilho.prototype.ionViewDidLoad = function () {
        console.log('Hello HistoricoFilho Page');
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
