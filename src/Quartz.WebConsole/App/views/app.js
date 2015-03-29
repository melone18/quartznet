define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Quartz Web Console";
                config.map([
                    { route: ["", "dashboard"], moduleId: "views/dashboard", nav: true, title: "Dashboard" },
                    { route: ["schedulers/:id"], moduleId: "views/scheduler-router", nav: false, title: "Scheduler Details" },
                    { route: ["logs"], moduleId: "views/dashboard", nav: true, title: "Live Logs" }
                ]);
            });
        }
        App.inject = [aur.Router];
        return App;
    })();
    exports.App = App;
});
