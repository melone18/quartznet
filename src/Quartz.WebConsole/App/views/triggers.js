define(["require", "exports", "aurelia-router", "aurelia-framework", "aurelia-http-client"], function (require, exports, aur, auf, auh) {
    var TriggersView = (function () {
        function TriggersView(theRouter) {
            this.theRouter = theRouter;
        }
        TriggersView.inject = function () {
            return [auf.Parent.of(aur.Router), auf.Parent.of(aur.Router)];
        };
        TriggersView.prototype.activate = function (params) {
            var _this = this;
            var client = new auh.HttpClient();
            return client.get("/api/schedulers/" + params.$parent.id + "/triggers").then(function (response) {
                _this.triggers = response.content;
            });
        };
        return TriggersView;
    })();
    exports.TriggersView = TriggersView;
});
