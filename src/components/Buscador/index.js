import React, { Component } from 'react'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {valor:""}
    }
    guardarValor(texto){
        this.setState({valor:texto.target.value})
    }
    evitarSubmit(e){
        e.preventDefault()
    }
    render() { 
        return ( 
            <form onSubmit={(e)=> this.evitarSubmit(e)}>
            <input style={{marginRight:5}} placeholder='Buscador ' type="text" onChange={(e)=>this.guardarValor(e)} name="search" value={this.state.valor}/>
            <Link to = {"/resultadodebusqueda/" + this.state.valor} className = 'botonVerMas2'> Buscar  </Link>
            </form>
        );
    }
}
 
export default Buscador;