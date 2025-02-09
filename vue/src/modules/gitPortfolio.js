import { ref } from 'vue'

// thumbnail  img

import BBQ_thumbnail from '@/assets/BBQ/BBQ_thumbnail.webp'
import Gjesing_thumbnail from '@/assets/cc_poster_ gjesing/gjesing_poster_thumbnail.webp'
import csvpa_thumbnail from '@/assets/csvpa/rhino_poster_thumbnail.webp'
import duck_thumbnail from '@/assets/Duck/duck_welcome_poster_ thumbnail.webp'
import foxcar_thumbnail from '@/assets/fox_car/fox_car_thumbnail.webp'
import gamejam_thumbnail from '@/assets/game_jam_2022_fox_chiken/we_are_moving_gamecover_thumbnail.webp'
import ux_2022_thumbnail from '@/assets/UX_2022/ux_thumbnail.webp'
import vandman_thumbnail from '@/assets/vandman_thumbnail.webp'
import UX_2024_thomnail from '@/assets/UX_2024/UX_2024_thomnail.webp'
import fantasy_festival_thomnail from '@/assets/Fantasy_festival/fantasy_festival_thumbnail.webp'


// images for ProjectView

import BBQ_computer_mockup from '@/assets/BBQ/mockup_computer_og_mobil_Small.webp'
import BBQ_main_logo from '@/assets/BBQ/a_LOGO_WHITE_TEST_black_backgrund_Small.webp'
import BBQ_2st_logo from '@/assets/BBQ/K_logo_black_background.webp'

import Gjesing_poster from '@/assets/cc_poster_ gjesing/A1_poster_gjesing.webp'

import csvpa_poster from '@/assets/csvpa/rhino_poster.webp'

import duck_poster from '@/assets/Duck/VÆLKOMMIN plakat final.webp'
import duck_4images from '@/assets/Duck/4 ducks.webp'
import duck_posters_on_wall from '@/assets/Duck/posters_on_a_wall.webp'

import foxcar_image from '@/assets/fox_car/fox_car_natur_background_thumbnail.webp'
import foxcar_video from '@/assets/fox_car/fox car.mp4'

import gamejam_game_cover from '@/assets/game_jam_2022_fox_chiken/WE_ARE_MOVING_with_fox_Small.webp'
import gamejam_chikens from '@/assets/game_jam_2022_fox_chiken/chiken_and_cik.webp'
import gamejam_fox from '@/assets/game_jam_2022_fox_chiken/fox.webp'

import ux_2022_mockup from '@/assets/UX_2022/ux_sem1_phone_muckup.webp'
import ux_2022_all_pages from '@/assets/UX_2022/all_of_the_screens.webp'

import UX_2024_img_1 from '@/assets/UX_2024/UX_2024_img_1.webp'
import UX_2024_img_2 from '@/assets/UX_2024/UX_2024_img_2.webp'
import UX_2024_img_3 from '@/assets/UX_2024/UX_2024_img_3.webp'
import UX_2024_img_4 from '@/assets/UX_2024/UX_2024_img_4.webp'

import vandman_poster from '@/assets/poster_vandman_Small.webp'

import fantasy_pc_phone from '@/assets/Fantasy_festival/ps_and_phone_mockup.webp'
import fantasy_folder from '@/assets/Fantasy_festival/the_folder_laded_out.webp'
import fantasy_primer_pro from '@/assets/Fantasy_festival/primer_pro.webp'
import fantasy_facese from '@/assets/Fantasy_festival/facese.webp'

import III_phone from '@/assets/3D_Phone/phone.webp'
import tomatos_IIID from '@/assets/3D_Phone/tomatos 3D.webp'
import tomatos_IID from '@/assets/3D_Phone/tomatoss.webp'


// images of tools used ProjectView

import XD from '@/assets/icons/XD.svg'
import after_effects from '@/assets/icons/After_Effects.svg'
import illustrater from '@/assets/icons/illustrater.svg'
import indesign from '@/assets/icons/InDesign.svg'
import photoshop from '@/assets/icons/photoshop.svg'
import premiere from '@/assets/icons/Premiere.svg'
import visual_studio_code from '@/assets/icons/Visual_Studio_Code_1.35_icon.svg.png'
import vue from '@/assets/icons/vue.svg'
import wordpress from '@/assets/icons/wordpress.png'


