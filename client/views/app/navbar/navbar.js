
//
Template.navbar.onRendered(function () {
    this.$('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
});


Template.navbar.helpers({
    isPreview: App.helpers.isPreview
});

/* */
Template.navbar.events({

});

Template.nav.helpers({

});

/* PREVIEW */
//Template.nav_preview.helpers({
//    parentHelper: function (parentContext) {
//        console.debug("parentContext", parentContext)
//    }
//});


Template.nav_preview.events({
    'submit form': function (event, template) {
        event.preventDefault();

        var formInitialState = this;
        var formCurrentState = App.parseForm(event);
        var formCurrentArrayState = $(event.target).serializeArray();

        var collectionId = Session.get("previewCollectionId");
        console.warn("collectionId", collectionId, "template", template);

        //var collection = Collections.presentation[collectionId];
        var content = Session.get("previewContent");
        var navItems = content.navItems;

        console.warn("collection", navItems);
        // TODO: THIS IS WHERE I LEFT OFF
        // Replace the correct item in navItems with the admin GUI


        formCurrentArrayState.forEach(function (field, index, formArray) {
            var fieldName = field.name;
            var newValue = field.value;
            var oldValue = formInitialState[field.name];

            if (newValue === "" || oldValue === newValue) {
                return;
            } else {
                // Collections.presentation["navbar"].update(_id, content.navitems)
                console.debug(fieldName, oldValue, newValue);
            }
        });
    }
});