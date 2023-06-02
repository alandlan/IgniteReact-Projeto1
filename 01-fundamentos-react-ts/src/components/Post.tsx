import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'linq';
  content: string;
}

export interface PostProps{
  post: PostType;
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({post}: PostProps) {
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistance(post.publishedAt, new Date(), {locale: ptBR})

  const [comments, setComments] = useState(["Post muito bom", "Parabéns"]);
  const [newCommentText, setNewCommentText] = useState('');

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function onDeleteComment(comment: string){
    setComments(comments.filter((c) => c !== comment));
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Não é possível enviar um comentário vazio')
  }

  const isNewCommentEmpty = newCommentText.length<3;

  return (    
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }else if(line.type === 'linq') {
            return <p key={line.content}><a href="#">{line.content}</a></p> 
          }
        })}
      </div>

      <form onSubmit={handleCommentSubmit} className={styles.formComment}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          value={newCommentText} 
          name='comment' 
          placeholder='Comente aqui' 
          onChange={handleNewComment}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Enviar</button>
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