import React, { Component } from 'react'
import './index.css'

class DetalleCancion extends Component {
    constructor(props) {
        super(props);
        this.state = {data:null}
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/track/${this.props.id}`)
        .then(res => res.json())
        .then(data => this.setState({data:data}))
        .catch(err => console.log(err))
    }
    
    render() { 
        console.log(this.props)
        let info = this.state.data
        if (info == null) {
            return <h1>Toy cargando</h1>
        }else{
            return (
                <React.Fragment>
                    <div className='detalleCancionContainer'>
                        <div className='detalleCancion1'>
                            <img src={info.album.cover} alt={info.title}></img>
                        </div>
                        <div className='detalleCancion2'>
                            <h1>Titulo: {info.title}</h1>
                            <h2>Artista: {info.artist.name}</h2>
                            <h2>Album: {info.album.title}</h2>
                            <h2>Donde Escucharla: <a className='a' href={info.lik}>{info.link}</a></h2>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }
}
 
export default DetalleCancion;