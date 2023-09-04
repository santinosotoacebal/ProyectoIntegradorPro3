import { Component } from "react";

class Filtro extends Component{
    constructor(props){
        super(props)
        this.state = {
            texto: ''
        }
    }

    evitarSubmit(e){
        e.preventDefault()
    }

    guardarValor(e){
        this.setState(
            {texto: e.target.value },()=>this.props.filtrarResultados(this.state.texto)
        )
    }

    render(){
        return(
            <>
            <form onSubmit={(e)=> this.evitarSubmit(e)}>
                <input onChange={(e)=> this.guardarValor(e)} value={this.state.texto}/>
            </form>
            </>
        )
    }
}
export default Filtro
