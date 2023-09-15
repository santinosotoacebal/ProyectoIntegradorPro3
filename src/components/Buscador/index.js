import React, { Component } from 'react'
class Buscador extends Component {
    constructor(props) {
        super(props);
        this.state = {valor:""}
    }
    guardarValor(texto){
        this.setState({valor:texto.target.value})
    }

    render() { 
        return ( 
            <form action={`/resultadodebusqueda/${this.state.valor}`}>
            <input placeholder='Buscador de Artistas' type="text" onChange={(e)=>this.guardarValor(e)} name="search" value={this.state.valor}/>
            <input style={{border:"none", background:"none"}} type="submit" value="Buscar"/>
            </form>
        );
    }
}
 
export default Buscador;