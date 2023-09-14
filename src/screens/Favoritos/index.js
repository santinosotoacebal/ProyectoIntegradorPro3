import React, { Component } from 'react'
import Cantantes from '../../components/Cantantes/'
import CancionesContainter from '../../components/Canciones'
class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = { favoritosCanciones:[], favoritosCantantes:[] }
    }
    componentDidMount(){
        let storageCanciones = localStorage.getItem('favoritosCanciones')
        let storageCantantes = JSON.parse(localStorage.getItem('favoritosCantantes'))
        if (storageCanciones !== null) {
            let cancionesParseadas = JSON.parse(storageCanciones)
            Promise.all(
                cancionesParseadas.map( id => 
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${id}`)
                    .then( resp => resp.json())
                  )
              )
              .then(data => this.setState({favoritosCanciones: data}))
              .catch(err => console.log(err))        
        }
        if (storageCantantes !== null) {
            Promise.all(
                storageCantantes.map( id => 
                    fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${id}`)
                    .then( resp => resp.json())
                  )
              )
              .then(data => this.setState({favoritosCantantes: data}))
              .catch(err => console.log(err))        
        }
    }

    actualizarEstadoCanciones(id){
        let nuevoState = this.state.favoritosCanciones.filter(canciones=> canciones.id !== id)
        this.setState({
            favoritosCanciones : nuevoState
        })}
    actualizarEstadoCantantes(id){
        let nuevoState = this.state.favoritosCantantes.filter(cantantes=> cantantes.id !== id)
        this.setState({
            favoritosCantantes : nuevoState
        })
    }
    render() { 
        let storageCanciones = JSON.parse(localStorage.getItem('favoritosCanciones'))
        let storageCantantes = JSON.parse(localStorage.getItem('favoritosCantantes'))
        return (
        <>
        <h2>Favoritos Canciones</h2>
        {storageCanciones.length ===  0  ?  <h3>Aun no has añadido ninguna cancion a favoritos</h3>:<CancionesContainter info = {this.state.favoritosCanciones} actualizarEstadoCanciones = {(id)=>this.actualizarEstadoCanciones(id)}/>}
        <h2>Favoritos Cantantes</h2>
        {storageCantantes.length === 0 ? <h3>Aun no has añadido ningun cantante a favoritos</h3>:<Cantantes info = {this.state.favoritosCantantes} actualizarEstadoCantantes = {(id)=>this.actualizarEstadoCantantes(id)}/>}
        </>
        )
    }
}
 
export default Favoritos;