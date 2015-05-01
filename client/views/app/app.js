Template.app.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.app.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});
