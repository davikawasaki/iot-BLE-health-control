import { NavController, NavParams } from 'ionic-angular';
import { DeviceService } from '../services/DeviceService';
export declare class Bluetooth {
    navCtrl: NavController;
    navParams: NavParams;
    private deviceService;
    devicesList: Array<any>;
    isScanning: boolean;
    request: boolean;
    scan: String;
    color: String;
    platform: any;
    constructor(navCtrl: NavController, navParams: NavParams, deviceService: DeviceService);
    static readonly parameters: typeof NavController[][];
    startScanning(): void;
    connectToDevice(device: any): void;
    emptyName(name: any): boolean;
}
