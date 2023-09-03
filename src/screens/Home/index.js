import React, {Component} from "react";
import Canciones from "../../components/Canciones";
import Cantantes from "../../components/Cantantes";
class Home extends Component {
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

export default Home;