import { useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './styles.module.css';

export function Post({ id, author, content, publishedAt }) {

    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChange() {
        setNewCommentText(event.target.value);
    };

    function handleInvalidComment() {
        event.target.setCustomValidity('');
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function onDeleteComment(commentToDelete) {
        const newComments = comments.filter(comment => comment != commentToDelete);

        setComments(newComments);
    }

    return (
        <article>
            <header>
                <div className={styles.author}>

                    <Avatar src={author.avatar} />

                    <div>
                        <strong> {author.name} </strong>
                        <span> {author.role} </span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                { content.map(function(c) {
                    if (c.type === 'paragraph') {
                        return <p key={c.content}> {c.content} </p>
                    }
                })}

                <p className={styles.hashtag}>
                    { content.map(function(c) {
                        if (c.type === 'link') {
                            return <a key={c.content} href="#"> #{c.content} </a>
                        }
                    })}
                </p>
            </div>

            <form onSubmit={handleCreateNewComment}>
                <strong> Deixe seu feedback </strong>

                <textarea
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Escreva um comentário...'
                    onInvalid={handleInvalidComment}
                    required
                />

                <button disabled={newCommentText.length === 0}> Publicar </button>
            </form>

            <div className={styles.comments}>
                {comments.map(function(comment) {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={onDeleteComment}
                        />);
                })}
            </div>
        </article>
    );
}