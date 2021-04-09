
export class MovieDataElement {
    id: number | undefined;
    title: string | undefined;
    shortDesc: string | undefined;
    stars: string | undefined;
    img: any;
    year: string | undefined;

}
export const MovieData: MovieDataElement[] = [
    {
        id: 1,
        title: 'The Godfather I',
        shortDesc: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.',
        stars: `Marlon Brando, Al Pacino, James Caan`,
        img: 'https://reelaffinity.files.wordpress.com/2013/09/29a-the-godfather-1972.jpg',
        year:'1972'
    },
    {
        id: 2,
        title: 'The Godfather II',
        shortDesc: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        stars: `Al Pacino, Robert De Niro, Robert Duvall`,
        img: 'https://static.wikia.nocookie.net/godfather/images/8/87/The_Godfather_Part_II.jpg',
        year:'1974'
    },
    {
        id: 3,
        title: 'The Godfather III',
        shortDesc: 'Follows Michael Corleone, now in his 60s, as he seeks to free his family from crime and find a suitable successor to his empire.',
        stars: `Al Pacino, Diane Keaton, Andy Garcia`,
        img:'https://upload.wikimedia.org/wikipedia/en/5/55/GodfatherIII2.jpg',
        year: '1992'
    },
    {
        id: 4,
        title: 'I Origins',
        shortDesc:'A molecular biologist and his laboratory partner uncover evidence that may fundamentally change society as we know it.',
        stars: `Michael Pitt, Steven Yeun, Astrid Bergès-Frisbey `,
        img:'https://upload.wikimedia.org/wikipedia/commons/6/65/Eye_iris.jpg',
        year:'2004'
        
    }
];