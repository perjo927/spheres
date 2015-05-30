
var data = [
    {
        value: 60,
        color:"#E91E63",
        highlight: "#EC407A",
        label: "Drive"
    },
    {
        value: 30,
        color: "#00BCD4",
        highlight: "#26C6DA",
        label: "Delivery"
    },
    {
        value: 10,
        color: "#CDDC39",
        highlight: "#D4E157",
        label: "Creativity"
    }
];

var options ={
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeInOutQuart",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true
};

/* */
Template.social.onRendered(function () {

    // Get the context of the canvas element we want to select
    //var ctx = document.getElementById("myChart").getContext("2d");
    // Get context with jQuery - using jQuery's .get() method.
    var ctx = $("#pie-chart").get(0).getContext("2d");


// And for a doughnut chart
    var myDoughnutChart = new Chart(ctx).Doughnut(data,options);

});

/* */
Template.social.helpers({

});

/* */
Template.social.events({

});
