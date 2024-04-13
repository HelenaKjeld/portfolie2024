import { ref } from 'vue'

const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'BBQ',
        subTitle: 'her kemur okkurt',
        description: 'This is the first portfolio item',
        text: 'okkurt um bbq',
        thumbnail: '/src/assets/BBQ/mockup computer og mobil.png',
        images: [
            '/src/assets/BBQ/mockup computer og mobil.png',
            '/src/assets/BBQ/a LOGO WHITE TEST black backgrund.png',
            '/src/assets/BBQ/K logo black background.png',
        ],
        category: [
            'Web',
            'Illustraton'
        ]
    },
    {
        id: 2,
        title: 'Gjesing Poster',
        subTitle: 'her kemur okkurt',
        description: 'This is the 2 portfolio item',
        text: 'okkurt um gjesing poster',
        thumbnail: '/src/assets/cc poster gjesing/A1 poster_gjesing.png',
        images: ['/src/assets/cc poster gjesing/A1 poster_gjesing.png'],
        category: ['Graphic design'],
    },
    {
        id: 3,
        title: 'CSVPA',
        subTitle: 'her kemur okkurt',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        thumbnail:'/src/assets/csvpa/rhino poster.jpg',
        images: ['/src/assets/csvpa/rhino poster.jpg'],
        category: ['Graphic design'],
    },
    {
        id: 4,
        title: 'DUCK',
        subTitle: 'her kemur okkurt',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        thumbnail: '/src/assets/Duck/VÆLKOMMIN plakat final.jpg',
        images: [
            '/src/assets/Duck/VÆLKOMMIN plakat final.jpg',
            '/src/assets/Duck/4 ducks.jpg',
            '/src/assets/Duck/posters_on_a_wall.jpg'
        
        ],
        category: ['Graphic design'],
    },
    {
        id: 5,
        title: 'FOX',
        subTitle: 'her kemur okkurt',
        description: 'This is the first portfolio item',
        text: 'okkurt um fox',
        thumbnail: '/src/assets/BBQ/mockup computer og mobil.png',
        
        images: [
            '/src/assets/BBQ/mockup computer og mobil.png',
            '/src/assets/BBQ/a LOGO WHITE TEST black backgrund.png',
            '/src/assets/BBQ/K logo black background.png',
        ],
        category: [
            'Web',
            'Illustraton'
        ]
    }, 
    ])


    return { portfolioItems }
}

export default gitPortfolioItems