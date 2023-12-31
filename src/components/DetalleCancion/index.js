import React, { Component } from 'react'
import './index.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class DetalleCancion extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data},()=>{
            let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
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
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        if (FavoritosStorage !== null) {
            FavoritosStorage.push(id)
            localStorage.setItem('favoritosCanciones', JSON.stringify(FavoritosStorage))
        } else{
            let  IdAArray = [id]
            localStorage.setItem('favoritosCanciones',JSON.stringify(IdAArray))
        }

        this.setState({
            esFavorito:true
        })
    }
    borrarFav(id){
        let FavoritosStorage = JSON.parse(localStorage.getItem('favoritosCanciones'))
        let FavoritosNuevos = FavoritosStorage.filter(ids=> ids!==id)
        localStorage.setItem('favoritosCanciones', JSON.stringify(FavoritosNuevos))
        this.setState({
            esFavorito:false
        })
    }
    render() { 
        console.log(this.props)
        let info = this.state.data
        if (info == null) {
            return  <div className="divGif"><img className='GIF' src='https://usagif.com/wp-content/uploads/loading-79.gif' alt = "Loader"/></div> 
        }else{
            return (
                <React.Fragment>
                    <div className='centrar'>
                        <div className='detalleCancionContainer'>
                            <div className='detalleCancion1'>
                                <img src={info.album.cover} alt={info.title} className = "fotoCancion"></img>
                            </div>
                            <div className='detalleCancion2'>
                                <h1 className = "textoDetalleCancion1">Titulo: {info.title}</h1>
                                <h2 className = "textoDetalleCancion2">Artista: <Link style={{color:"white"}} to={`/detalle/cantante/${info.artist.id}`}>{info.artist.name}</Link></h2>
                                <h2 className = "textoDetalleCancion2">Album: {info.album.title}</h2>
                                <iframe title={info.title} src={info.preview} width="500" height="70" frameborder="0" allowfullscreen className = 'player'></iframe>
                                {this.state.esFavorito ? 
                    <button onClick = {(id)=>this.borrarFav(info.id)} className = 'botonVerMas'>Borrar de favoritos</button> :
                    <button onClick = {(id)=>this.agregarFav(info.id)} className = 'botonVerMas'>Agregar a Favoritos</button>
                    }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
 
export default DetalleCancion;