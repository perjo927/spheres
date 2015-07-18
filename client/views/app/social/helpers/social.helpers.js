Contact = {};

Contact.parseForm = function(event) {
    return App.parseForm(event);
};

Contact.validateFullName = function (name) {
    return App.validateName(name);
};

Contact.validateEmail = function(email) {
    return App.validateEmail(email);
};

Contact.validateTextArea = function (text) {
    return App.validateTextArea(text);
};

Contact.validateForm = function (formFields, formContainer, callback) {
    App.validateForm(formFields, formContainer, callback);
};

Contact.onValidationDone = function (isValid, errorMessage, formContainer) {
    var modal = $("#contact_modal");
    var successMessage = "Email has been sent successfully.";

    var email = formContainer["email"],
        message = formContainer["textmessage"],
        subject = formContainer["fullname"] +
            " has sent you a message from the contact form at programmerper.com. ";

    var callback = function(err, res) {
        console.info(err, res);

        if (!!err) {
            Materialize.toast(errorMessage, 5000, 'pink');
        } else {
            Materialize.toast(successMessage, 5000, 'cyan');
            $('form').trigger("reset");
            modal.closeModal();
        }
    };

    if (isValid) {
        Meteor.call('sendEmail', email, message, subject, callback);
    } else {
        Materialize.toast(errorMessage, 5000, 'pink');
    }
};