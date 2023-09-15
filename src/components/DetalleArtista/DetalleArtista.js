import React, { Component } from 'react'

export default class DetalleArtista extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:null,
            esFavorito:false
        }
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/artist/${this.props.info.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data},()=>{
            let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCantantes'))
            if (FavoritosStorage !== null) {
                let EstaElC = FavoritosStorage.includes(this.props.info.id)
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
    return (
        <React.Fragment>
        <div className='detalleCancionContainer'>
            <div className='detalleCancion1'>
                <img src={this.props.info.picture_medium} alt= {this.props.info.name}></img>
            </div>
            <div className='detalleCancion2'>
                <h1>Nombre:{this.props.info.name} </h1>
                <h2>Cantidad de Fans: {this.props.info.nb_fan}</h2>
                <h2>Cantidad de albumes: {this.props.info.nb_album}</h2>
                {this.state.esFavorito ? 
                <button onClick = {(id)=>this.borrarFav(this.props.info.id)}>Borrar de favoritos</button> :
                <button onClick = {(id)=>this.agregarFav(this.props.info.id)}>Agregar a Favoritos</button>
                }
            </div>
            
        </div>
    </React.Fragment>
    )
  }
}
