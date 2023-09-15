import React, { Component } from 'react'
import "./index.css"    

export default class DetalleArtista extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:null,
            esFavorito:false
        }
    }
    
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.id}`)
        .then(res => res.json())
        .then(dataf => this.setState({data:dataf},()=>{
            let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
            if (FavoritosStorage !== null) {
                let EstaElC = FavoritosStorage.includes(this.state.data.id)
                if (EstaElC) {
                    this.setState({
                        esFavorito:true
                    })
                }
        }
        }))
        .catch(err => console.log(err))
    }
    agregarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
        if (FavoritosStorage !== null) {
            FavoritosStorage.push(id)
            localStorage.setItem('favoritosCantantes', JSON.stringify(FavoritosStorage))
        } else{
            let  IdAArray = [id]
            localStorage.setItem('favoritosCantantes',JSON.stringify(IdAArray))
        }

        this.setState({
            esFavorito:true
        })
    }
    borrarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
        let FavoritosNuevos = FavoritosStorage.filter(ids=> ids!==id)
        localStorage.setItem('favoritosCantantes', JSON.stringify(FavoritosNuevos))
        this.setState({
            esFavorito:false
        })
    }
  render() {
   if (this.state.data== null) {
       <h1>cargando</h1>
   } else {
    return (
        
        <React.Fragment>
        <div className='detalleCancionContainer'>
            <div className='detalleCancion1'>
                <img src={this.state.data.picture_medium} alt= {this.state.data.name} className = 'artista'></img>
            </div>
            <div className='detalleCancion2'>
        
                <h1>Nombre: {this.state.data.name} </h1>
                <h2>Cantidad de Fans: {this.state.data.nb_fan}</h2>
                <h2>Cantidad de albumes: {this.state.data.nb_album}</h2>
                {this.state.esFavorito ? 
                <button className= 'botonVerMas' onClick = {(id)=>this.borrarFav(this.state.data.id)}>Borrar de favoritos</button> :
                <button className= 'botonVerMas' onClick = {(id)=>this.agregarFav(this.state.data.id)}>Agregar a Favoritos</button>
                }
            </div>
            
        </div>
    </React.Fragment>
    )
  }
   }
    
}
