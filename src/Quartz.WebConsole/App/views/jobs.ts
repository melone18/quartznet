import aur = require("aurelia-router");
import auf = require("aurelia-framework")
import auh = require("aurelia-http-client")

export class JobsView {

    static inject() { return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)]; }
    public jobs: any[];

    constructor(public theRouter: aur.Router) {
    }

    activate(params: any) {
        var client = new auh.HttpClient();
        return client.get(`/api/schedulers/${params.$parent.id}/jobs`).then(response => {
            this.jobs = <any[]>response.content;
        });
    }
}