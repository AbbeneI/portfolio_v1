export const projects = [
    {
        title: 'Portfolio Site',
        subtitle: '',
        description: "My personal portfolio site, designed in Figma and coded in React.",
        deployedLink: '',
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript', 'Figma'],
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
        team: [
            {
                name: 'Ian Abbene',
                img: '',
                role: 'Front End Lead'
            },
            {
                name: 'Marley Sellem',
                img: '',
                role: 'Scrum Master'
            },
            {
                name: 'Jon Schiavone',
                img: '',
                role: 'Back End Lead'
            },
            {
                name: 'Chase Hilsinger',
                img: '',
                role: ''
            },
            {
                name: 'Sean',
                img: '',
                role: 'Github Manager'
            }
        ],
        description: "Soundify is a <span class='purple-text'>full stack music playlist-sharing application</span> created in a team of five over the course of a week. Soundify is built with Python and Django, connects to a Postgresql database hosted by AWS, and calls the RESTful Spotify API with the Spotipy Python library. The UI is designed in Figma and styled with a custom design system built using CSS3, including flexbox and grid layouts.",
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
        description: "A <span class='purple-text'>digital library application</span> built with the Google Books API and Google OAuth. The app uses Express, Node.js and Javascript to connect to a MongoDB database and store books the user selects via the Google Books API in bookshelves.",
        tags: ['Google Books API', 'Python', 'Node.js', 'Postman', 'Express', 'MongoDB', 'Mongoose', 'Figma'],
        image: '',
        links: {
            deployed: "https://mylibrary.fly.dev/",
            github: "https://github.com/AbbeneI/ReadMe",
        }
    },
    {
        title: 'Knucklebones',
        description: "<p> Coded <a href='https://www.cultofthelamb.com/'>Cult of the Lamb's</a> dice minigame Knucklebones in the browser.</p>",
        tags: ['HTML5', 'CSS3', 'Greensock', 'JavaScript'],
        image: '',
        links: {
            deployed: "",
            github: "https://github.com/AbbeneI/knucklebones",
        }
    }
]

export const socialLinks = {
    github: "https://github.com/AbbeneI",
    linkedin: "https://linkedin.com/in/ian-abbene",
    medium: "https://medium.com/@ianabbene_86410",
    codepen: "https://codepen.io/IAbbene"
}
