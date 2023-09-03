import React, {Component} from "react";
import Cantante from "../Cantante";
import "./index.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Cantantes extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }
    componentDidMount(){
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?limit=5`)
        .then(res => res.json())
        .then(data => this.setState({data:data.data},()=>console.log(data)))
        .catch(err => console.log(err))
    }
    render(){

        if (this.state.data != null) {
            return(
                <React.Fragment>
                    <div className="titulo">
                    <h2>Top Cantantes </h2>
                    <h2 className="verMas"><Link to="/cantantes">Ver mas</Link></h2>
                    </div>
                    <div className="divCantantes">
                        {this.state.data.map((info,idx) => <Cantante key={info+idx} img={info.picture} name={info.name} id={info.id}/>)}
                    </div>
                </React.Fragment>
            )
        }
        if(this.state.data == null){
            return <h1>Ta cargando</h1>
        }
    }
}
export default Cantantes;
