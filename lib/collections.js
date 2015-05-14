// Runs in both client and server contexts

Collections = {
    "presentation": {}
};

// Presentation collections to create
ContentAreas =
    [
        //"navbar",
        "spheres",
        "bars"
        //,
        //"footer",
        //"sticky"
    ];

ContentAreas.forEach(function (element,index,array) {
    Collections.presentation[element] = new Mongo.Collection(element);
});

//Collections["presentation"].foo = new Mongo.Collection("about");
