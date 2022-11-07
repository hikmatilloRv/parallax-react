import { Parallax } from 'react-parallax';
import NasaOrbit from '../img/nasa-orbit.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={NasaOrbit} strength={200}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne