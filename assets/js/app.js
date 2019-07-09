// table of fruits objects
const fruits = [{
    id: 1,
    name: "cherries",
    path: "assets/img/cherries.webp",
    emoji: "🍒"

}, {
    id: 2,
    name: "grape",
    path: "assets/img/grape.webp",
    emoji: "🍇"
}, {
    id: 3,
    name: "orange",
    path: "assets/img/orange.webp",
    emoji: "🍊"
}, {
    id: 4,
    name: "peer",
    path: "assets/img/peer.webp",
    emoji: "🍐"
}, {
    id: 5,
    name: "seven",
    path: "assets/img/seven.webp",
    emoji: "7️⃣"
}, {
    id: 6,
    name: "watermelon",
    path: "assets/img/watermelon.webp",
    emoji: "🍉"
}];

// Creating img tags, height and setting cherry path by default
const creatingImgElmnts = () => {
    const containers = document.getElementsByClassName('fruits-container');
    for (const el of containers) {
        const item = document.createElement('img');
        el.appendChild(item);
        item.style.height = '100%';
        item.setAttribute('src', fruits[0].path);
    }
}
creatingImgElmnts();

// Encapsulating of img elements in imgTags variable
const getImgTags = () => {
    return document.getElementsByTagName('img');
}
const imgTags = getImgTags();

// Play function
const Play = img => {
    let rdmImg = [];
    //Interval between every randomised fruit
    const delay = setInterval(() => {
        rdmImg = [getRandomInt(0, fruits.length - 1), getRandomInt(0, fruits.length - 1), getRandomInt(0, fruits.length - 1)];
        for (let i = 0; i < 3; i++) {
            imgTags[i].setAttribute('src', fruits[rdmImg[i]].path);
        }
    }, 60);

    // ClearInterval after a short time and execute resultEvent function (toggle to false)
    setTimeout(() => {
        clearInterval(delay);
        console.log('stop');
        const result = [];
        const resultEvent = () => {
            for (let i = 0; i < rdmImg.length; i++) {
                result.push(fruits[rdmImg[i]].emoji);
            }
            console.table(result);
            let isWin = false;
            if(result[0] == result [1]){
                if(result[1] == result[2]) {
                    isWin = true;
                }
            } else {
                isWin = false;
            } 
            console.log(isWin);
            const results = document.getElementById('results');
            if (isWin) {
                const response = document.createTextNode('You Win!');
                results.appendChild(response);
            } else {
                const response = document.createTextNode('You Lose!');
                results.appendChild(response);
            }
            
            toggle = true;
        }
        resultEvent();

    }, 500);

    // Random function
    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// On click, start the Play function only if toggle is true.
let toggle = true;
const button = document.getElementById('start').addEventListener('click', () => {
    if (toggle) {
        console.log('start');
        Play(imgTags);
        toggle = false;
    }
})


