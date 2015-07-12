var topSection = {
    title: "Portfolio",
    text: "Alas, the cross-functional and diverse mind of Per Jonsson."
};

var cards = [
    // TODO: Paul Wong! Yellow Danger, etc.
    {
        title: "Ericsson Web Poll",
        img: "img/liuseal.png",
        item: {
                title: "Ericsson Web Poll",
                text: "This job was a continuation after working with a bachelor thesis on " +
                "web survey design and maintainability. It resulted in a web poll administration " +
                "tool to use during annual employee surveys."
        },
        link: {
            text: "View project",
            link: "http://www.diva-portal.org/smash/get/diva2:723819/FULLTEXT01.pdf"
        }
    },
    {
        title: "<3 - Per's programming language",
        img: "https://raw.githubusercontent.com/perjo927/LessThanThree/master/3cover.jpg",
        item: {
            title: "<3 - Programming language",
            text: "<3 by Hannah Borjesson and Per Jonsson: A lovable imperative interpreted programming language. " +
                "This was a project that we completed during our studies at Linkoping university. The language is " +
                "implemented using Ruby. To run source code files written in <3 you need at least Ruby 1.9.3"
        },
        link: {
            text: "View project",
            link: "https://github.com/perjo927/LessThanThree/blob/master/Three-Manual.pdf"
        }
    },
    {
        title: "This web portfolio",
        img: "img/this-guy.jpg",
        item: {
            title: "Per's programming portfolio",
            text: "This web portfolio was constructed using the Meteor infrastructure and a bit of Material design."
        },
        link: {
            text: "View project",
            link: "https://github.com/perjo927/spheres"
        }
    },
    {
        title: "Pintos operating system",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Operating_system_placement.svg/165px-Operating_system_placement.svg.png",
        item: {
            title: "Pintos",
            text: "This operating system was completed to its current point by Tobias Jansson and Per Jonsson " +
            "during studies at Linkoping university. It was built in a Linux environment. " +
            "https://en.wikipedia.org/wiki/Pintos"
        },
        link: {
            text: "View project",
            link: "https://github.com/perjo927/Pintos"
        }
    },
    {
        title: "hWorld: edu-game",
        img: "img/boy_elf.png",
        item: {
            title: "hWorld",
            text: "A project for the IDA department at Linkoping university. " +
            "Our Scrum Team implemented a concept map learning activity " +
            "in a Django-based game for children."
        },
        link: {
            text: "View project",
            link: "https://github.com/perjo927/hWorld"
        }
    },
    {
        title: "The Linkoping Challenge",
        img: "img/quiz-image_0.jpg",
        item: {
            title: "Linkopingsutmaningen",
            text: "This quiz app was implemented in Meteor and was a contribution in a hackathon " +
                "arranged by East Sweden. The app uses game-logic to interact with public APIs. " +
                "The team consisted of four programming students at LiU. See eastswedenhack.se"
        },
        link: {
            text: "View project",
            link: "https://github.com/perjo927/Link-pingsutmaningen"
        }
    }
];

/* */
VM.sections.portfolio.docs = {
    topSection: topSection,
    cards: cards
};
