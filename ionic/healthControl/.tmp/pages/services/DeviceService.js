export var DeviceService = (function () {
    function DeviceService() {
        this.device = {};
        this.connected = false;
    }
    DeviceService.prototype.setDevice = function (device) {
        this.device = device;
    };
    DeviceService.prototype.setConnection = function (subscribe) {
        this.connection = subscribe;
    };
    DeviceService.prototype.setConnected = function (status) {
        this.connected = status;
    };
    DeviceService.prototype.getDevice = function () {
        return this.device;
    };
    DeviceService.prototype.getConnection = function () {
        return this.connection;
    };
    DeviceService.prototype.getConnected = function () {
        return this.connected;
    };
    return DeviceService;
}());
