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
            'Illustration'
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
        subTitle: 'her kemur okkurt um fox car',
        description: 'This is the first portfolio item',
        text: 'okkurt um fox',
        thumbnail: '/src/assets/fox car/fox_car_black_background.png',
        video: '/src/assets/fox car/fox car.mp4',
        images: [
            '/src/assets/fox car/fox_car_black_background.png',
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 
    {
        id: 6,
        title: 'Game Jam',
        subTitle: 'her kemur okkurt um Game Jam',
        description: 'This is the first portfolio item',
        text: 'okkurt um Game Jam',
        thumbnail: '/src/assets/game jam 2022 fox chiken/WE ARE MOVINg with fox.png',
        video: '',
        images: [
            '/src/assets/game jam 2022 fox chiken/WE ARE MOVINg with fox.png',
            '/src/assets/game jam 2022 fox chiken/chiken and cik.png',
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 
    {
        id: 7,
        title: 'UX',
        subTitle: 'her kemur okkurt um UX',
        description: 'This is the first portfolio item',
        text: 'okkurt um UX',
        thumbnail: '/src/assets/UX 2022/ux_sem1_phone_muckup.png',
        video: '',
        images: [
            '/src/assets/UX 2022/ux_sem1_phone_muckup.png',
            '/src/assets/UX 2022/æic of all screens.png',
        ],
        category: [
            'UX',
        ]
    }, 
    {
        id: 8,
        title: 'Fish Box',
        subTitle: 'her kemur okkurt Fish Box',
        description: 'This is the first portfolio item',
        text: 'okkurt um UX',
        thumbnail: '/src/assets/46880987_283095715676858_7357034864991797248_n.jpg',
        video: '',
        images: [
            '/src/assets/46880987_283095715676858_7357034864991797248_n.jpg',
        ],
        category: [
            'UX',
        ]
    }, 
    ])


    return { portfolioItems }
}

export default gitPortfolioItems