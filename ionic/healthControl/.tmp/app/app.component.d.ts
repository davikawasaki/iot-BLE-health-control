import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { DeviceService } from '../pages/services/DeviceService';
export declare class MyApp {
    private deviceService;
    pages: Array<{
        component: any;
        title: string;
        icon: string;
    }>;
    rootPage: typeof HomePage;
    constructor(platform: Platform, deviceService: DeviceService);
    openPage(page: any): void;
}
