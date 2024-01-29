export default class Slide{
    constructor (banner, banner__container){
        this.banner = document.querySelector(banner);
        this.banner__container = document.querySelector(banner__container);
        this.dist = { finalPosition: 0, startX: 0, movement: 0
        }
    }
    onStart(event){
        event.preventDefault();
        this.banner.addEventListener('mousemove', this.onMove);
    }
    onMove(){

    }
    onEnd(){

    }
    addSlideEvents(){
        this.banner.addEventListener('mousedown', this.onStart);
        this.banner.addEventListener('mouseup', this.onEnd)
    }

    bindEvents(){
        this.onStart = this.onStart.bind(this);
    }

    init(){
        this.bindEvents();
        this.addSlideEvents();
        return this;
    }
}