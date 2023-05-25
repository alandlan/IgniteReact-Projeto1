import { useState } from 'react'
import {Post} from './Post'
import { Header } from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Post 
        autor="Nome" 
        content="Conteúdo" 
      />
    </>
    
  )
}

export default App


