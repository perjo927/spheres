ParseAssets = function (asset) {
    var assets = JSON.parse(Assets.getText('private.json'));
    return assets[asset];
};