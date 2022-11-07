import { Parallax } from 'react-parallax';
import NasaAstro from '../img/nasa-shutl.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={NasaAstro} strength={200}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne