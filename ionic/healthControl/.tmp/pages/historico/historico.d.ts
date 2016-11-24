import { NavController } from 'ionic-angular';
export declare class Historico {
    navCtrl: NavController;
    listaHistorico: Array<{
        bpm: string;
        data: string;
        hora: string;
    }>;
    constructor(navCtrl: NavController);
    openPage(aux: any): void;
    ionViewDidLoad(): void;
}
