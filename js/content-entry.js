const CONTENT = [
    {
        id: "Education",
        name: "Education",
        experiences: [
            {
                date: "2018 - 2021",
                title: "Bachelor of Arts in Computer Science, Pre-Med",
                position: "The University of California, Berkeley",
                description: "Relevant Coursework: Data Structures, Artificial Intelligence, Probability, Statistics",
                icon: "icon-school"
            }
        ]
    },
    {
        id: "Experience",
        name: "Work Experience",
        experiences: [
            {
                date: "October 2021 - Present",
                title: "Software Development Engineer",
                position: "Amazon",
                description: "Building highly scalable web applications for customers in Amazon warehouses as well as business analytics. Leveraging cutting-edge Amazon Web Services (AWS) to ensure high scalability, fault-tolerance, and availability.",
                icon: "icon-code"
            },
            {
                date: "June 2020 - August 2020",
                title: "Software Development Intern",
                position: "Target Technology Services, Target Corporation",
                description: "Utilized React, Spring Boot, Oracle SQL, Hibernate, and JPA to build full-stack web applications to support Target’s supply chain. Developed APIs and microservices to update legacy code to modern Java programs",
                icon: "icon-code"
            },
            {
                date: "June 2019 - August 2019",
                title: "Technology Development Program Intern",
                position: "Optum, UnitedHealth Group",
                description: "Leveraged ServiceNow, JavaScript, Bootstrap, and AngularJS for operations-level development. Developed an Android queuing application to improve flow-through at provider clinics and reduce wait times",
                icon: "icon-code"
            },
        ]
    },
    {
        id: "Projects",
        name: "Research & Selected Projects",
        experiences: [
            {
                date: "Sep 2019 - Present",
                title: "Jain Lab, University of California, San Francisco",
                position: "Research Assistant, Biological Data Science",
                description: "Analyzed high-throughput sequencing datasets for projects related to Parkinson’s. Designed novel bio-computational pipelines. Used biological data science tools – Biopython, pandas, numpy, matplotlib, R – for data analysis and information retrieval. See the <a href='https://ishajainlab.com/team/'>lab website.</a>",
                icon: "icon-flask"
            },
            {
                date: "Dec 2018 - Mar 2019",
                title: "Concealed Weapon Detection",
                position: "Optum, UnitedHealth Group",
                description: 'Investigated and developed pipeline for concealed weapon detection using acoustic signals in school environments. Utilized several machine learning models to identify weapons and compared accuracies of these models in research paper. See <a href="http://bit.ly/cwdAcoustic">the paper.</a>',
                icon: "icon-flask"
            },
        ]
    },
    {
        id: "Extracurriculars",
        name: "Extracurricular Activities & Leadership",
        experiences: [
            {
                date: "Oct 2018 - Jan 2021",
                title: "Cal Hacks, UC Berkeley's Largest Hackathon",
                position: "Director | Head of Education | Head of Diversity & Inclusion",
                description: 'Directed Cal Hacks 6.0 in October 2019, 2,000+ attendees and $300,000+ in sponsor funding. Spearheaded new ambassador initiative to increase diversity representation at Cal Hacks and beginner hacker programs. See <a href="https://calhacks.io/">our website.</a>',
                icon: "flaticon-ideas"
            },
            {
                date: "Jan 2019 - May 2021",
                title: "Berkeley Scientific Journal",
                position: "Publicity & Finance Chair",
                description: 'Led the publicity efforts and organized the finances for UC Berkeley’s premier undergraduate scientific journal. Wrote a Feature article on medical applications of machine learning technology published Summer 2019. See <a href="https://issuu.com/berkeleyscientific1/docs/perspectives_issue_23_volume_2/14">the article.</a>',
                icon: "flaticon-ideas"
            },
            {
                date: "Sep 2018 - May 2021",
                title: "Asha for Education, Berkeley",
                position: "Co-President",
                description: 'Assist in coordinating the movement of approximately $50,000 in organization funds. Working with Student Gov. and Asha Central body to secure funding and allocate to seven non-governmental organizations in India.</a>',
                icon: "flaticon-ideas"
            },
        ]
    },
    {
        id: "Awards",
        name: "Awards",
        experiences: [
            {
                date: "2019",
                title: "$11,000 First Place",
                position: "National Modo Ideathon, MIT",
                description: 'Developed a mobile application to facilitate the donation of Berkeley dining dollars to students struggling with food insecurity. <a href="https://www.forbes.com/sites/dereknewton/2019/08/21/a-student-app-challenge-winner-may-take-a-bite-out-of-campus-hunger/#a318f35449a0">Article in Forbes</a>: Won $10,000 as part of national Modo competition and $1,000 as part of Berkeley’s local competition',
                icon: "icon-trophy"
            },
            {
                date: "2019",
                title: "$500 First Place Hack Using Houndify API",
                position: "TreeHacks, Stanford Hackathon",
                description: 'Developed a Python program to act as a digital medical scribe for real-time writing of patient notes to an EMR system.',
                icon: "icon-trophy"
            },
            {
                date: "2018",
                title: "$500 Second Place",
                position: "Basic Needs Security Case Competition",
                description: 'Won $500 as second-place prize across all UC campuses in case competition centered on finding solutions to food insecurity. Presented <a href="https://drive.google.com/file/d/1XTbHJpNa9mRlW-oVn1Gwd9F5C5krA4Fq/view?usp=sharing">this slide deck</a> with our solutions.',
                icon: "icon-trophy"
            },
        ]
    },
];
(function ($) {
    for (var i = 0; i < CONTENT.length; i++) {
        var section = CONTENT[i];
        console.log(section);

        $('.content').append(
            `
            <div id="${section.id}" class= "page">
                <h2 class="heading">${section.name}</h2>
            </div>
            `
        );

        console.log(section);

        for (var j = 0; j < section.experiences.length; j++) {
            var experience = section.experiences[j];

            console.log(experience);
            console.log(section.id)

            $(`#${section.id}`).append(
                `
                <div class="resume-wrap d-flex ftco-animate">
                    <div class="icon d-flex align-items-center justify-content-center">
                        <span class="${experience.icon}"></span>
                    </div>
                    <div class="text pl-3">
                        <span class="date">${experience.date}</span>
                        <h2>${experience.title}</h2>
                        <span class="position">${experience.position}</span>
                        <p>${experience.description}</p>
                    </div>
                </div>
                `
            )
        }
    }
})(jQuery);