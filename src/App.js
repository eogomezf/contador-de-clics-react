import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import  logotipo from './img/freecodecamp-logo.png';

function App() {

  const manejarClic =() => {
    console.log('Hola clic');
  }

  const reiniciarContador =() => {
    console.log('Hola reiniciar');
  }
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo' 
          src={logotipo} 
          alt='Logo' />
      </div>
      <div className='contenedor-pricipal'>
          <Contador numClics={5}/>
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>
          <Boton 
             texto='Reiniciar'
             esBotonDeClic={false}
             manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
