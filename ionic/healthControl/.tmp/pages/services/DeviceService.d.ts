export declare class DeviceService {
    device: any;
    connection: any;
    connected: boolean;
    constructor();
    setDevice(device: any): void;
    setConnection(subscribe: any): void;
    setConnected(status: any): void;
    getDevice(): any;
    getConnection(): any;
    getConnected(): boolean;
}
