import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { DeviceService } from '../services/DeviceService';
export declare class HomePage {
    private http;
    navCtrl: NavController;
    private deviceService;
    status: String;
    color: String;
    bpm: String;
    connected: boolean;
    isReading: boolean;
    listBPM: Array<String>;
    constructor(http: Http, navCtrl: NavController, deviceService: DeviceService);
    static readonly parameters: typeof Http[][];
    /*** Function to toggle and connect bluetooth device ***/
    connectBluetooth(): void;
    /*** Function to pull BPM data from bluetooth serial device ***/
    pullBPM(): void;
    /*** Function to start pulling BPM data from bluetooth device after pairing with HC-05 ***/
    ionViewDidEnter(): void;
    /*** Function to send data to server ***/
    submit(): void;
}
