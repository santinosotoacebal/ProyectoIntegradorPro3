import React, {Component} from "react";
import Cantante from "../Cantante";
import "./index.css"
class Cantantes extends Component{
    constructor(props){
        super(props)
        this.state = {props:props.value, data:null}
    }
   
    render(){
            return(
                <React.Fragment>
                    <div className="divCantantes">
                        {
                            this.props.info.length === 0 ?
                            <div className="divGif"><img className='GIF' src='https://usagif.com/wp-content/uploads/loading-79.gif' alt = "Loader"/></div>   :
                        this.props.info.map((inf,idx) => 
                        <Cantante 
                            key={inf+idx} 
                            img={inf.picture} 
                            name={inf.name} 
                            id={inf.id} 
                            radio = {inf.radio}
                            actualizarEstadoCantantes = {this.props.actualizarEstadoCantantes ? (id)=>this.props.actualizarEstadoCantantes(id):false}/>)}
                    </div>
                </React.Fragment>
            )
    }
}
export default Cantantes;
