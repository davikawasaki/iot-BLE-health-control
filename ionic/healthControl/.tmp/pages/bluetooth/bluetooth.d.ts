import { NavController } from 'ionic-angular';
import { DeviceService } from '../services/DeviceService';
export declare class Bluetooth {
    navCtrl: NavController;
    private deviceService;
    devicesList: Array<any>;
    isScanning: boolean;
    platform: any;
    constructor(navCtrl: NavController, deviceService: DeviceService);
    static readonly parameters: typeof NavController[][];
    startScanning(): void;
    connectToDevice(device: any): void;
    emptyName(name: any): boolean;
}
