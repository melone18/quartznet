import aur = require("aurelia-router");

export class App {
    static inject = [aur.Router];

    constructor(private router: aur.Router) {
        this.router.configure((config) => {
            config.title = "Quartz Web Console";
            config.map([
                { route: ["", "dashboard"], moduleId: "views/dashboard", nav: true, title: "Dashboard" },
                { route: ["schedulers/:id"], moduleId: "views/scheduler-router", nav: false, title: "Scheduler Details" },
                { route: ["logs"], moduleId: "views/dashboard", nav: true, title: "Live Logs" }
            ]);
        });
    }
}