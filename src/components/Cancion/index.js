import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css"
class Pelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            props: props.value,
            verMas:0
        }
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
                <div className="divPelicula">
                <img src={this.props.img} alt={this.props.name}></img>
                <h4>{this.props.name}</h4>
                {this.state.verMas === 1 ? <p>Aca en teoria va una descripcion pero dios sabe de donde poronga la tenemos que sacar</p> : <p className="descripcionOculta"></p>}
                {this.state.verMas === 1 ? ( this.props.expl === true ? <p>Esta cancion contiene palabras explicitas</p> : <p>Esta cancion no contiene palabras explicitas</p> ) :   <p></p>}       
                {this.state.verMas === 0 ? 
                 <button onClick={()=>this.verMas()}>Ver Mas</button> :
                 <button onClick={()=>this.verMenos()}>Ver Menos</button>
                }
                <h5 className="boton"> <Link to ={`/detalle/cancion/${this.props.id}`}>Ir a detalle</Link></h5>
                <div className="estrellas">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                </div>
                
                </div>
            </React.Fragment>
            )
    }
}

export default Pelicula;



