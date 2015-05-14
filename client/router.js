
//Router.route('/admin', function () {
//    this.render('admin');
//});

//Router.onBeforeAction(function () {
//    // all properties available in the route function
//    // are also available here such as this.params
//
//    if (!Meteor.userId()) {
//        // if the user is not logged in, render the Login template
//        this.render('Login');
//    } else {
//        // otherwise don't hold up the rest of hooks or our route/action function
//        // from running
//        this.next();
//    }
//});
//
//Router.onBeforeAction(myAdminHookFunction, {
//    only: ['admin']
//    // or except: ['routeOne', 'routeTwo']
//});

/* */
Router.route('/', {
        name: "home",
        loadingTemplate: "loading",
        layoutTemplate: "layout_home",
        waitOn: function() {
            return Subscriptions;
        },
        action: function(){
            var router = this;
            var params = router.params;

            router.render('app', {
                to: "app",
                data: function () {
                    return {
                        content: ContentAreas
                    }
                }
            });

            ContentAreas.forEach(function(area) {
                router.render(area, {
                        to: area,
                        data: function() {
                            return {
                                content: VM.sections[area].service.getContent()
                            }
                        }
                    }
                );
            });
        }
    }
);