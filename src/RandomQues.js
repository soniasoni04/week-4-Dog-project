import React,{Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'
import {SetRandomBreed} from './actions/FetchAction'
import './App.css';


class RandomQues extends Component{
      
         componentDidMount() {
        request
        .get('https://dog.ceo/api/breeds/image/random')
         .then(response => {
            const randomImageURL = response.body.message
            console.log(response.body.message)
            console.log('randomImage : ',randomImageURL) 

            let breedWithImage = randomImageURL.slice(30)
            console.log('breed :', breedWithImage )

            let posOfImage = breedWithImage.indexOf("/");
            console.log('pos : ', posOfImage)

            let breed = breedWithImage.slice(0,posOfImage)
            console.log('breed :', breed)
            console.log('action',SetRandomBreed(randomImageURL, breed))
            console.log('dispatch?',this.props.dispatch)
            this.props.dispatch(SetRandomBreed(randomImageURL,breed ))
         })    
         .catch(console.error)

    }

    Score=(event)=>{

      let score = 0
       //console.log('breed',this.props.randomBreed.breed)
       //console.log('event',event.target.innerHTML)
         if(this.props.randomBreed.breed===event.target.innerHTML) {
            //console.log('win')
            
            score = score + 1
            console.log(score)

            this.setState(score)
            
            return score
         }
         return score
      }

    render(){
       console.log('this.props.breedList', this.props.breedList)
        return(
        <div>
           <h1>Random images Quiz...</h1>
           <h2>Check the image and give the correct answer :) </h2>
         
               <div>
               <img src={this.props.randomBreed.randomImageURL} />
               </div><br></br>

               <div>
               <button  onClick={this.Score}>{this.props.randomBreed.breed}</button>
               
               <button onClick={this.Score}> 
               {this.props.breedList[Math.floor(Math.random() * (this.props.breedList.length-1))]} 
               </button>

               <button onClick={this.Score}>
               {this.props.breedList[Math.floor(Math.random() * (this.props.breedList.length-1))]}
               </button>
               </div>

               <div>
               <h2> your score is : {this.score}</h2>
               </div>
            
       </div>)

    }

}

const mapStateToProps = (state) => {
    console.log('randomBreed state', state);
    //console.log('breedList', breedList)

   return {
      randomBreed: state.randomReducer, 
      breedList : state.reducer
   }
}
export default connect(mapStateToProps)(RandomQues)










