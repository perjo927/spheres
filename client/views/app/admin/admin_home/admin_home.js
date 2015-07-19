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
    //,
    //dataObject: function() {
    //    console.log(this);
    //    //var data = JSON.stringify(this);
    //    //console.debug(data);
    //
    //    var presentationList = [];
    //    for (var key in this) {
    //        if (this.hasOwnProperty(key)) {
    //            presentationList.push({key: this[key]});
    //            //(key + " -> " + this[key]);
    //        }
    //    }
    //    console.info(presentationList);
    //    return presentationList;
    //}
});

//
Template[thisViewName].events({
    'change select': function (event, template) {
        var contentArea = event.target.value;
        Session.set("adminPreviewRoute", contentArea);
        Router.go("/admin/" + contentArea);
    }
});

/* Unused */
//Template.preview.helpers({
//    url: function () {
//        var url = "http://localhost:3000/";
//        var route = Session.get("adminPreviewRoute");
//        return url + route;
//    }
//});