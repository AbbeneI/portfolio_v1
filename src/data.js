const lipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis lacus porttitor magna dignissim, vitae blandit quam commodo. Proin quis quam semper, finibus turpis auctor, egestas dolor. Etiam luctus fermentum dolor, pulvinar vulputate justo tincidunt nec.'

export const projects = [
    {
        title: 'Portfolio Site',
        subtitle: '',
        description: "My personal portfolio site, designed in Figma and coded in React.",
        deployedLink: '',
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            deployed: "",
            codepen: "",
            github: "https://github.com/AbbeneI/portfolio_v1",
        }
    },
    {
        title: 'Soundify',
        subtitle: 'Role: Front End Development/Design Lead',
        description: "Soundify is a full stack music playlist-sharing application created in a team of five over the course of a week. Soundify is built with Python and Django, connects to a Postgresql database hosted by AWS, and calls the RESTful Spotify API with the Spotipy Python library. The UI is designed in Figma and styled with a custom design system built using CSS3, including flexbox and grid layouts.",
        tags: ['Spotify API', 'Express', 'Node.js', 'MongoDB', 'Mongoose', 'HTML5', 'CSS3', 'Figma'],
        image: 'images/Soundify_logo_grn.svg',
        imageAlt: '',
        links: {
            deployed: "https://soundify-ahje.onrender.com/",
            github: "https://github.com/seanh101/Soundify",
        }
    },
    {
        title: 'ReadMe',
        description: "A digital library application built with the Google Books API. This was my first project working with an API, and was a very fun challenge. The app uses Express, Node.js and Javascript to connect to a MongoDB database and store books the user selects via the Google Books API in bookshelves.",
        tags: ['Google Books API', 'Python', 'Node.js', 'Postman', 'Express', 'MongoDB', 'Mongoose', 'Figma'],
        image: '',
        links: {
            deployed: "https://mylibrary.fly.dev/",
            codepen: "",
            github: "https://github.com/AbbeneI/ReadMe",
        }
    },
    {
        title: 'Knucklebones',
        description: "<p> Coded <a href='https://www.cultofthelamb.com/'>Cult of the Lamb's </a> dice minigame Knucklebones in the browser.</p>",
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            deployed: "",
            github: "https://github.com/AbbeneI/knucklebones",
            codepen: "",
        }
    }
]
