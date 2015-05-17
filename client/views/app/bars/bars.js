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

var setHeight = function (that) {
    var bars = that.$('.bar');

    if (bars.length === 0) {
        console.debug("return");
        return;
    }

    var barsBody = that.$('.barsBody');
    var border = that.$('#border');

    var barsBodyTop = barsBody.position().top;
    var borderTop = border.position().top;
    var gap = barsBodyTop - borderTop; // How much space is left to fill

    bars.each(function (barIndex, bar) {
        var thisHeight = $(bar).height();
        var percentage = thisHeight * 0.01;
        $(bar).height(gap*percentage + thisHeight);
    });
};

//
Template[thisViewName].onRendered(function () {
    var skillsObject = this.data.content.skills;
    var skillSetTypes = Object.keys(skillsObject);
    var currentSet = 0;
    console.debug();

    Meteor.setInterval(function(){
        var newSet = skillSetTypes[currentSet++];

        if (currentSet === skillSetTypes.length) {
            currentSet = 0;
        }
        Router.go("bars", {_id: newSet})
    },10* 1000);

});

//
Template[thisViewName].helpers({
    skill: function () {
        return this.skillType;
    },
    skillSet: function () {
//
        var selectedSkill = this.skillType;
        var skillSet = this.skills[selectedSkill];
        var length = skillSet.length;
        var that = Template.instance();

        skillSet.reverse().forEach(function (element,index) {
            setColor(element,index,length);
        });
        Meteor.setTimeout(function () {
            setHeight(that);
        },700);

        return skillSet;
    }
});

//
Template[thisViewName].events({

});
