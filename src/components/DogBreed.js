import React from 'react'

class DogBreed extends React.Component{
   render(){
       console.log(this.props.breeds)
       return(
            <div>
            <ol>
           {this.props.breeds.map(breed => (
               <li key={breed}>{breed}</li>))
        }
        </ol>   
        </div>
           
       )  
   }
}
export default DogBreed