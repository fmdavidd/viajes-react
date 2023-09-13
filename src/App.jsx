import banner from './assets/img.webp'
import './App.css'

function App() {
  return (
    <>
    <div className='caja'>
      <img src={banner} className="logo" alt="Vite logo" />
      <p className='dias'>9 Días / 8 Noches</p>
      <p className='titulo'> Paquete a Punta Cana</p>
      <p className='desde-hasta'>Desde Dom 17 Sep Hasta Sáb 30 Sep </p>
      <p className='hotel'>Los Corales Beach ⭐⭐⭐⭐</p>
      <p className='precio'>$852.946</p>
      </div>
    </>
  )
}

export default App
