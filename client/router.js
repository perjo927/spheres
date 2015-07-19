var renderDefault = function(router) {
    Session.set("isPreview", false);

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
Router.route('/admin/:_id', {
        name: "admin",
        loadingTemplate: "loading",
        layoutTemplate: "admin",
        waitOn: function() {
            return CreateSubscriptions(ContentAreas); // + admin collections ? TODO
        },
        action: function(){
            var router = this;
            var params = router.params;
            var contentArea = params._id;
            var getCollectionId = VM.sections[contentArea].service.getCollectionId();
            var getContent = VM.sections[contentArea].service.getContent();

            Session.set("previewCollectionId", getCollectionId());
            Session.set("isPreview", true);
            Session.set("previewContent", getContent());

            router.render('admin_home', {
                data: function () {
                    return {
                        content: getContent
                    }
                }
            });

            router.render('admin_navbar', {
                to: "admin_navbar"
                //data: function () {
                //    return {
                //        content: VM.sections["adminNavbar"].service.getContent()
                //    }
                //}
            });

            router.render(params._id, {
                to: "admin_preview",
                data: function () {
                    return {
                        content: VM.sections[params._id].service.getContent()
                    }
                }
            });

        }
    }
);

Router.route('/admin/', function () {
    Router.go('/admin/spheres');
});

// TODO: routeName
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

Router.route('/home/', function () {
    Router.go('home');
});
Router.route('/footer/', function () {
    Router.go('home');
});
Router.route('/navbar/', function () {
    Router.go('home');
});
Router.route('/spheres/', function () {
    Router.go('home');
});


Router.route('/bars/', function () {
    Router.go('/bars/Languages');
});

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
Router.route('/venn', {
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
Router.route('/cards', {
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
Router.route('/social', {
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
Router.route('/portfolio', {
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