// Poetry Carousel //

const nextDom = document.getElementById('next');
const prevDom = document.getElementById('prev');

const carouselDom = document.querySelector('.carousel');
const sliderDom = carouselDom.querySelector('.carousel .list');
const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
const timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
const timeRunning = 1500;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;

function showSlider(type){
    const  sliderItemsDom = sliderDom.querySelectorAll('.carousel .list .item');
    const thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        sliderDom.appendChild(sliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

}