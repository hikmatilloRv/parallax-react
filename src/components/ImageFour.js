import { Parallax } from 'react-parallax';
import NasaMc from '../img/nasa-milk-way.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={NasaMc} strength={200}>
        <div className='content'>
            <span className='img-txt'>a trip to space</span>
        </div>
    </Parallax>
);

export default ImageOne