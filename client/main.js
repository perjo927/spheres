Session.setDefault("environment", "development");
Session.setDefault("skillSet", "Languages");

(function setEnvironment() {
    Meteor.apply("processEnv", ["NODE_ENV"], function(err,res) {
        if(!!res) {
            console.debug("NODE_ENV is",res);
            Session.set("environment", res);
        }
    });
})();


UI.body.rendered = function() {

};