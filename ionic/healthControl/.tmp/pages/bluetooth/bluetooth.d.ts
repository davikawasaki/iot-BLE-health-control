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
    /*** Function to discover unpaired bluetooth devices ***/
    startScanning(): void;
    /*** Start connection to device and sending back to home page to start collecting data ***/
    connectToDevice(device: any): void;
    /*** Function to verify device name null or undefined ***/
    emptyName(name: any): boolean;
}
