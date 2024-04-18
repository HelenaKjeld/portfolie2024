import { ref } from 'vue'

// thumbnail  img

import BBQ_thumbnail from '@/assets/BBQ/BBQ_thumbnail.jpg'
import Gjesing_thumbnail from '@/assets/cc_poster_ gjesing/gjesing_poster_thumbnail.jpg'
import csvpa_thumbnail from '@/assets/csvpa/rhino_poster_thumbnail.jpg'
import duck_thumbnail from '@/assets/Duck/duck_welcome_poster_ thumbnail.jpg'
import foxcar_thumbnail from '@/assets/fox_car/fox_car_thumbnail.jpg'
import gamejam_thumbnail from '@/assets/game_jam_2022_fox_chiken/we_are_moving_gamecover_thumbnail.jpg'
import ux_2022_thumbnail from '@/assets/UX_2022/ux_thumbnail.jpg'
import fish_box_plaskit from '@/assets/fishes_box_plaskit.jpg'
import vandman_thumbnail from '@/assets/vandman_thumbnail.jpg'


// images for ProjectView

import BBQ_computer_mockup from '@/assets/BBQ/mockup_computer_og_mobil_Small.png'
import BBQ_main_logo from '@/assets/BBQ/a_LOGO_WHITE_TEST_black_backgrund_Small.png'
import BBQ_2st_logo from '@/assets/BBQ/K_logo_black_background.png'

import Gjesing_poster from '@/assets/cc_poster_ gjesing/A1_poster_gjesing.png'

import csvpa_poster from '@/assets/csvpa/rhino_poster.jpg'

import duck_poster from '@/assets/Duck/VÆLKOMMIN plakat final.jpg'
import duck_4images from '@/assets/Duck/4 ducks.png'
import duck_posters_on_wall from '@/assets/Duck/posters_on_a_wall.png'

import foxcar_image from '@/assets/fox_car/fox_car_natur_background_thumbnail.png'
import foxcar_video from '@/assets/fox_car/fox car.mp4'

import gamejam_game_cover from '@/assets/game_jam_2022_fox_chiken/WE_ARE_MOVING_with_fox_Small.png'
import gamejam_chikens from '@/assets/game_jam_2022_fox_chiken/chiken_and_cik.png'
import gamejam_fox from '@/assets/game_jam_2022_fox_chiken/fox.png'

import ux_2022_mockup from '@/assets/UX_2022/ux_sem1_phone_muckup.png'
import ux_2022_all_pages from '@/assets/UX_2022/all_of_the_screens.png'

import vandman_poster from '@/assets/poster_vandman_Small.png'



const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'BBQ',
        subTitle: 'LongHorn BBQ Projekt',
        description: 'UX, UI og web: Prepared a prototype of a website',
        text: 'For our final project in the first semester, our case was the LongHorn BBQ competition Denmark 2022. We made a wed prototype with several pages and two different logos.',
        WorkWith: 'Worked with: Alberte,Anne-sofie og Dream',
        thumbnail: BBQ_thumbnail,
        images: [
            BBQ_computer_mockup,
            BBQ_main_logo,
            BBQ_2st_logo,
        ],
        category: [
            'Web',
            'Illustration',
            'UX'
        ]
    },
    {
        id: 2,
        title: 'Gjesing Poster',
        subTitle: '',
        description: 'Graphic design ',
        text: 'This poster is for Gjesing area in Esbjerg.The poster shows that Esbjerg has a lot of green areas withe wild animals such as deer. And that Esbjerg isnt just a port.',
        thumbnail: Gjesing_thumbnail,
        images: [
             Gjesing_poster 
            ],
        category: [
            'Graphic design'
        ],
    },
    {
        id: 3,
        title: 'Rhino',
        subTitle: 'Poster',
        description: 'Graphic design',
        text: 'This rhino poster was made a response for WWF posters that are quite graphic. And most people dont want look at them. This poster was made more family friendly, but the messages still gets across.',
        thumbnail: csvpa_thumbnail,
        images: [ 
            csvpa_poster 
        ],
        category: [
            'Graphic design'
        ],
    },
    {
        id: 4,
        title: 'DUCK',
        subTitle: 'Poster and Signs',
        description: '',
        text: 'This is poster and signs were made as a proposal for a swimming i Klaskvík',
        thumbnail: duck_thumbnail,
        images: [
            duck_poster,
            duck_4images,
            duck_posters_on_wall,
        ],
        category: [
            'Graphic design'
        ],
    },
    {
        id: 5,
        title: 'FOX',
        subTitle: 'her kemur okkurt um fox car',
        description: 'This is the first portfolio item',
        text: 'okkurt um fox',
        thumbnail: foxcar_thumbnail,
        videos: [
            foxcar_video,
        ],
        images: [
            foxcar_image,
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
        images: [
            gamejam_game_cover,
            gamejam_chikens,
            gamejam_fox,
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
        WorkWith: 'Worked with: Ida',
        thumbnail: ux_2022_thumbnail,
        images: [
            ux_2022_mockup,
            ux_2022_all_pages,
        ],
        category: [
            'UX',
        ]
    }, 
    {
        id: 8,
        title: 'Aquarius',
        subTitle: 'her kemur okkurt Aquarius',
        description: 'This is the first portfolio item',
        text: 'okkurt um UX',
        thumbnail: vandman_thumbnail,
        images: [
            vandman_poster,
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 
    ])


    return { portfolioItems }
}

export default gitPortfolioItems