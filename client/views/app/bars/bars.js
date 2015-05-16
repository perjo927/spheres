var thisViewName = "bars";

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
        var skillSet = this.skills[selectedSkill];

        skillSet.forEach(function (skill, index, array) {

        });

        return skillSet.reverse();
    }
});

//
Template[thisViewName].events({

});
