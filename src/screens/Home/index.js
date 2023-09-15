import React, {Component} from "react";
import Canciones from "../../components/Canciones";
import Cantantes from "../../components/Cantantes";
import Buscador from "../../components/Buscador";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataCanciones:[],
            dataCantantes:[]
        }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?limit=5`)
        .then(res => res.json())
        .then(data => this.setState({dataCantantes:data.data},()=>console.log(data)))
        .catch(err => console.log(err))

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5`)
        .then(res => res.json())
        .then(data => this.setState({dataCanciones:data.data},()=>console.log(data)))
        .catch(err => console.log(err))

        if (localStorage.getItem('favoritosCanciones')==null) {
            let prueba = []
            localStorage.setItem('favoritosCanciones',JSON.stringify(prueba))
        }
        if (localStorage.getItem('favoritosCantantes')== null) {
            let prueba = []
            localStorage.setItem('favoritosCantantes',JSON.stringify(prueba))
        }
    }
    render(){
    return(
        <React.Fragment>
            <main>
                <h2 className = "titulo">Busca tus Canciones/Artistas favoritos!</h2>
                <Buscador/>
                <div className = "titulo">
                <h2>Top Canciones</h2> 
                <h2 className="verMas"><Link to="/canciones">Ver mas</Link></h2>
                </div>
           
            <Canciones info = {this.state.dataCanciones}/>
            <div className="titulo">
                    <h2>Top Cantantes </h2>
                    <h2 className="verMas"><Link to="/cantantes">Ver mas</Link></h2>
            </div>
            <Cantantes info = {this.state.dataCantantes}/>
            </main>
        </React.Fragment>)
    }
}

export default Home;