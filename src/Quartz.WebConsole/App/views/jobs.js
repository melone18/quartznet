define(["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-http-client"], function (require, exports, aur, auf, auh) {
    var JobsView = (function () {
        function JobsView(theRouter) {
            this.theRouter = theRouter;
        }
        JobsView.inject = function () {
            return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)];
        };
        JobsView.prototype.activate = function (params) {
            var _this = this;
            var client = new auh.HttpClient();
            return client.get("/api/schedulers/" + params.$parent.id + "/jobs").then(function (response) {
                _this.jobs = response.content;
            });
        };
        return JobsView;
    })();
    exports.JobsView = JobsView;
});
