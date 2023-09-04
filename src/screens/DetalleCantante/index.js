import React, { Component } from 'react'
import DetalleCantante from '../../components/DetalleCantante';
class screenDetalleCantante extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (<DetalleCantante id={this.props.match.params.id}/>);
    }
}
export default screenDetalleCantante;