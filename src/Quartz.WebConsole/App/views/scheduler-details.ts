import aur = require("aurelia-router");
import Aureliahttpclient = require("aurelia-http-client");

export class SchedulerIndexView {
    static inject = [aur.Router];
    id: string;
    scheduler: any;

    activate(params: any) {
        this.id = params.$parent.id;
        return this.loadDetails();
    }

    standby() {
        this.postCommand("standby");
    }

    start() {
        this.postCommand("start");
    }

    shutdown() {
        this.postCommand("shutdown");
    }

    postCommand(command: string) {
        var client: any = new Aureliahttpclient.HttpClient();
        return client.post(`/api/schedulers/${this.id}/${command}`).then(() => {
            return this.loadDetails();
        });
    }

    loadDetails() {
        var client = new Aureliahttpclient.HttpClient();
        return client.get(`/api/schedulers/${this.id}`).then(response => {
            this.scheduler = response.content;
        });
    }
}