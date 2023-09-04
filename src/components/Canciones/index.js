import React, {Component} from "react";
import Cancion from "../Cancion";
import "./index.css"

class Peliculas extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=5`)
        .then(res => res.json())
        .then(data => this.setState({data:data.data},()=>console.log(data)))
        .catch(err => console.log(err))
    }
    render(){
        if(this.state.data === null){
            <h1>Ta cargando</h1>
        }
        if (this.state.data != null) {
            return(
                <React.Fragment>
                    <h2>Top Canciones</h2>
                    <div className="divCanciones">
                        {this.state.data.map((info,idx) => <Cancion key={info+idx} img={info.album.cover} name={info.title} id={info.id} expl = {info.explicit_lyrics}/>)}
                    </div>
                </React.Fragment>
            )
        }
    }
}
export default Peliculas;
