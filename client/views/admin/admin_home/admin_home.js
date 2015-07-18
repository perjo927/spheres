var thisViewName = "admin_home";

//
Template[thisViewName].onRendered(function () {

});

Template[thisViewName].onDestroyed(function () {

});

//
Template[thisViewName].helpers({
    contentAreas: function () {
        return ContentAreas;
    }
});

//
Template[thisViewName].events({
    'change select': function (event, template) {
        var contentArea = event.target.value;
        var newRoute = ContentAreaRouteMap[contentArea];
        Session.set("adminPreviewRoute", newRoute);
    }
});

/* */
Template.preview.helpers({
    url: function () {
        var url = "http://localhost:3000/";
        //var route = Session.get("adminPreviewRoute");
        console.info(url + route);
        return url + route;
    }
});