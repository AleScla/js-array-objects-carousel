const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.getElementById('carousel');
const thumbnails = document.getElementById('thumbnails-container')

const imgArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// ciclo che stampa l'array di oggetti in pagina, tenendo solo il primo in d-block (di default d-none)
for (let i = 0; i < imgArray.length; i++){
    if(i == 0){
        carousel.innerHTML += `
        <div class="img-container d-block">
            <img src="${imgArray[i].image}">
            <div class="bottom-img text-end px-3 mb-5">
                <h1>${imgArray[i].title}</h1>
                <p>${imgArray[i].text}</p>
            </div>
        </div>`;
        thumbnails.innerHTML += `
        <div class="thumbnails opacity" data-index-number="${i + 1}">
            <img src="${imgArray[i].image}" >
        </div>`
    }
    else{
        carousel.innerHTML += `
        <div class="img-container">
            <img src="${imgArray[i].image}">
            <div class="bottom-img text-end px-3 mb-5">
                <h1>${imgArray[i].title}</h1>
                <p>${imgArray[i].text}</p>
            </div>
        </div>`
        thumbnails.innerHTML += `
        <div class="thumbnails" data-index-number="${i + 1}">
            <img src="${imgArray[i].image}">
        </div>` 
    } 
}

let active = 1;

nextBtn.addEventListener('click', function(){
    nextImg();
});

prevBtn.addEventListener('click', function(){
    prevImg();
});
let thumbs = document.querySelectorAll(".thumbnails");
// ciclo per aggiungere eventlistener alle thumbnails, sfruttando il data-index

thumbs.forEach(element => {
    element.addEventListener("click", function(e) {
        if (element.dataset.indexNumber != active){
            hideImg(active);
            active = element.dataset.indexNumber;
            showImg(active);
        }
    });
});

let clock = setInterval(function(){
    nextImg()
}, 3000)

    
// funzioni
function nextImg(){
    if (active < imgArray.length){
        hideImg(active)
        active ++;
        showImg(active)
    }
    else if (active >= imgArray.length){
        hideImg(active)
        active = 1;
        showImg(active)
    }
}

function prevImg(){
    if (active > 1){
        hideImg(active)
        active --;
        showImg(active)
    }
    else if (active = 1){
        hideImg(active)
        active = imgArray.length;
        showImg(active)
    }
}

function showImg(index){
    document.querySelector('.img-container:nth-child('+ index +')').classList.add('d-block');
    document.querySelector('.thumbnails:nth-child('+ index +')').classList.add('opacity');
}

function hideImg(index){
    document.querySelector('.img-container:nth-child('+ index +')').classList.remove('d-block');
    document.querySelector('.thumbnails:nth-child('+ index +')').classList.remove('opacity');
}