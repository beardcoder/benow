import { useRef } from 'react';
import useLazyImg from 'react-use-lazy-img';

export default function LazyImage({ src, ...props }: any) {
    const imgElement = useRef(null);
    const { imgSrc, onError } = useLazyImg(src, null, imgElement);
    return <img src={imgSrc} ref={imgElement} {...props} onError={onError} />;
}
