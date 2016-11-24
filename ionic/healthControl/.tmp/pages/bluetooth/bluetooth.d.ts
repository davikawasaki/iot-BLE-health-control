import { NavController } from 'ionic-angular';
export declare class Bluetooth {
    navCtrl: NavController;
    devicesList: Array<any>;
    isScanning: boolean;
    platform: any;
    constructor(navCtrl: NavController);
    static readonly parameters: typeof NavController[][];
    startScanning(): void;
    connectToDevice(device: any): void;
    emptyName(name: any): boolean;
}
