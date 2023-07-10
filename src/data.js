const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis lacus porttitor magna dignissim, vitae blandit quam commodo. Proin quis quam semper, finibus turpis auctor, egestas dolor. Etiam luctus fermentum dolor, pulvinar vulputate justo tincidunt nec.'

export const projects = [
    {
        title: 'Portfolio Site',
        subtitle: '',
        description: lipsum,
        deployedLink: '',
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            deployed: "https://github.com/AbbeneI/knucklebones",
            codepen: "https://github.com/AbbeneI/knucklebones",
            github: "https://github.com/AbbeneI/knucklebones",
        }
    },
    {
        title: 'Soundify',
        subtitle: 'Role: Front End Development/Design Lead',
        description: "Soundify is a full stack music playlist-sharing application created in a team of five over the course of a week. Soundify is built with Python and Django, connects to a Postgresql database hosted by AWS, and calls the RESTful Spotify API with the Spotipy Python library. The UI is designed in Figma and styled with a custom design system built using CSS3, including flexbox and grid layouts.",
        tags: ['Spotify API', 'Python', 'Express', 'Node.js', 'MongoDB', 'Mongoose'],
        image: 'images/Soundify_logo_grn.svg',
        imageAlt: '',
        links: {
            deployed: "https://soundify-ahje.onrender.com/",
            github: "https://github.com/seanh101/Soundify",
        }
    },
    {
        title: 'ReadMe',
        description: lipsum,
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            deployed: "",
            codepen: "",
            github: "",
        }
    },
    {
        title: 'Knucklebones',
        description: lipsum,
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            github: "https://github.com/AbbeneI/knucklebones",
            codepen: "",
        }
    }
]
