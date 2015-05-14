var getCollections = function () {
    var sections = {};

    for (var collection in Collections["presentation"]) {
        if (Collections["presentation"].hasOwnProperty(collection)) {
            sections[collection] = {
                "docs": {},
                "service": {}
            }
        }
    }
    return sections;
};

VM = {
    "FindContentItems": function (collectionId, property) {
        var collection = Collections.presentation[collectionId];

        return function () {
            var doc = collection.findOne();

            if (!!doc) {
                if (!!property) {
                    // Return whole content object
                    return collection.findOne().content[property];
                }
                // Return individual properties of content object
                return collection.findOne().content;
            }
            return {};
        };
    },
    "sections": getCollections()
};