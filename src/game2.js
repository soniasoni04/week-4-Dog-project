import React,{Component} from 'react'
import './App.css';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import RandomImages from './RandomImages'


class game2 extends Component{

    render(){
        return(
        
        <div>
            <h2> GAME # 02</h2>
            <RandomImages /><br></br>
            <Link to='/'>Go back</Link>
        </div>)

    }

}

const mapStateToProps = (state) => {
    //console.log('state', state);
    
   return {
      breeds: state.reducer

   }
}
export default connect(mapStateToProps)(game2)