var section = "navbar";

VM.sections[section].service = {
    "getContent": function() {
        return VM.FindContentItems(section);
    },
    "getCollectionId": function() {
        return VM.GetCollectionId(section);
    }
};
