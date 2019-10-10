import React,{Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'


class homePage extends Component{

    render(){
        return(
        
            <div>
            <h1>Hello Dog Lovers...</h1><br></br>
            <h2>Welcome to my Dog Game App</h2><br></br>
            <h2><Link to ="/game1">GAME # 01</Link></h2>
            <h2><Link to ='/game2'> GAME # 02</Link></h2>
            <h2><Link to ='/game3'> GAME # 03</Link></h2><br></br>
            <h2><Link to = '/dog-list'> Find the complete list of dogs with Images </Link></h2>    
       </div>)

    }

}

export default homePage

