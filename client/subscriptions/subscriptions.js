// Most subscriptions will be used in Iron Router

Subscriptions = [];
ContentAreas.forEach(function(collection) {
    Subscriptions.push(Meteor.subscribe(collection));
});



/* Meteor.subscribe("foo"); */