const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'Longhorn BBQ Project',
        subTitle: 'UX, UI og web',
        description: 'UI/UX, and Web: From Design to Execution',
        text: [
            'For our final project in the first semester, we had to design a website using Adobe XD and implement it using HTML, CSS and JavaScript. Our case was the LongHorn BBQ competition 2022 held in Denmark. We made a web prototype that featured several pages and we also designed two different logos.', 
            'Repository: https://github.com/HelenaKjeld/BBQ-DM-2023'
        ],
        WorkWith: 'Collaborators: Alberte, Anne-sofie and Dream',
        thumbnail: BBQ_thumbnail,
        tools:[
            XD, illustrater, visual_studio_code
        ],
        images: [
            {
                imageUrl:  BBQ_computer_mockup,
                width: 720,
                height: 480,
            },
            {
                imageUrl:  BBQ_main_logo,
                width: 681,
                height: 480,
            },
            {
                imageUrl:  BBQ_2st_logo,
                width: 2197,
                height: 1869,
            },
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
        subTitle: 'Poster',
        description: 'Graphic design ',
        text: ['This poster is for Gjesing area in Esbjerg. The poster shows that Esbjerg has a lot of green areas with wild animals such as deer. And that Esbjerg is not just a port.'],
        thumbnail: Gjesing_thumbnail,
        tools:[
            illustrater, indesign
        ],
        images: [
            {
                imageUrl:  Gjesing_poster,
                width: 3073,
                height: 4350,
            },
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
        text: ["This rhino poster was made as a response for the WWF posters that were quite graphic. Most people don't want to look at them. This poster was made to be more family friendly while still getting its message across."],
        thumbnail: csvpa_thumbnail,
        tools:[
            photoshop, 
        ],
        images: [ 
            {
                imageUrl:  csvpa_poster,
                width: 2480,
                height: 3508,
            },
        ],
        category: [
            'Graphic design'
        ],
    },
    {
        id: 4,
        title: 'DUCK',
        subTitle: 'Poster and Signs',
        description: 'Graphic design',
        text: ['The poster and signs were made as a proposal for the swimming pool in Klaksvík, Faroe Islands.'],
        thumbnail: duck_thumbnail,
        tools:[
            illustrater, indesign, photoshop
        ],
        images: [
            {
                imageUrl:  duck_poster,
                width: 842,
                height: 1191,
            },
            {
                imageUrl:  duck_4images,
                width: 2362,
                height: 2362,
            },
            {
                imageUrl:  duck_posters_on_wall,
                width: 4500,
                height: 2909,
            },
            
        ],
        category: [
            'Graphic design'
        ],
    },
    {
        id: 5,
        title: 'FOX',
        subTitle: 'Video and Animation',
        description: 'Graphic design og Illustration',
        text: ['This was a self initated project to learn more about animation in Adobe After Effects.'],
        thumbnail: foxcar_thumbnail,
        tools:[
            illustrater, after_effects
        ],
        videos: [
            foxcar_video,
        ],
        images: [
            {
                imageUrl:  foxcar_image,
                width: 3508,
                height: 2481,
            },
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 
    {
        id: 6,
        title: 'Game Jam',
        subTitle: 'cover and Characters',
        description: 'Graphic design and Illustration',
        text:  ["Game Jams are a team-based collaborative events focusing on creating video games within 48 hours, often during a single weekend. This video game that we made is called 'We are Moving'. The game, its cover and characters, are based on the old children game, 'Alle mine kyllinger små'."],
        thumbnail: gamejam_thumbnail,
        tools:[
            illustrater, 
        ],
        images: [
            {
                imageUrl:  gamejam_game_cover,
                width: 854,
                height: 463,
            },
            {
                imageUrl:  gamejam_chikens,
                width: 1190,
                height: 1193,
            },
            {
                imageUrl:  gamejam_fox,
                width: 1773,
                height: 210,
            },
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 
    {
        id: 7,
        title: 'UX 2022',
        subTitle: 'Ui, UX and XD prototype',
        description: '',
        text: ['This is a design mockup for a mobile application that helps users with finding jobs.'],
        WorkWith: 'Collaborates with: Ida',
        thumbnail: ux_2022_thumbnail,
        tools:[
            XD, photoshop
        ],
        images: [
            {
                imageUrl:  ux_2022_mockup,
                width: 2600,
                height: 2100,
            },
            {
                imageUrl:  ux_2022_all_pages,
                width: 4571,
                height: 2197,
            },
        ],
        category: [
            'UX',
        ]
    },
    {
        id: 8,
        title: 'UX 2024',
        subTitle: 'UI/UX and XD Prototype',
        description: 'Self-Service Kiosk App',
        tools:[
            XD
        ],
        text: [
            'As a part of the EASV Multimedia Design education, I, together with a group, produced a UI/UX mockup of a self-service kiosk app, for the hardware store Harald Nyborg',
            'This concept is an attempt at assisting customers finding the products they are looking for, as well as their locations in the stores.'
            ],
        WorkWith: 'Collaborators: Freia, Dörfler, Helene, Sjørslev og Ronja, Kirchheiner',
        thumbnail: UX_2024_thomnail,
        tools:[
            XD, 
        ],
        images: [
            {
                imageUrl:  UX_2024_img_1,
                width: 2445,
                height: 2327,
            },
            {
                imageUrl:  UX_2024_img_2,
                width: 2445,
                height: 2114,
            },
            {
                imageUrl:  UX_2024_img_3,
                width: 2445,
                height: 1831,
            },
            {
                imageUrl:  UX_2024_img_4,
                width: 2445,
                height: 1831,
            },
        ],
        category: [
           'UX'
        ]
    }, 
    {
        id: 9,
        title: 'Aquarius',
        subTitle: 'Poster',
        description: 'Graphic design Illustration',
        text: ['This was a self initiated project inspired by the children cartoon Puffin Rock.'],
        thumbnail: vandman_thumbnail,
        tools:[
            illustrater, 
        ],
        images: [
            {
                imageUrl:  vandman_poster,
                width: 480,
                height: 679,
            },
        ],
        category: [
            'Graphic design',
            'Illustration'
        ]
    }, 

    {
        id: 10,
        title: "Fantasy Festival 2024",
        subTitle: "UX, UI, web, Video and Animation",
        description: "",
        text: [
          "This is my 2 semster project, that was making made in collaboration with the Fantasy festival with the focus on the quest part of the festival. They wanted a website that shows that they have a day quest, which is for more family oriented and an evening quest which is more grown-up oriented. they also wanted a way for the quest goers to know that they were on the right path. As such we made a folder and a map made out of wood where they would get a new piece of the map after the quest, scorers solved puzzles. if we were also asked to make a trailer for the festival quest such I used the characters from the quest which they provided and made an animated trailer that to that taunts the viewer into doing the quest",
          "Repository: https://github.com/Sinyedu/Fantasy-Festival",
        ],
        thumbnail: fantasy_festival_thomnail,
        WorkWith: "Collaborators: Simon, Benjamin and Ida",
        tools: [
          illustrater,
          indesign,
          photoshop,
          XD,
          after_effects,
          visual_studio_code,
          premiere,
        ],
        images: [
          {
            imageUrl: fantasy_pc_phone,
            width: 3268,
            height: 1992,
            alt: "Fantasy festival pc and phone mockup",
          },
          {
            imageUrl: fantasy_folder,
            width: 5185,
            height: 2055,
          },
          {
            imageUrl: fantasy_primer_pro,
            width: 2500,
            height: 1875,
          },
          { 
            imageUrl: fantasy_facese ,
            width: 997,
            height: 657,
        },
        ],
        youtube_videos: [
            "tAbEIZI9dZ8",
        ],
        category: ["Graphic design", "Illustration", "Web"],
    },



    {
        id: 11,
        title: '3D in illustrator',
        subTitle: 'Illustration',
        description: '',
        text: ['In this project I experimented with the #D aption in illustrator where I used the inflate function'
        ],
        thumbnail: III_phone ,
        WorkWith: '',
        tools:[
            illustrater, 
        ],
        images: [
            {
                imageUrl:  III_phone,
                width: 1772,
                height: 1772,
            },
            {
                imageUrl:  tomatos_IIID,
                width: 1496,
                height: 1731,
            },
            {
                imageUrl:  tomatos_IID,
                width: 1500,
                height: 1735,
            },

        ],
        category: [
            'Illustration'
        ]


    }

 
    ].reverse())


    return { portfolioItems }
}

export default gitPortfolioItems