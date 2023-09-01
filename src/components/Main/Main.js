import React, {Component} from "react";
import Canciones from "../Canciones";
import Cantantes from "../Cantantes";
class Main extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
    return(
        <React.Fragment>
            <main>
            <Canciones/>
            <Cantantes/>
            </main>
        </React.Fragment>)
    }
}

export default Main;