export declare class DeviceService {
    device: any;
    connection: any;
    connected: boolean;
    constructor();
    /*** Setters ***/
    setDevice(device: any): void;
    setConnection(subscribe: any): void;
    setConnected(status: any): void;
    /*** Getters ***/
    getDevice(): any;
    getConnection(): any;
    getConnected(): boolean;
}
