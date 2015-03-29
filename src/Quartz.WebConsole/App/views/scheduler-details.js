define(["require", "exports", "aurelia-router", "aurelia-http-client"], function (require, exports, aur, Aureliahttpclient) {
    var SchedulerIndexView = (function () {
        function SchedulerIndexView() {
        }
        SchedulerIndexView.prototype.activate = function (params) {
            this.id = params.$parent.id;
            return this.loadDetails();
        };
        SchedulerIndexView.prototype.standby = function () {
            this.postCommand("standby");
        };
        SchedulerIndexView.prototype.start = function () {
            this.postCommand("start");
        };
        SchedulerIndexView.prototype.shutdown = function () {
            this.postCommand("shutdown");
        };
        SchedulerIndexView.prototype.postCommand = function (command) {
            var _this = this;
            var client = new Aureliahttpclient.HttpClient();
            return client.post("/api/schedulers/" + this.id + "/" + command).then(function () {
                return _this.loadDetails();
            });
        };
        SchedulerIndexView.prototype.loadDetails = function () {
            var _this = this;
            var client = new Aureliahttpclient.HttpClient();
            return client.get("/api/schedulers/" + this.id).then(function (response) {
                _this.scheduler = response.content;
            });
        };
        SchedulerIndexView.inject = [aur.Router];
        return SchedulerIndexView;
    })();
    exports.SchedulerIndexView = SchedulerIndexView;
});
