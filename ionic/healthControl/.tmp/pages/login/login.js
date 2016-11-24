import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var Login = (function () {
    function Login(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('Hello Login Page');
    };
    Login.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: NavController, },
    ];
    return Login;
}());
