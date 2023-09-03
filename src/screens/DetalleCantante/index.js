import React, { Component } from 'react'
class DetalleCantante extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<h1 style={{color:"white"}}>Este el es detalle de {this.props.match.params.id}</h1>);
    }
}
export default DetalleCantante;