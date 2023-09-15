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
            <input style={{marginRight:5}} placeholder='Buscador ' type="text" onChange={(e)=>this.guardarValor(e)} name="search" value={this.state.valor}/>
            <button className='botonVerMas' type="submit" value="Buscar"> Buscar </button> 
            </form>
        );
    }
}
 
export default Buscador;