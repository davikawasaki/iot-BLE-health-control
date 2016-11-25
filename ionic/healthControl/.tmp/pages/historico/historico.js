import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoricoFilho } from '../historico-filho/historico-filho';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
export var Historico = (function () {
    function Historico(http, navCtrl) {
        var _this = this;
        this.http = http;
        this.navCtrl = navCtrl;
        this.http = http;
        this.isReading = true;
        var url = 'http://healthcontrol.luiseduardoluz.com/getData.php';
        /*** Getting history data from server ***/
        var res = this.http.get(url).map(function (res) { return JSON.parse(res.text(), _this.reviver); });
        res.subscribe(function (data) {
            _this.isReading = false;
            _this.listaHistorico = data;
        }, function (err) {
            _this.isReading = false;
            console.log("Error in fetching data!");
            console.log(err);
        });
    }
    /*** Function to replace - to / to iOS devices ***/
    Historico.prototype.reviver = function (key, value) {
        // if('timestamp' === key){
        //     //you can use any de-serialization algorithm here
        //     console.log(value);
        //     return new Date(value.replace(/-/g,"/"));
        // }
        return value;
    };
    /*** Redirect to BPM collect data page ***/
    Historico.prototype.openPage = function (aux) {
        //push another page onto the history stack
        //causing the nav controller to animate the new page in
        this.navCtrl.push(HistoricoFilho, {
            bpm: aux.value, data: aux.timestamp
        });
    };
    /*** Adaptation function to split timestamp received from server ***/
    Historico.prototype.mySplit = function (string, nb) {
        var array = string.split(' ');
        return array[nb];
    };
    Historico.decorators = [
        { type: Component, args: [{
                    selector: 'page-historico',
                    templateUrl: 'historico.html'
                },] },
    ];
    /** @nocollapse */
    Historico.ctorParameters = [
        { type: Http, },
        { type: NavController, },
    ];
    return Historico;
}());
