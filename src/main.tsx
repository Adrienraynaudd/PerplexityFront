import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { SearchBar } from './Components/SearchBar/SeachBar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <SearchBar />
  </React.StrictMode>,
)
