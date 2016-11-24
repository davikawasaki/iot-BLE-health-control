import { NavController, NavParams } from 'ionic-angular';
export declare class Device {
    navCtrl: NavController;
    params: NavParams;
    device: any;
    connected: boolean;
    isScanning: boolean;
    characteristics: Array<any>;
    valueBPM: number;
    constructor(navCtrl: NavController, params: NavParams);
    static readonly parameters: (typeof NavParams[] | typeof NavController[])[];
    scan(): void;
}
