define(["require", "exports", "aurelia-router"], function (require, exports, aur) {
    var SchedulerRouter = (function () {
        function SchedulerRouter(router) {
            this.router = router;
            this.heading = "Scheduler";
            router.configure(function (config) {
                config.map([
                    { route: ["", "details"], moduleId: "views/scheduler-details", nav: true, title: "Details" },
                    { route: "triggers", moduleId: "views/triggers", nav: true, title: "Triggers" },
                    { route: "jobs", moduleId: "views/jobs", nav: true, title: "Jobs" }
                ]);
            });
        }
        SchedulerRouter.inject = [aur.Router];
        return SchedulerRouter;
    })();
    exports.SchedulerRouter = SchedulerRouter;
});
