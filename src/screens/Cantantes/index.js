import React, { Component } from 'react'
import CantantesContainer from "../../components/Cantantes/index"
import Filtro from '../../components/Filtro/Filtro'
class Cantantes extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            index : 0,
            cantantes:[],
            backup:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists?index=0`)
        .then(res => res.json())
        .then(data => this.setState({
            cantantes : data.data,
            backup: data.data
        }))
        .catch(err => console.log(err))
    }
    buscarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists?index=${(this.state.index+10)}`)
        .then(res => res.json())
        .then(data => this.setState({
            cantantes : this.state.cantantes.concat(data.data),
            backup:this.state.backup.concat(data.data)
        },console.log(data.data)))
        .catch(err => console.log(err))
        this.setState({
            index: this.state.index+10
        })
    }
    filtrarResultados(texto){
        let resultadoFiltro = this.state.backup.filter((e) => e.name.toLowerCase().includes(texto.toLowerCase()))
        this.setState({
      cantantes: resultadoFiltro,
    })

    }
    render() { 
        return (
            <>
            <h2>Filtrar Cantantes</h2>
            <Filtro filtrarResultados = {(texto)=>this.filtrarResultados(texto)} />
           <CantantesContainer info = {this.state.cantantes}/>
           <button onClick={()=>this.buscarMas()}>Traer Mas!</button>
           </>
         );
    }
}
 
export default Cantantes;