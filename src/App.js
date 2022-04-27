import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Este es el título de la página</h1>
        <Testimonio 
          nombre='Emma Bosnia'
          pais='Suecia'
          imagen=''
          cargo='Inegeniera Software'
          empresa='Spotify'
          testimonio='lorem ipsomn lore0m psomn lorem ipsomn lorem ipsomn lorem ipsomn lorem ipsomn'
          />
      </div>
    </div>
  );
}

export default App;
