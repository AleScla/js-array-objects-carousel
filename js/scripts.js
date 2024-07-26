const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const carousel = document.getElementById('carousel');

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


for (let i = 0; i < imgArray.length; i++){
    if(i == 0){
        carousel.innerHTML += `
        <div class="img-container d-block">
            <img src="${imgArray[i].image}">
            <div class="bottom-img text-end px-3 mb-4">
                <h1>${imgArray[i].title}</h1>
                <p>${imgArray[i].text}</p>
            </div>
        </div>` ;
    }
    else{
        carousel.innerHTML += `
        <div class="img-container">
            <img src="${imgArray[i].image}">
            <div class="bottom-img text-end px-3 mb-4">
                <h1>${imgArray[i].title}</h1>
                <p>${imgArray[i].text}</p>
            </div>
        </div>` ;
    }
    
}

let active = 1
nextBtn.addEventListener('click', function(){
    console.log('nextbtn premuto');
    // document.querySelector('.img-container:nth-child('+ active +')').classList.remove('d-block')
})
































/*  */