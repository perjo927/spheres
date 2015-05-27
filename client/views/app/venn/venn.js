var data = {
    labels: ['Bananas', 'Apples', 'Grapes'],
    series: [20, 15, 40]
};

var options = {
    labelInterpolationFnc: function(value) {
        return value[0]
    }
};

var responsiveOptions = [
    ['screen and (min-width: 640px)', {
        chartPadding: 5,
        labelOffset: 40,
        labelDirection: 'explode',
        labelInterpolationFnc: function(value) {
            return value;
        }
    }],
    ['screen and (min-width: 1024px)', {
        labelOffset: 80,
        chartPadding: 20
    }]
];

/* */
Template.venn.onRendered(function () {
    new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
});

/* */
Template.venn.helpers({

});

/* */
Template.venn.events({

});
