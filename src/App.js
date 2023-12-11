import './App.css';
import Testimonio from './Componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen algunos afortunados:</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='Shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='¡Hola,...'/>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Ingeniera de Software'
          empresa='ChatDesk'
          testimonio='...Mundo!'/>
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='Emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio='Soy feliz. Amén.'/>
      </div>
    </div>
  );
}

export default App;