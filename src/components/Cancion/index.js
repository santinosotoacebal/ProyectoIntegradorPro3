import React,{Component} from "react";
import "./index.css"
class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            props: props.value
        }
    }
    mostrarDescripcion(){
        document.getElementById(`descripcionOculta${this.props.name}`).classList.toggle("mostrarDescripcion")
    }
    render(){
        return(
            <React.Fragment>
                <div className="divPelicula">
                <img src={this.props.img}></img>
                <h4>{this.props.name}</h4>
                <h5 id={`descripcionOculta${this.props.name}`} className="descripcionOculta">Aca en teoria va una descripcion pero dios sabe de donde poronga la tenemos que sacar</h5>
                <button onClick={()=> this.mostrarDescripcion()}>Ver mas</button>
                <button>Ir a detalle</button>
                <h5>Insertar icono de estrellita para fav</h5>
                </div>
            </React.Fragment>
            )
    }
}

export default Pelicula;



