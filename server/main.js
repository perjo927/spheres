var setMailUrl = function (isDev) {
    // TODO: Get a production email account (Meteor limits 200 in default production)
    if (!isDev) {
        return;
    }
    var emailAccount = ParseAssets("emailAccount");

    process.env.MAIL_URL=
        "smtp://" +
        emailAccount.username +
        ":" +
        emailAccount. password +
        "@" +
        emailAccount.mailserver +
        ":" +
        emailAccount.port
        +"/";
};

var createAdminUser = function () {
    var admin = ParseAssets("admin");

    try {
        Accounts.createUser({
            "username": admin["username"],
            "email": admin["email"], // TODO: real email
            "password": admin["password"]
        });
    } catch (err) {
        //console.log(err);
    }
};

var enableConsoleMe = function (isDev) {
    ConsoleMe.enabled = (isDev); // Enable server logs in browser in dev env
};

//
Meteor.startup(function () {
    var isDev = (process.env["NODE_ENV"] === "development");

    enableConsoleMe(isDev);
    createAdminUser();
    setMailUrl(isDev);
    //Accounts.config({
    //    forbidClientAccountCreation: true
    //});
});