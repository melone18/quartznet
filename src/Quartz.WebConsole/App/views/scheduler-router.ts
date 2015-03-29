import aur = require("aurelia-router");

export class SchedulerRouter {
    static inject = [aur.Router];
    heading: string;

    constructor(private router: aur.Router) {
        this.heading = "Scheduler";
        router.configure(config => {
            config.map([
                { route: ["", "details"], moduleId: "views/scheduler-details", nav: true, title: "Details" },
                { route: "triggers", moduleId: "views/triggers", nav: true, title: "Triggers" },
                { route: "jobs", moduleId: "views/jobs", nav: true, title: "Jobs" }
            ]);
        });
    }
}