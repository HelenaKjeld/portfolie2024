import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'BBQ',
        description: 'This is the first portfolio item',
        text: 'okkurt um bbq',
        image: '/src/assets/BBQ/mockup computer og mobil.png',
        category: 'Web',
        category: 'Lllustraton',
        // detail: {
        //     title: "BEST SHIP PAINTING EVER!",
        //     coverImage: "link",
        //     paintedDate: "2024-01-22",
        //     images: [
        //         "",
        //         "",
        //     ] 
        // }
    },

    {
        id: 2,
        title: 'Gjesing Poster',
        description: 'This is the 2 portfolio item',
        text: 'okkurt um gjesing poster',
        image: '//src/assets/cc poster gjesing',
        category: 'Graphic design',
    },
    {
        id: 3,
        title: 'CSVPA',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        image: '//src/assets/csvpa/rhino poster.jpg',
        category: 'Graphic design',
    },
    {
        id: 4,
        title: 'DUCK',
        description: 'This is the 3 portfolio item',
        text: 'okkurt um CSVPA poster',
        image: '//src/assets/csvpa/rhino poster.jpg',
        category: 'Graphic design',
    } 
    ])


    return { portfolioItems }
}

export default gitPortfolioItems