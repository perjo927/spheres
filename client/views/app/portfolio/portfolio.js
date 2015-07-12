var fireSelector = ".scrollfire" + "." + "portfolio";

/**/
Template.portfolio.scrollFireImage = function () {
    // TODO: Doesn't work too well in static pages
    //Materialize.fadeInImage(fireSelector);
};


/* */
Template.portfolio.onRendered(function () {
    //this.$(fireSelector).css("opacity", "0");

    var options = [
        {
            selector: fireSelector,
            offset: -1,
            callback: "Template.portfolio.scrollFireImage()"
        }
    ];
    //Materialize.scrollFire(options);
});

/* */
Template.portfolio.helpers({

});

/* */
Template.portfolio.events({

});
