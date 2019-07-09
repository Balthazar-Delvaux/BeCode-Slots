const fruits = [{
        id: 1,
        name: "cherries",
        path: "assets/img/cherries.webp"
    }, {
        id: 2,
        name: "grape",
        path: "assets/img/grape.webp"
    }, {
        id: 3,
        name: "orange",
        path: "assets/img/orange.webp"
    },
    {
        id: 4,
        name: "peer",
        path: "assets/img/peer.webp"
    },
    {
        id: 5,
        name: "seven",
        path: "assets/img/seven.webp"
    },
    {
        id: 6,
        name: "watermelon",
        path: "assets/img/watermelon.webp"
    }
];

const creatingImgElmnts = () => {
    const containers = document.getElementsByClassName('fruits-container');
    for (const el of containers) {
        const item = document.createElement('img');
        el.appendChild(item);
        item.style.height = '100%';
        item.setAttribute('src', fruits[0].path);
        // return document.getElementsByTagName('img');
    }
}
creatingImgElmnts();

const getImgTags = () => {
    return document.getElementsByTagName('img');
}
imgTags = getImgTags();


const RdmImgSrc = img => {
    img.setAttribute('src', fruits[getRandomInt(0, fruits.length - 1)].path);
}

const button = document.getElementById('start').addEventListener('click', () => {
    RdmImgSrc(imgTags[0]);
    RdmImgSrc(imgTags[1]);
    RdmImgSrc(imgTags[2]);
})

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
