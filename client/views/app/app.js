var isDevEnv = function () {
    return function() {
        return Session.equals("environment", "development");
    };
};

Template.app.helpers({
    isDev: function () {
        var checkDev = isDevEnv();
        return checkDev();
    }
});

