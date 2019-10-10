import React,{Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom'
import RandomQues from './RandomQues'


export default class game1 extends Component{
    render(){
        return ( 
         <div>
               <h2> GAME # 01 </h2>
               <RandomQues />   
               <Link to='/'>Go back</Link>
         </div>
         ) 
    }

}