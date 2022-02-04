import { useState } from 'react';
import imagedata from './imagedata';

function ImageSlider({slides}){

    const [current, setCurrent] = useState(1);
    const length = slides.length;

    function nextclick() {
        setCurrent(current === length ? 1: current+1);
    }

    function prevclick() {
        setCurrent(current === 1 ? length: current-1);
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }

    return (
    <section>      
        <button className='previousimage' onClick={prevclick}></button>
        <button className='nextimage' onClick={nextclick}></button>
        
            {imagedata.filter((image)=>image.id === current).map((slide, index)=>{
                return <div className={index === current ? "slideactive" : "slide"} key={slide.id}>
                <img src={slide.image}  alt='promo'/>
                </div>
            })}
        
        
    </section>
    )
}

export default ImageSlider;