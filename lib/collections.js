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
        "cards",
        "social",
        "portfolio",
        "footer"
    ];

ContentAreaRouteMap = {
    "navbar": "home",
    "spheres": "home",
    "bars": "bars",
    "venn": "venn",
    "cards": "cards",
    "social": "social",
    "portfolio": "portfolio",
    "footer": "footer"
} ;

ContentAreas.forEach(function (area) {
    Collections.presentation[area] = new Mongo.Collection(area);
});
