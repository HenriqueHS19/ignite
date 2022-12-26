import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar';

import styles from './styles.module.css';

interface ICommnent {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: ICommnent) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLike() {
        setLikeCount(function (state) {
            return state + 1;
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.container}>
            <Avatar hasBorder={false} src={'https://github.com/HenriqueHS19.png'} />

            <div className={styles.content}>
                <div className={styles.comment}>
                    <header>
                        <div>
                            <strong> Henrique Santos </strong>
                            <time title="Publicado ás 12:30h" dateTime='26-06-2022 12:30:12'> Cerca de 2h atrás </time>
                        </div>

                        <button title="Delete comment" onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>

                    </header>

                    <p> { content } </p>
                </div>

                <button className={styles.like} onClick={handleLike}>
                    <ThumbsUp size={20} />
                    Aplaudir <span> {likeCount} </span>
                </button>
            </div>
        </div>
    );
}