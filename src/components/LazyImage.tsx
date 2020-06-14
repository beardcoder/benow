import { useRef } from 'react';
import useLazyImg from 'react-use-lazy-img';

export default function LazyImage({ src, ...props }: any) {
    const imgElement = useRef(null);
    const placeholderImage =
        'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    const { imgSrc, onError } = useLazyImg(src, placeholderImage, imgElement);
    return <img src={imgSrc} ref={imgElement} {...props} onError={onError} />;
}
