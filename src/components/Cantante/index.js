import React,{Component} from "react";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Cantante extends Component{
    constructor(props){
        super(props)
        this.state = {
            props: props.value,
            verMas:0,
            esFavorito: false
        }
    }
    componentDidMount(){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
        if (FavoritosStorage !== null) {
            let EstaElC = FavoritosStorage.includes(this.props.id)
            if (EstaElC) {
                this.setState({
                    esFavorito:true
                })
            }
        }
    }
    agregarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
        if (FavoritosStorage !== null) {
            FavoritosStorage.push(id)
            localStorage.setItem('favoritosCantantes', JSON.stringify(FavoritosStorage))
        } else{
            let  IdAArray = [id]
            localStorage.setItem('favoritosCantantes',JSON.stringify(IdAArray))
        }

        this.setState({
            esFavorito:true
        })
    }
    borrarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
        let FavoritosNuevos = FavoritosStorage.filter(ids=> ids!==id)
        localStorage.setItem('favoritosCantantes', JSON.stringify(FavoritosNuevos))
        if (this.props.actualizarEstadoCantantes !== false) {
            this.props.actualizarEstadoCantantes(id)
            return
        }
        this.setState({
            esFavorito:false
        })
    }
    verMas(){
        this.setState({verMas:1})
    }
    verMenos(){
        this.setState({verMas:0})
    }
    render(){
        return(
            <React.Fragment>
                <div className="divCantante">
                <img src={this.props.img} alt={this.props.name} className = "foto"></img>
                <h4 className ='textoCantante'>{this.props.name}</h4>
                {this.state.verMas === 1 ? ( this.props.radio === true ? <p className = "textoCantante">Este artista toca en la radio</p> : <p className = "textoCantante">Este artista no toca en la radio</p> ) :   <p></p>}
                {this.state.verMas === 0 ? 
                 <button className="botonVerMas" onClick={()=>this.verMas()}>Ver Mas</button> :
                 <button className="botonVerMas" onClick={()=>this.verMenos()}>Ver Menos</button>
                }
                <h5 className="boton"><Link to={`/detalle/cantante/${this.props.id}`}>Ir a detalle</Link></h5>
                {this.state.esFavorito ? 
                <i onClick = {(id)=>this.borrarFav(this.props.id)} className="fa-solid fa-star"></i>:
                <i onClick = {(id)=>this.agregarFav(this.props.id)} className="fa-regular fa-star"></i>
                }
                </div>
            </React.Fragment>
            )
    }
}

export default Cantante;



