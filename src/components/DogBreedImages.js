import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class DogBreedImages extends Component {

    render(){
        return (
                <div>
                    <h1>breed Images</h1>
                    <ol>{this.props.images.map((imageURL,index) => {
                        return <li key = {index}>
                                    <img src={imageURL}  alt='dog-images'/>
                                </li>
                            }
                        )}
                    </ol>

                    <Link to='/'> Go back to the Main Page </Link> 
                </div>
        )
    }
}

export default DogBreedImages