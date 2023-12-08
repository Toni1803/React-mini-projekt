import React, {useState} from 'react';
import a from "./a.jpg";
import b from "./b.jpg";
import c from "./c.jpg";
import d from "./d.jpg";



const ImageSlider = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length)% images.length)
    };

    return (
        <div className='image-slider' style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button className='slider-button' onClick={prevSlide}>Previous</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{width:'80%',height:'auto'}}/>
            <button className='slider-button' onClick={nextSlide}>Next</button>
        </div>
    );
};

const Galerija = () => {
    const images = [a,b,c,d];

    return (
        <div>
            <h1 style={{textAlign:'center'}}>Galerija slika</h1>
            <ImageSlider images={images}/>
        </div>
    );
};

export default Galerija;