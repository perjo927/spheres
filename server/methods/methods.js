Meteor.methods({
    "processEnv": function(environmentVariable) {
        check(environmentVariable, String);
        var processEnvVar = process.env[environmentVariable];
        console.log("call to processEnv: ", environmentVariable + ' = ' + processEnvVar);
        return processEnvVar;
    }
});
