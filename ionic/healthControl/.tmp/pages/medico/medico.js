import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Medico page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Medico = (function () {
    function Medico(navCtrl) {
        this.navCtrl = navCtrl;
    }
    //ionViewDidLoad() {
    //console.log('Hello Medico Page');
    //}
    Medico.decorators = [
        { type: Component, args: [{
                    selector: 'page-medico',
                    templateUrl: 'medico.html'
                },] },
    ];
    /** @nocollapse */
    Medico.ctorParameters = [
        { type: NavController, },
    ];
    return Medico;
}());
