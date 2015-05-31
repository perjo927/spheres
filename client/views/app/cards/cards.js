

var fireSelector = ".scrollfire" + "." + "cards";

/**/
Template.cards.scrollFireContent = function () {
    Materialize.showStaggeredList(fireSelector);
};

/* */
Template.cards.onRendered(function () {
    // Scrollfire
    var sfOptions = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.cards.scrollFireContent()"
        }
    ];
    Materialize.scrollFire(sfOptions);
});

/* */
Template.cards.helpers({

});

/* */
Template.cards.events({

});
