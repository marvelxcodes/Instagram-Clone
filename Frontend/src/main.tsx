import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
  return (
<main className=''>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:userId' element={<Profile />} />
    </Routes>
  </BrowserRouter>
</main>
)}

const Root = document.getElementById('root') as HTMLElement
ReactDOM.createRoot(Root).render( <App /> )