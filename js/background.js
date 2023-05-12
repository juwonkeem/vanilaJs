const images = [
    "001.jpg",
    "002.jpg",
    "003.jpg"
];

const chosenImages = images[Math.floor(Math.random() * images.length)]

//이미지생성
const bgImage = document.createElement("img");
                //이미지 있는 경로로 설정
bgImage.src = `images/${chosenImages}`

document.body.appendChild(bgImage);