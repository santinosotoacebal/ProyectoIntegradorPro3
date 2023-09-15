import React, {Component} from "react";
import Cancion from "../Cancion";
import "./index.css"
class Canciones extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }
    componentDidMount(){
        console.log(this.props.info)
    }

    render(){
            return(
                <React.Fragment>
                    <div className="divCanciones">
                        {this.props.info.length === 0 ?
                        <div className="divGif"><img className='GIF' src='https://usagif.com/wp-content/uploads/loading-79.gif'/></div> : 
                        this.props.info.map((info,idx) => 
                        <Cancion 
                            key={info+idx} 
                            img={info.album.cover} 
                            name={info.title} 
                            id={info.id} 
                            artist = {info.artist.name}
                            expl = {info.explicit_lyrics} 
                            actualizarEstadoCanciones = {this.props.actualizarEstadoCanciones ? (id)=>this.props.actualizarEstadoCanciones(id):false}/>)}                    
                            </div>
                </React.Fragment>
            )
        }
    }
export default Canciones;
