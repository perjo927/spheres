Session.setDefault("environment", "development");
Session.setDefault("adminPreviewRoute", "home");
Session.setDefault("isPreview", false);
Session.setDefault("previewCollectionId", undefined);
Session.set("previewContent", {});



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