import aur = require("aurelia-router");
import auf = require("aurelia-framework")
import auh = require("aurelia-http-client")

export class Dashboard {

    static inject() { return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)]; }

    public heading: string;
    public schedulers: any[];
    public addedDynoViewRoute: boolean = false;

    constructor(public theRouter: aur.Router) {
        this.heading = "Dashboard";
    }

    dashboard() {
    }

    activate() {
        var client = new auh.HttpClient();
        return client.get("/api/schedulers").then(response => {
            this.schedulers = <any[]>response.content;
        });
    }

    openDetails(scheduler) {
        this.theRouter.navigate("#/schedulers/" + scheduler.name.toLowerCase(), false);
    }
}