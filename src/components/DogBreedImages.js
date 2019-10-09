import React from 'react'
import {Link} from 'react-router-dom'

function DogBreedImages(props){
    return (
        <div>
            <h1>Dogs breed Images</h1>
                This page will show images of a specific dog breed.
            <Link to='/'> Go back to the Main Page </Link> 
        </div>
    )
}

export default DogBreedImages