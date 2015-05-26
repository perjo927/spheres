
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

// TODO: Controlller for footer and nvabar rendering

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


// TODO : 404, 500 ,etc