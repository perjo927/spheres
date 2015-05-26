// Runs in both client and server contexts

Collections = {
    "presentation": {}
};

// Presentation collections to create
ContentAreas =
    [
        "navbar",
        "spheres",
        "bars",
        "venn",
        "footer"
    ];

ContentAreas.forEach(function (area) {
    Collections.presentation[area] = new Mongo.Collection(area);
});

//Collections["presentation"].foo = new Mongo.Collection("about");
