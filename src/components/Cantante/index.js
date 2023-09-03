import React,{Component} from "react";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Cantante extends Component{
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
                <div className="divCantante">
                <img src={this.props.img} alt={this.props.name}></img>
                <h4>{this.props.name}</h4>
                <h5 id={`descripcionOculta${this.props.name}`} className="descripcionOculta">Aca en teoria va una descripcion pero dios sabe de donde poronga la tenemos que sacar</h5>
                <h5 className="boton" onClick={()=> this.mostrarDescripcion()}>Ver mas</h5>
                <h5 className="boton"><Link to={`/detalle/cantante/${this.props.id}`}>Ir a detalle</Link></h5>
                <h5>Insertar icono de estrellita para fav</h5>
                </div>
            </React.Fragment>
            )
    }
}

export default Cantante;



