import { Route, Switch } from 'react-router-dom'
import Header from "./components/Header"
import Footer from './components/Footer'
import Home from './screens/Home';
import About from './screens/About';
import Favoritos from './screens/Favoritos'
import Cantantes from './screens/Cantantes';
import Canciones from './screens/Canciones'
import screenDetalleCancion from './screens/DetalleCancion';
import screenDetalleCantante from './screens/DetalleCantante';
import screenResultadoBusqueda from './screens/ResultadosBusqueda';
import notFound from './screens/notFound';
import "./css/styles.css"

function App() {
  return (
    <div className="App">
      <div className='content'>
    <Header usuario="Pepe"/>
    <div className= "espaciado">
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/favoritos" component={Favoritos}/>
      <Route path="/cantantes" component={Cantantes}/>
      <Route path="/canciones" component={Canciones}/>
      <Route path="/detalle/cancion/:id" component={screenDetalleCancion}/>
      <Route path="/detalle/cantante/:id" component={screenDetalleCantante}/>
      <Route path="/resultadodebusqueda/:busqueda" component={screenResultadoBusqueda}/>
      <Route path="*" component={notFound}/>
      </Switch>
    </div>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
