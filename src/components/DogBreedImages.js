import React from 'react'

class DogBreedImages extends React.Component {

    render(){
        console.log(this.props.images)
        return (
            <div>
            {this.props.images.map(image => (
                <li>{image}</li>
            ))
            }
            </div>
            
        )
    }
}

export default DogBreedImages;