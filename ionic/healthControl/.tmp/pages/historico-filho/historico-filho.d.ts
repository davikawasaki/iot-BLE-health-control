import { NavController, NavParams } from 'ionic-angular';
export declare class HistoricoFilho {
    navCtrl: NavController;
    navParams: NavParams;
    bpm: String;
    data: String;
    constructor(navCtrl: NavController, navParams: NavParams);
    /*** Adaptation function to split timestamp received from server ***/
    mySplit(string: any, nb: any): any;
}
