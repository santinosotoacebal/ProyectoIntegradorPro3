import { Component } from 'react'
import Cantantes from '../../components/Cantantes';
class resultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }
    componentDidMount(){
        console.log(this.props.match.params.busqueda)
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=${this.props.match.params.busqueda}`)
        .then(res => res.json())
        .then(data=> this.setState({data:data.data},()=>console.log(this.state.data.data)))
        .catch(err=>console.log(err))
    }
    render() { 
        return (
            <>
                <h1 style={{paddingLeft:0}}>Resultados de Busqueda: {this.props.match.params.busqueda}</h1>
                <Cantantes info={this.state.data}/>
            </>
        )
    }
}
 
export default resultadoBusqueda;