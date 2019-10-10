// ACTION CREATOR

export const SetBreedList =(breeds) => {
    return {
        type : 'SET_BREED',
        payload : breeds
    }
}

export const SetBreedImages =(breedImages) =>{
    return {
        type : 'SET_BREED_IMAGES',
        payload : breedImages
    }
}

export const SetRandomBreed =(randomImageURL,breed ) =>{
    return {
        type : 'SET_RANDOM_IMAGES',
        payload : { randomImageURL : randomImageURL, breed : breed}
    }
}




