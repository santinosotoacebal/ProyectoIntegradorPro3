import React, {Component} from "react";
import Cantante from "../Cantante";
import "./index.css"

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
                    <h2>Top Cantantes</h2>
                    <div className="divCantantes">
                        {this.state.data.map((info,idx) => <Cantante key={info+idx} img={info.picture} name={info.name}/>)}
                    </div>
                </React.Fragment>
            )
        }
        else{
            <h1>Ta cargando</h1>
        }
    }
}
export default Cantantes;
