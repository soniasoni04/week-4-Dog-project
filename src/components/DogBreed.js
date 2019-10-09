import React from 'react'
import { Link } from 'react-router-dom'

class DogBreed extends React.Component{
   render(){
       console.log(this.props.breeds)
       return(
            <div>
                <ol>
                {this.props.breeds.map((breed,index) => (
                    <li key={index}>
                        <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
                    </li>)
                )}  
                </ol>   
        </div>
           
       )  
   }
}
export default DogBreed