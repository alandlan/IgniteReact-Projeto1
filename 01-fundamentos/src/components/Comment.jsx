import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment({comment}) {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/alandlan.png"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Alan Martins</strong>
                        <time title='1 de janeiro' dateTime='2023-01-01 01:00:00'>Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>
                <p>Muito bom Devon, Parabéns !!</p>
            </div>
            <footer>
                <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    </div>
  )
}