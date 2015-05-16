Meteor.methods({
    "processEnv": function(environmentVariable) {
        check(environmentVariable, String);
        var processEnvVar = process.env[environmentVariable];
        return processEnvVar;
    }
});
