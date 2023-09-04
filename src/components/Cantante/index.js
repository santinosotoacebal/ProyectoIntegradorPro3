import React,{Component} from "react";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Cantante extends Component{
    constructor(props){
        super(props)
        this.state = {
            props: props.value,
            verMas:0
        }
    }
    mostrarDescripcion(){
        document.getElementById(`descripcionOculta${this.props.name}`).classList.toggle("mostrarDescripcion")
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
                <img src={this.props.img} alt={this.props.name}></img>
                <h4>{this.props.name}</h4>
                <h5 id={`descripcionOculta${this.props.name}`} className="descripcionOculta">Aca en teoria va una descripcion pero dios sabe de donde poronga la tenemos que sacar</h5>
                {this.state.verMas === 1 ? ( this.props.radio === true ? <p>Este artista toca en radio</p> : <p>Este artista no toca en radio</p> ) :   <p></p>}
            
                
                {this.state.verMas === 0 ? 
                 <button onClick={()=>this.verMas()}>Ver Mas</button> :
                 <button onClick={()=>this.verMenos()}>Ver Menos</button>
                }
                <h5 className="boton"><Link to={`/detalle/cantante/${this.props.id}`}>Ir a detalle</Link></h5>
                <div className="estrellas">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                
                </div>
            </React.Fragment>
            )
    }
}

export default Cantante;



