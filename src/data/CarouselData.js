export const data = [
    {
        title: 'Boss Bio-Boost',
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem expedita illo esse placeat atque. Labore architecto, animi, error commodi sequi perspiciatis, sit maxime repellat nobis perferendis molestias quis dolore laboriosam?.',
        image: './assets/bossboost.jpg',
    },
    {
        title: 'Boss Abracadabra ',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: './assets/bossabr.jpg',
    },
    {
        title: 'Pellet DE-Icer',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: './assets/winter1.png',
    },
    {
        title: 'Snowplow Coating',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: './assets/winter2.png',
    },
    {
        title: 'Snowplow Coating',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        image: './assets/winter2.png',
    },

];

export const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    focusOnselect: false,
    accessability: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        },

        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};