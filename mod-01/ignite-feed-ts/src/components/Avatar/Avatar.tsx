import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface IAvatar extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: IAvatar) {
    return (
        <img
            className={ hasBorder ? styles.avatar : styles.hasBorder }
            {...rest}
        />
    );
}