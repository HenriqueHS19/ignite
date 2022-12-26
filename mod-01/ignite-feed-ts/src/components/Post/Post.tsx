import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';

import styles from './styles.module.css';

interface IPost {
    author: {
        avatar: string;
        name: string;
        role: string;
    };
    content: [{
        type: 'paragraph' | 'link';
        content: string;
    }];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: IPost) {

    const [comments, setComments] = useState<string[]>([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    };

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value);
    };

    function handleInvalidComment(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        event.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function onDeleteComment(commentToDelete: string) {
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