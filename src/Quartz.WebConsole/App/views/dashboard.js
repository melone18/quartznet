define(["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-http-client"], function (require, exports, aur, auf, auh) {
    var Dashboard = (function () {
        function Dashboard(theRouter) {
            this.theRouter = theRouter;
            this.addedDynoViewRoute = false;
            this.heading = "Dashboard";
        }
        Dashboard.inject = function () {
            return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)];
        };
        Dashboard.prototype.dashboard = function () {
        };
        Dashboard.prototype.activate = function () {
            var _this = this;
            var client = new auh.HttpClient();
            return client.get("/api/schedulers").then(function (response) {
                _this.schedulers = response.content;
            });
        };
        Dashboard.prototype.openDetails = function (scheduler) {
            this.theRouter.navigate("#/schedulers/" + scheduler.name.toLowerCase(), false);
        };
        return Dashboard;
    })();
    exports.Dashboard = Dashboard;
});
