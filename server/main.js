
Meteor.startup(function () {
    // code to run on server at startup

    var assets = JSON.parse(Assets.getText('private.json'));
    var admin = assets.admin;

    try {
        Accounts.createUser({
            "username": admin["username"],
            "email": admin["email"], // TODO: real email
            "password": admin["password"]
        });
    } catch (err) {
        //console.log(err);
    }

    var isDev = (process.env["NODE_ENV"] === "development");
    ConsoleMe.enabled = (isDev); // Enable server logs in browser in dev env
});