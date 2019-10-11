import React,{Component} from 'react'
import {connect} from 'react-redux'
import request from 'superagent'
import {SetRandomBreed} from './actions/FetchAction'
import {RandomImage} from './actions/FetchAction'
import './App.css';
//import {SetScore} from './actions/FetchAction'



class RandomQues extends Component{
   state = {
      score : 0,
      answer : null
   }
      
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
       //console.log('breed',this.props.randomBreed.breed)
       //console.log('event',event.target.innerHTML)
         
       if(this.props.randomBreed.breed === event.target.innerHTML) {
            //Score = Score + 1
            //console.log('your answer is correct and score is : ', Score)
            this.setState({
               answer : 'correct answer - now get next Question',
               score : this.state.score + 1
            })

            setTimeout(() => {
               this.setState({answered:null})
           }, 4000)
       }

       else {
         this.setState({
            answer : `your answer is Wrong, wait for 2 seconds and get Correct Answer!! 
            ${this.props.randomBreed.breed}`,
                       
            score : this.state.score
         })

         setTimeout(() => {
             this.setState({score : this.props.randomBreed.breed})
         }, 50000)
      }
   }

    render(){
       //console.log('score :', this.props.score)
       //console.log('this.props.breedList', this.props.breedList)
        return(
        <div>
           <h1>Random images Quiz...</h1>
           <h2>Check the image and give the correct answer :) </h2>
         
               <div>
               <img src={this.props.randomBreed.randomImageURL} />
               </div><br></br>
               
               <p>{this.state.answer}</p>
               <p>your current score : {this.state.score} </p>

               <div>
               <button  onClick={this.Score}>{this.props.randomBreed.breed}</button>
               
               <button onClick={this.Score}> 
               {this.props.breedList[Math.floor(Math.random() * (this.props.breedList.length-1))]} 
               </button>

               <button onClick={this.Score}>
               {this.props.breedList[Math.floor(Math.random() * (this.props.breedList.length-1))]}
               </button>
               </div>

               
            
       </div>)

    }

}

const mapStateToProps = (state) => {
   //console.log('complete state : ', state);
   // console.log('randomBreed state', state.randomReducer);
   // console.log('score : ', state.score)


   return {
      randomBreed: state.randomReducer, 
      breedList : state.reducer,
      score : state.score
   }
}
export default connect(mapStateToProps)(RandomQues)










