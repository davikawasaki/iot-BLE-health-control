export class DeviceService {

    device: any;
    connection: any;
    connected: boolean;

    constructor() {
      this.device = {};
      this.connected = false;
    }

    setDevice(device) {
      this.device = device;
    }
    setConnection(subscribe) {
      this.connection = subscribe;
    }
    setConnected(status) {
      this.connected = status;
    }
    getDevice() {
      return this.device;
    }
    getConnection() {
      return this.connection;
    }
    getConnected() {
      return this.connected;
    }
}
