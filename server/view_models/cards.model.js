
var cards = [
    {
        title: "Work experience",
        color: "cyan",
        icon: "mdi-action-android",
        items: [
            {
                title: "Betsson",
                type: "Web Developer",
                year: "2014/08 ->"
            },
            {
                title: "Ericsson",
                type: "Developer",
                year: "2014/03 - 2014/08"
            },
            {
                title: "Linkoping university",
                type: "Lab Assistant",
                year: "2014/01 - 2014/06"
            },
            {
                title: "Sodra Cell",
                type: "Tech Intern",
                year: "2004/06 - 2004/08"
            }
        ],
        link: {
            text: "View on LinkedIn",
            link: "https://www.linkedin.com/in/djpjgj"
        }
    },
    {
        title: "Education",
        color: "green",
        icon: "mdi-social-school",
        items: [
            {
                title: "Linkoping University",
                type: "Innovative Programming (B.Sc.)",
                year: "2012/08 - 2014/06"
            },
            {
                title: "Linkoping University",
                type: "Information Retrieval & New New Media",
                year: "2008/01 - 2008/06"
            },
            {
                title: "Linkoping University",
                type: "Music Producer Programme (B.Sc.)",
                year: "2005/01 - 2007/12"
            },
            {
                title: "Linkoping University",
                type: "Media&Com Technology + Linguistics",
                year: "2003/08 - 2004/12"
            }
        ],
        link: {
            text: "View on LinkedIn",
            link: "https://www.linkedin.com/in/djpjgj"
        }
    },
    {
        title: "Projects & Causes",
        color: "lime",
        icon: "mdi-action-favorite",
        items: [
            {
                title: "Game Management Tool",
                type: "http://www.betssonab.com/",
                year: "2014/01 - 2014/06"
            },
            {
                title: "CoderDojo Norrkoping",
                type: "http://coderdojonkpg.se/",
                year: "2014/01 - 2014/06"
            },
            {
                title: "East Sweden Hack",
                type: "Competitor, Team IP",
                year: "2014/09"
            },
            {
                title: "Nordic Programming Contest",
                type: "https://ncpc.idi.ntnu.no/",
                year: "2013 & 2014"
            }
        ],
        link: {
            text: "View on LinkedIn",
            link: "https://www.linkedin.com/in/djpjgj"
        }
    },
    {
        title: "Paper CV (print!)",
        color: "orange",
        icon: "mdi-action-print",
        items: [
            {
                title: "How to print",
                type: "Click this tile away and then click on",
                year: "'Printer Friendly CV'"
            }
        ],
        link: {
            text: "Printer friendly CV",
            link: "pdf/PerJonssonProgrammerCV.pdf"
        }
    }
];


/* */
VM.sections.cards.docs = {
    cards: cards
};
