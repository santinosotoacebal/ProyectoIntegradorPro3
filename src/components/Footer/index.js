import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <React.Fragment>
                <footer className='footer'>
                    <div className='autores'>
                    <h6>Tomas Giovana</h6>
                    <h6>Santino Soto Acebal</h6>
                    <h6>Pedro Sampayo Morrow</h6>
                    </div>
                </footer>
            </React.Fragment>
        )
    }    
}
export default Footer