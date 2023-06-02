import {Post , PostType} from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'



function App() {
  const posts : PostType[] = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://github.com/alandlan.png',
        name: 'Alan Martins',
        role: 'Developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'linq', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-05-29 01:00:00'),
    },
    {
      id: 2,
      author:{
        avatarUrl: 'https://github.com/alandlan.png',
        name: 'Alan Martins 2',
        role: 'Developer'
      },
      content: [
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type: 'linq', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2023-05-29 01:00:00'),
    },
  ]
  
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => { 
            return (
              <Post key={post.id}
                post={post}/>
              )
            })}
        </main>
      </div>
    </>
    
  )
}

export default App


