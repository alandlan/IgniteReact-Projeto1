import { el } from 'date-fns/locale';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author,publishedAt,content}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR})
  const publishedDateRelativeToNow = formatDistance(publishedAt, new Date(), {locale: ptBR}, {addSuffix: true})

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
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p>{line.content}</p>
          }else if(line.type === 'linq') {
            return <p><a href="#">{line.content}</a></p> 
          }
        })}
      </div>

      <form className={styles.formComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Comente aqui' />
        <footer>
          <button type='submit'>Enviar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}