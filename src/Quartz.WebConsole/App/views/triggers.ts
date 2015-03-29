import aur = require("aurelia-router");
import auf = require("aurelia-framework")
import auh = require("aurelia-http-client")

export class TriggersView {

    static inject() { return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)]; }
    public triggers: any[];

    constructor(public theRouter: aur.Router) {
    }

    activate(params: any) {
        var client = new auh.HttpClient();
        return client.get(`/api/schedulers/${params.$parent.id}/triggers`).then(response => {
            this.triggers = <any[]>response.content;
        });
    }
}