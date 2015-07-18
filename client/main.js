Session.setDefault("environment", "development");
Session.setDefault("adminPreviewRoute", "home");


(function setEnvironment() {
    Meteor.apply("processEnv", ["NODE_ENV"], function(err,res) {
        if(!!res) {
            console.debug("NODE_ENV is",res);
            Session.set("environment", res);
        }
    });
})();


UI.body.rendered = function() {
    Session.setDefault("windowHeight", window.height);
};