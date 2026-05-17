const main = [
    {
        "name": "Home",
        "url": "/",
    },
    {
        "name": "About",
        "url": "/about",
    },
    {
        "name": "Research",
        "url": "/research/areas",
        "hasChildren": true,
        "children": [
            {
                "name": "Research Areas",
                "url": "/research/areas",
            },
            {
                "name": "Research Facilities",
                "url": "/research/facilities",
            },
            {
                "name": "Projects",
                "url": "/research/projects",
            },
            {
                "name": "Collaborations",
                "url": "/research/collaborations",
            }
        ]
    },
    {
        "name": "People",
        "url": "/people/faculty",
        "hasChildren": true,
        "children": [
            {
                "name": "Faculty",
                "url": "/people/faculty"
            },
            {
                "name": "Distinguished Faculty",
                "url": "/people/distinguished"
            },
            {
                "name": "Adjunct Faculty",
                "url": "/people/adjunct"
            },
            {
                "name": "Professors of Practice",
                "url": "/people/pop"
            },
            {
                "name": "Staff",
                "url": "/people/staff"
            },
            {
                "name": "Students",
                "url": "/people/students/btech",
                "hasChildren": true,
                "children": [
                    {
                        "name": "B Tech",
                        "url": "/people/students/btech"
                    },
                    {
                        "name": "M Tech",
                        "url": "/people/students/mtech"
                    },
                    {
                        "name": "PhD",
                        "url": "/people/students/phd"
                    }
                ]
            },
            {
                "name": "Alumni",
                "url": "/people/alumni"
            }
        ]
    },
    {
        "name": "Academics",
        "url": "/academia/programs/btech",
        "hasChildren": true,
        "children": [
            {
                "name": "Programs",
                "url": "/academia/programs/btech",
                "hasChildren": true,
                "children": [
                    {
                        "name": "B Tech",
                        "url": "/academia/programs/btech"
                    },
                    {
                        "name": "M Tech",
                        "url": "/academia/programs/mtech"
                    },
                    {
                        "name": "PhD",
                        "url": "/academia/programs/phd"
                    },
                    {
                        "name": "Interdisciplinary",
                        "url": "https://www.cip.iith.ac.in/programs"
                    },
                ]
            },
            {
                "name": "Time Table",
                "url": "/academia/timetable"
            }
        ]
    },
    {
        "name": "Admissions",
        "url": "/admissions/btech",
        "hasChildren": true,
        "children": [
            {
                "name": "B.Tech",
                "url": "/admissions/btech"
            },
            {
                "name": "M.Tech",
                "url": "/admissions/mtech"
            },
            {
                "name": "PhD",
                "url": "/admissions/phd"
            },
        ]
    },
    {
        "name": "Careers",
        "url": "https://www.iith.ac.in/careers/",
        "hasChildren": true,
        children: [
            {
                "name": "Join Us",
                "url": "https://www.iith.ac.in/careers/"
            },
            {
                "name": "Placements",
                "url": "/careers/placements"
            },
        ]
    },
    {
        "name": "Contact Us",
        "url": "/contact",
    },
];


export default main