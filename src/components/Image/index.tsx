import * as React from 'react';
import LazyLoad from 'react-lazy-load';
interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {

}

const Image: React.FC<ImageProps> = ({alt, ...props}) => {
    return (
        <LazyLoad className="h-full" threshold={0.80}>
            <img {...props} alt={alt} />
        </LazyLoad>

    )
}

export default Image;
