import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
export declare class Historico {
    http: Http;
    navCtrl: NavController;
    listaHistorico: Array<{}>;
    isReading: boolean;
    /*** Function to replace - to / to iOS devices ***/
    reviver(key: any, value: any): any;
    constructor(http: Http, navCtrl: NavController);
    /*** Redirect to BPM collect data page ***/
    openPage(aux: any): void;
    /*** Adaptation function to split timestamp received from server ***/
    mySplit(string: any, nb: any): any;
}
