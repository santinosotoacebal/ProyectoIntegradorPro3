import { Component } from 'react'
import Cantantes from '../../components/Cantantes';
import Canciones from '../../components/Canciones'
class resultadoBusqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            datacanciones:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.busqueda)
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=${this.props.match.params.busqueda}`)
        .then(res => res.json())
        .then(data=> this.setState({data:data.data},()=>console.log(this.state.data.data)))
        .catch(err=>console.log(err))

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=track::"${this.props.match.params.busqueda}"`)
        .then(res => res.json())
        .then(data=> this.setState({datacanciones:data.data}))
        .catch(err=>console.log(err))

    }
    componentDidUpdate(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search/artist?q=${this.props.match.params.busqueda}`)
        .then(res => res.json())
        .then(data=> this.setState({data:data.data},()=>console.log(this.state.data.data)))
        .catch(err=>console.log(err))

        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/search?q=track::"${this.props.match.params.busqueda}"`)
        .then(res => res.json())
        .then(data=> this.setState({datacanciones:data.data}))
        .catch(err=>console.log(err))
    }
    render() { 
        return (
            <>
                <h1 style={{paddingLeft:0}}>Resultados de Busqueda: {this.props.match.params.busqueda}</h1>
                <h2>Canciones:</h2>
                <Canciones info = {this.state.datacanciones}/>
                <h2>Cantantes:</h2>
                <Cantantes info={this.state.data}/>

            </>
        )
    }
}
 
export default resultadoBusqueda;