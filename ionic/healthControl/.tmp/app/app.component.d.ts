import { Platform } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Medico } from '../pages/medico/medico';
export declare class MyApp {
    pages: Array<{
        component: any;
        title: string;
        icon: string;
    }>;
    rootPage: typeof HomePage;
    Medico: typeof Medico;
    constructor(platform: Platform);
    openPage(page: any): void;
}
