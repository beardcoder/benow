import { useRef } from 'react';
import useLazyImg from 'react-use-lazy-img';

export default function LazyImage({ src, ...props }: any) {
    const imgElement = useRef(null);
    const placeholderImage =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';
    const { imgSrc, onError } = useLazyImg(src, placeholderImage, imgElement);
    return <img src={imgSrc} ref={imgElement} {...props} onError={onError} />;
}
