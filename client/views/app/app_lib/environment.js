App = {};

App.parseForm = function(event) {
    var formContainer = {};
    var form = $(event.target).serializeArray();

    form.forEach(function (element, index, array) {
        formContainer[element.name] = element.value;
    });

    return formContainer;
};

App.validateName = function (name) {
    return name !== "";
};

App.validateEmail = function(email) {
    return email.indexOf('@') !== -1;
};

App.validateTextArea = function (text) {
    var length = text.length;
    var minLength = 20, maxLength = 500;
    //noinspection UnnecessaryLocalVariableJS
    var isValid = length >= minLength && length <= maxLength;

    return isValid;
};

App.validateForm = function (formFields, formContainer, callback) {
    var errorMessage = "", isValid = undefined;

    isValid = formFields.every(function (ff, i, arr) {
        var fieldValidator = ff["method"],
            fieldValue = formContainer[ff["name"]];

        var valid = fieldValidator.call(null, fieldValue);
        var field = $("#" + ff["name"]);
        var validationClass = "pink lighten-3"; // TODO: fetch from theme (?)

        if (!valid) {
            field.addClass(validationClass);
            errorMessage += ff["name"] + ". ";
        } else {
            field.removeClass(validationClass);
        }
        return valid;
    });

    callback(isValid, errorMessage);
};

App.helpers = {};

App.helpers.isPreview = function () {
    return Session.get("isPreview");
};