import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import FavoritesPage from './page/FavoritesPage/FavoritesPage'



function App() {

  return (
    <div className="body">
    <Header/>
      <FavoritesPage/>
    <Footer/>
    </div>
  )
}

export default App
