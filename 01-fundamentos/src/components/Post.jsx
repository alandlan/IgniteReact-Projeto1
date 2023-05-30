import { el } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

export function Post({author,publishedAt,content}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistance(publishedAt, new Date(), {locale: ptBR}, {addSuffix: true})

  const [comments, setComments] = useState(["Post muito bom", "Parabéns"]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCommentSubmit(event) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewComment(event) {
    setNewCommentText(event.target.value);
  }

  function onDeleteComment(comment){
    setComments(comments.filter((c) => c !== comment));
  }

  return (    
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'linq') {
            return <p key={line.content}><a href="#">{line.content}</a></p> 
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.formComment}>
        <strong>Deixe seu feedback</strong>
        <textarea value={newCommentText} name='comment' placeholder='Comente aqui' onChange={handleNewComment}/>
        <footer>
          <button type='submit'>Enviar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment key={comment} content={comment} onDeleteComment={onDeleteComment} />
        })}
      </div>
    </article>
  );
}