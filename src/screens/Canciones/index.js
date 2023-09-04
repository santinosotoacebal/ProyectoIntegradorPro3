import React, { Component } from 'react'
import CancionesContainter from '../../components/Canciones/index'
class Canciones extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            index : 0,
            canciones:[]
        }
    }
    componentDidMount(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks?index=0`)
        .then(res => res.json())
        .then(data => this.setState({
            canciones : data.data
        }))
        .catch(err => console.log(err))
    }
    buscarMas(){
        fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks?index=${(this.state.index+10)}`)
        .then(res => res.json())
        .then(data => this.setState({
            canciones : this.state.canciones.concat(data.data)
        },console.log(data.data)))
        .catch(err => console.log(err))
        this.setState({
            index: this.state.index+10
        })
    }
    render() { 
        return (
            <>
           <CancionesContainter info = {this.state.canciones}/>
           <button onClick={()=>this.buscarMas()}>Traer Mas!</button>
           </>
        );

    }
}
export default Canciones;
 