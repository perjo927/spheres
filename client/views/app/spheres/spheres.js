
/* */
Template.spheres.onRendered(function () {
    $('.arc').arctext({
        radius: 82,
        dir: -1
        //,fitText: true
        //, rotate: false
    });
});

/* */
Template.spheres.helpers({
    log: function() {
        console.info(this);
        return "this";
    }
});

/* */
Template.spheres.events({

});
