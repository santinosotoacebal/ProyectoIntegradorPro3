import React, { Component } from 'react'
import DetalleArtista from '../../components/DetalleArtista/DetalleArtista'
class DetalleCantante extends Component {
    constructor(props) {
        super(props);
        this.state = { data : [],
        canciones:[] }
    }
    render() { 
        return (
            <>
            <DetalleArtista id = {this.props.match.params.id}/>
            </>
        
        );
    }
}
export default DetalleCantante;