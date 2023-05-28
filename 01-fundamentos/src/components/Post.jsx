import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/alandlan.png" />
          <div className={styles.authorInfo}>
            <strong>Alan Martins</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title='1 de janeiro' dateTime='2023-01-01 01:00:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉{' '}<a href='#'>jane.design/doctorcare</a></p>

        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  );
}