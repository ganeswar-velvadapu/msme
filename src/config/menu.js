const main = [
  {
    "name": "Home",
    "url": "/",
  },
  {
    "name": "About Us",
    "url": "/about",
    "hasChildren": true,
    "children": [
      {
        "name": "Message from HOD",
        "url": "/about"
      },
    ]
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
    "url": "/people",
    "hasChildren": true,
    "children": [
      {
        "name": "Faculty",
        "url": "/people/faculty"
      },
      {
        "name": "Staff",
        "url": "/people/staff"
      },
      {
        "name": "Students",
        "url": "/people/students/ug",
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
    "name": "Academia",
    "url": "/academia",
    "hasChildren": true,
    "children": [
      {
        "name": "Programs",
        "url": "/academia",
        "hasChildren": true,
        "children": [
          {
            "name": "B Tech",
            "url": "https://sites.google.com/ce.iith.ac.in/environmental/home"
          },
          {
            "name": "M Tech",
            "url": "https://sites.google.com/view/geotech-iith/"
          },
          {
            "name": "PhD",
            "url": "https://sites.google.com/ce.iith.ac.in/hydraulic-and-water-resources-/home?authuser=0"
          },
        ]
      },
      {
        "name": "UG Course Curriculum",
        "url": "https://sites.google.com/ce.iith.ac.in/environmental/home",
      },
      {
        "name": "PG Course Curriculum",
        "url": "/facilities/computational"
      },
      {
        "name": "Labs",
        "url": "/facilities/computational"
      },
      {
        "name": "Time Table",
        "url": "/facilities/computational"
      }
    ]
  },
  {
    "name": "Careers",
    "url": "/activities",

  },
  {
    "name": "Contact",
    "url": "/resources",
  }
]

export default main

