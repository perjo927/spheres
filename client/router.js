var renderDefault = function(router) {
    router.render('navbar', {
        to: "navbar",
        data: function () {
            return {
                content: VM.sections["navbar"].service.getContent()
            }
        }
    });
    router.render('footer', {
        to: "footer",
        data: function () {
            return {
                content: VM.sections["footer"].service.getContent()
            }
        }
    });
};


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
Router.route('/admin', {
        name: "admin",
        loadingTemplate: "loading",
        layoutTemplate: "admin",
        //waitOn: function() {
        //    return CreateSubscriptions([
        //        "adminNavbar",
        //        "adminFooter",
        //        "adminMain"
        //    ]);
        //},
        action: function(){
            var router = this;
            var params = router.params;

            router.render('admin_home', {
                //data: function () {
                //    return {
                //        content: VM.sections["admin"].service.getContent()
                //    }
                //}
            });

            router.render('admin_navbar', {
                to: "navbar"
                //data: function () {
                //    return {
                //        content: VM.sections["navbar"].service.getContent()
                //    }
                //}
            });
            router.render('admin_footer', {
                to: "footer"
                //data: function () {
                //    return {
                //        content: VM.sections["footer"].service.getContent()
                //    }
                //}
            });
        }
    }
);



/* */
Router.route('/', {
        name: "home",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "spheres"
            ]);
        },
        action: function(){
            var router = this;
            var params = router.params;

            router.render('spheres', {
                data: function () {
                    return {
                        content: VM.sections["spheres"].service.getContent()
                    }
                }
            });

            renderDefault(router);
        }
    }
);

//
Router.route('/bars/:_id', {
        name: "bars",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "bars"
            ]);
        },
        action: function(){
            var router = this;
            var params = router.params;

            renderDefault(router);

            router.render('bars', {
                data: function () {
                    var content = VM.sections["bars"].service.getContent();
                    return {
                        content: {
                            skillType: params._id,
                            skills: content().skills
                        }
                    }
                }
            });

        }
    }
);

//
Router.route('/venn/', {
        name: "venn",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "venn"
            ]);
        },
        action: function(){
            var router = this;

            renderDefault(router);

            router.render('venn', {
                data: function () {
                    return {
                        content: VM.sections["venn"].service.getContent()
                    }
                }
            });

        }
    }
);

//
Router.route('/cards/', {
        name: "cards",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "cards"
            ]);
        },
        action: function(){
            var router = this;

            renderDefault(router);

            router.render('cards', {
                data: function () {
                    return {
                        content: VM.sections["cards"].service.getContent()
                    }
                }
            });

        }
    }
);

//
Router.route('/social/', {
        name: "social",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "social"
            ]);
        },
        action: function(){
            var router = this;

            renderDefault(router);

            router.render('social', {
                data: function () {
                    return {
                        content: VM.sections["social"].service.getContent()
                    }
                }
            });

        }
    }
);

//
Router.route('/portfolio/', {
        name: "portfolio",
        loadingTemplate: "loading",
        layoutTemplate: "app",
        waitOn: function() {
            return CreateSubscriptions([
                "navbar",
                "footer",
                "portfolio"
            ]);
        },
        action: function(){
            var router = this;

            renderDefault(router);

            router.render('portfolio', {
                data: function () {
                    return {
                        content: VM.sections["portfolio"].service.getContent()
                    }
                }
            });

        }
    }
);
// TODO : 404, 500 ,etc