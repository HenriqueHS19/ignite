import styles from './styles.module.css';

interface IAvatar {
    src: string;
    hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }: IAvatar) {
    return (
        <img className={ hasBorder ? styles.avatar : styles.hasBorder } src={ src } />
    );
}