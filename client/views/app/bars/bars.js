var thisViewName = "bars";

var colors = {
    "blue": [ "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#006064" ],
    "green": [ "#009688", "#4CAF50", "#8BC34A", "#827717", "#CDDC39"],
    "red": [ "#FF9800", "#FF5722", "#F44336", "#E91E63", "#9C27B0"]
};
var pickedColor = { "blue": 0, "green": 0,"red": 0 };

var setColor = function (skillElement, i, length) {
    var greenBorder = length * 0.34, redBorder = length * 0.67;

    if (i < greenBorder) {
        skillElement.color = colors.blue[pickedColor.blue++];
    } else if (i >= greenBorder && i < redBorder ) {
        skillElement.color = colors.green[pickedColor.green++];
    } else {
        skillElement.color = colors.red[pickedColor.red++];
    }

    if (i === length-1) {
        // Reset
        pickedColor.blue = 0; pickedColor.green = 0; pickedColor.red = 0;
    }
};

//
Template[thisViewName].onRendered(function () {

});

//
Template[thisViewName].helpers({
    skill: function () {
        return Session.get("skillSet");
    },
    skillSet: function () {
        var selectedSkill = Session.get("skillSet");
        var skillSet = this.skills[selectedSkill].reverse();
        var length = skillSet.length;


        skillSet.forEach(function (element,index,array) {
            setColor(element,index,length);
        });

        return skillSet;
    }
});

//
Template[thisViewName].events({

});
