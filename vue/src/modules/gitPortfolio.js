import { ref } from 'vue'

// thumbnail  img

import BBQ_thumbnail from '@/assets/BBQ/BBQ_thumbnail.jpg'
import Gjesing_thumbnail from '@/assets/cc_poster_ gjesing/gjesing_poster_thumbnail.jpg'
import csvpa_thumbnail from '@/assets/csvpa/rhino_poster_thumbnail.jpg'
import duck_thumbnail from '@/assets/Duck/duck_welcome_poster_ thumbnail.jpg'
import foxcar_thumbnail from '@/assets/fox_car/fox_car_thumbnail.jpg'
import gamejam_thumbnail from '@/assets/game_jam_2022_fox_chiken/we_are_moving_gamecover_thumbnail.jpg'
import ux_2022_thumbnail from '@/assets/UX_2022/ux_thumbnail.jpg'


const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'BBQ',
        subTitle: 'her kemur okkurt',
        description: 'This is the first portfolio item',
        text: 'okkurt um bbq',
        // gør sådan istedet for:
        thumbnail: BBQ_thumbnail,
        //thumbnail: '/src/assets/BBQ/mockup computer og mobil.png',
        videos: [
        ],
        images: [
            '/src/assets/BBQ/mockup_computer_og_mobil_Small.png',
            '/src/assets/BBQ/a_LOGO_WHITE_TEST_black_backgrund_Small.png',
            '/src/assets/BBQ/K_logo_black_background.png',
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
        thumbnail: Gjesing_thumbnail,
        videos: [
        ],
        images: ['/src/assets/cc poster gjesing/A1 poster_gjesing.png'],
        category: ['Graphic design'],
    },
    {
        id: 3,
        title: 'CSVPA',
        subTitle: 'her kemur okkurt',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        thumbnail: csvpa_thumbnail,
        videos: [
        ],
        images: ['/src/assets/csvpa/rhino poster.jpg'],
        category: ['Graphic design'],
    },
    {
        id: 4,
        title: 'DUCK',
        subTitle: 'her kemur okkurt',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        thumbnail: duck_thumbnail,
        videos: [
        ],
        images: [
            '/src/assets/Duck/VÆLKOMMIN plakat final.jpg',
            '/src/assets/Duck/4 ducks.png',
            '/src/assets/Duck/posters_on_a_wall.png'
        
        ],
        category: ['Graphic design'],
    },
    {
        id: 5,
        title: 'FOX',
        subTitle: 'her kemur okkurt um fox car',
        description: 'This is the first portfolio item',
        text: 'okkurt um fox',
        thumbnail: foxcar_thumbnail,
        videos: [
            '/src/assets/fox_car/fox car.mp4'
        ],
        images: [
            '/src/assets/fox_car/fox_car_natur_background_thumbnail.png',
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
        thumbnail: gamejam_thumbnail,
        videos: [
        ],
        images: [
            '/src/assets/game_jam_2022_fox_chiken/WE_ARE_MOVING_with_fox_Small.png',
            '/src/assets/game_jam_2022_fox_chiken/chiken_and_cik.png',
            '/src/assets/game_jam_2022_fox_chiken/fox.png'
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
        thumbnail: ux_2022_thumbnail,
        videos: [
        ],
        images: [
            '/src/assets/UX_2022/ux_sem1_phone_muckup.png',
            '/src/assets/UX_2022/all_of_the_screens.png',
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
        videos: [
        ],
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