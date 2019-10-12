import React,{Component} from 'react'
import {connect} from 'react-redux'
import GetRandomImage from './GetRandomImage'
import './App.css';

class RandomQues extends Component{
   state = {
      score : 0,
      count : 0,
      answer : null
   }

   componentDidMount() {
      this.props.GetRandomImage();
   }

   Score=(event)=>{

      if(this.props.image.answer===event.target.innerHTML){
         setTimeout(() => {
            this.setState({ answer: null });
            this.increaseScore()
            this.props.GetRandomImage();
        }, 200)

      }
      else {
         this.decreaseScore();
            setTimeout(() => {
                this.setState({ answer :   "OOPS !! Wrong answer. Correct answer was : " + this.props.image.answer })
                this.props.GetRandomImage();
            }, 200);
      }
   }

   increaseScore=()=>{
         this.setState({
            score : this.state.score + 1,
            count : this.state.count +1
         })
   }
   decreaseScore=()=>{
      this.setState({
         score : this.state.score,
         count : this.state.count +1
      })
   }
   


    render(){
        return(
            <div>
               <h2>Random images Quiz...</h2>
               <h2>Check the image and give the correct answer :) </h2>
               
               <div>
               <img src={this.props.image.image} />
               </div>

               <p>{this.state.answer}</p>
               <p>your current score : {this.state.score} </p>
               <p>Your total attempts are  : {this.state.count}</p>

               <div>
                  <button onClick={this.Score}>{this.props.breedListArray[0]}</button>
                  <button onClick={this.Score}>{this.props.breedListArray[1]}</button>
                  <button onClick={this.Score}>{this.props.breedListArray[2]}</button>
               </div>

            </div>)

    }

}

const mapStateToProps = (state) => {
     const answer = state.randomReducer.answer
      const option1 = state.reducer[Math.floor(Math.random() * (state.reducer.length-1))]
      const option2 = state.reducer[Math.floor(Math.random() * (state.reducer.length-1))]
      const breedListArray =[]
      breedListArray.push(answer,option1,option2)
      breedListArray.sort()

   return {
      image : state.randomReducer, 
      breedList : state.reducer,
      breedListArray
   }
}

export default connect(mapStateToProps,{GetRandomImage})(RandomQues)










