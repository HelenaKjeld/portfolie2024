import { ref } from 'vue'

import image1 from '@/assets/test.jpeg'

const gitPortfolioItems = () => {

    const portfolioItems = ref([
    {
        id: 1,
        title: 'BBQ',
        description: 'This is the first portfolio item',
        image: '//src/assets/BBQ/mockup computer og mobil.png',
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
        description: 'This is the second portfolio item',
        image: '//src/assets/cc poster gjesing',
        link: 'https://www.google.com',
        category: 'Graphic design'
    },
    {
        id: 3,
        title: 'Portfolio Item 3',
        description: 'This is the third portfolio item'
    },
    {
        id: 2,
        title: 'Portfolio Item 2',
        description: 'This is the second portfolio item'
    }  
    ])


    return { portfolioItems }
}

export default gitPortfolioItems