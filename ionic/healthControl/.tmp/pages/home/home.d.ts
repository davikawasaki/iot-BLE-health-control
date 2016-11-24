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
    makeGetRequest(): void;
    connectBluetooth(): void;
    pullBPM(): void;
    ionViewDidEnter(): void;
}
