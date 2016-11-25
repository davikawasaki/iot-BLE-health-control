export class DeviceService {

    device: any;
    connection: any;
    connected: boolean;

    constructor() {
      this.device = {};
      this.connected = false;
    }

    /*** Setters ***/
    setDevice(device) {
      this.device = device;
    }
    setConnection(subscribe) {
      this.connection = subscribe;
    }
    setConnected(status) {
      this.connected = status;
    }

    /*** Getters ***/
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
